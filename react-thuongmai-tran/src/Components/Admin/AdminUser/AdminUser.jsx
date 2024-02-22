import React, { useRef, useState } from 'react'
import { Input, Button, Space, Form, Upload } from 'antd'
import { useSelector } from 'react-redux'
import TableComponent from './Modal/TableComponent'
import * as message from '../../Message'
import Loading from '../../Loading'
import { useEffect } from 'react'
import { getBase64 } from '../../../utils'
import { DeleteOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons'
import { useIsFetching, useQuery, useQueryClient } from '@tanstack/react-query'
import { useMutationHooks } from '../../../Hooks/useMutationHook'
import * as UserService from '../../../Services/UserService'
import ModalComponent from './Modal/ModalComponent'
import DrawerComponent from './Modal/DrawerComponent'

const AdminUser = () => {
  const [rowSelected, setRowSelected] = useState('')
  const searchInput = useRef(null);
  const queryClient = useQueryClient()
  const [isOpenDrawer, setIsOpenDrawer] = useState(false)
  const user = useSelector((state) => state?.user)
  const [isLoadingUpdate, setIsLoadingUpdate] = useState(false)
  const [isModalOpenDelete, setIsModalOpenDelete] = useState(false)
  const users = queryClient.getQueryData(['users'])
  const isFetchingUser = useIsFetching(['users'])
  const [form] = Form.useForm();
  const [stateUserDetails, setStateUserDetails] = useState({
    name: '',
    email: '',
    phone: '',
    isAdmin: false,
    avatar: '',
    address: ''
  })
  const mutationUpdate = useMutationHooks(
    (data) => {
      const { id,
        token,
        ...rests } = data
      const res = UserService.updateUser(
        id,
        { ...rests }, token)
      return res
    },
  )
  const mutationDeletedMany = useMutationHooks(
    (data) => {
      const { token, ...ids
      } = data
      const res = UserService.deleteManyUser(
        ids,
        token)
      return res
    },
  )
   const handleDelteManyUsers = (ids) => {
    mutationDeletedMany.mutate({ ids: ids, token: user?.access_token }, {
      onSettled: () => {
        queryClient.invalidateQueries(['users'])
      }
    })
  }
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
  };
  const mutationDeleted = useMutationHooks(
    (data) => {
      const { id,
        token,
      } = data
      const res = UserService.deleteUser(
        id,
        token)
      return res
    },
  )
  const { data: dataUpdated, isLoading: isLoadingUpdated, isSuccess: isSuccessUpdated, isError: isErrorUpdated } = mutationUpdate
  const { data: dataDeleted, isLoading: isLoadingDeleted, isSuccess: isSuccessDelected, isError: isErrorDeleted } = mutationDeleted
  const { data: dataDeletedMany, isLoading: isLoadingDeletedMany, isSuccess: isSuccessDelectedMany, isError: isErrorDeletedMany } = mutationDeletedMany
  const renderAction = () => {
    return (
      <div>
        <DeleteOutlined style={{ color: 'red', fontSize: '30px', cursor: 'pointer' }} onClick={() => setIsModalOpenDelete(true)}/>
        <EditOutlined style={{ color: 'orange', fontSize: '30px', cursor: 'pointer' }} onClick={handleDetailsProduct}/>
      </div>
    )
  }
  const handleReset = (clearFilters) => {
    clearFilters();
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1890ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
  });
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: (a, b) => {
        const nameA = (a.name || '').toLowerCase(); 
        const nameB = (b.name || '').toLowerCase();
  
        return nameA.localeCompare(nameB);
      },
      ...getColumnSearchProps('name')
    },
    {
      title: 'Email',
      dataIndex: 'email',
      sorter: (a, b) => {
        const nameA = (a.name || '').toLowerCase(); 
        const nameB = (b.name || '').toLowerCase(); 
  
        return nameA.localeCompare(nameB);
      },
      ...getColumnSearchProps('email')
    },
    {
      title: 'Address',
      dataIndex: 'address',
      sorter: (a, b) => {
        const nameA = (a.name || '').toLowerCase(); 
        const nameB = (b.name || '').toLowerCase(); 
  
        return nameA.localeCompare(nameB);
      },
      ...getColumnSearchProps('address')
    },
    {
      title: 'Admin',
      dataIndex: 'isAdmin',
      filters: [
        {
          text: 'True',
          value: true,
        },
        {
          text: 'False',
          value: false,
        }
      ],
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      ssorter: (a, b) => {
        const nameA = (a.name || '').toLowerCase(); 
        const nameB = (b.name || '').toLowerCase(); 
  
        return nameA.localeCompare(nameB);
      },
      ...getColumnSearchProps('phone')
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: renderAction
    },
  ];
  const dataTable = users?.data?.length > 0 && users?.data?.map((user) => {
    return { ...user, key: user._id, isAdmin: user.isAdmin ? 'TRUE' : 'FALSE' }
  })
  const handleCancelDelete = () => {
    setIsModalOpenDelete(false)
  }
  useEffect(() => {
    if (isSuccessDelected && dataDeleted?.status === 'OK') {
      message.success('Bạn đã xóa tài khoản thành công')
      handleCancelDelete()
    } else if (isErrorDeleted) {
      message.error('Xóa thất bại !')
    }
  }, [isSuccessDelected])
  useEffect(() => {
    if (isSuccessDelectedMany && dataDeletedMany?.status === 'OK') {
      message.success('Delete dữ liệu thành công.')
    } else if (isErrorDeletedMany) {
      message.error('Delete thất bại !');
    }
  }, [isSuccessDelectedMany]);
  const handleDeleteUser = () => {
    mutationDeleted.mutate({ id: rowSelected, token: user?.access_token }, {
      onSettled: () => {
        queryClient.invalidateQueries(['users'])
      }
    })
  }
  const handleDetailsProduct = () => {
    setIsOpenDrawer(true)
  }
  const handleOnchangeDetails = (e) => {
    setStateUserDetails({
      ...stateUserDetails,
      [e.target.name]: e.target.value
    })
  }
  const handleOnchangeAvatarDetails = async ({ fileList }) => {
    const file = fileList[0]
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setStateUserDetails({
      ...stateUserDetails,
      avatar: file.preview
    })
  }
  const onUpdateUser = () => {
    if (!stateUserDetails.name || !stateUserDetails.email || !stateUserDetails.phone || !stateUserDetails.address || !stateUserDetails.avatar) {
      message.error('Bạn chưa nhập đầy đủ dữ liệu.');
      return;
    }

    mutationUpdate.mutate({ id: rowSelected, token: user?.access_token, ...stateUserDetails }, {
      onSettled: () => {
        queryClient.invalidateQueries(['users'])
      }
    })
  }
  const fetchGetDetailsUser = async (rowSelected) => {
    const res = await UserService.getDetailsUser(rowSelected)
    if (res?.data) {
      setStateUserDetails({
        name: res?.data?.name,
        email: res?.data?.email,
        phone: res?.data?.phone,
        isAdmin: res?.data?.isAdmin,
        address: res?.data?.address,
        avatar: res.data?.avatar
      })
    }
    setIsLoadingUpdate(false)
  }
  const handleCloseDrawer = () => {
    setIsOpenDrawer(false);
    setStateUserDetails({
      name: '',
      email: '',
      phone: '',
      isAdmin: false,
    })
    form.resetFields()
  };
  useEffect(() => {
    if (isSuccessUpdated && dataUpdated?.status === 'OK') {
      message.success('Cập nhật thành công.')
      handleCloseDrawer()
    } else if (isErrorUpdated) {
      message.error('Cập nhật thất bại')
    }
  }, [isSuccessUpdated])

  useEffect(() => {
    form.setFieldsValue(stateUserDetails)
  }, [form, stateUserDetails])

  useEffect(() => {
    if (rowSelected && isOpenDrawer) {
      setIsLoadingUpdate(true)
      fetchGetDetailsUser(rowSelected)
    }
  }, [rowSelected, isOpenDrawer])

  return (
    <div className='AdminUser'>
      <div className='AdminUser-list_User'>
        <h2>Quản lý người dùng</h2>
        <div className='AdminUser-table-component'>
          <TableComponent handleDelteMany={handleDelteManyUsers} columns={columns} data={dataTable}
           isLoading={isFetchingUser > 0} onRow={(record, rowIndex) => {
            return {
              onClick: event => {
                setRowSelected(record._id)
              }
            };
          }} />
        </div>
        <ModalComponent title="Xóa người dùng" open={isModalOpenDelete} onCancel={handleCancelDelete} onOk={handleDeleteUser}>
          <Loading isLoading={isLoadingDeleted}>
            <div>Bạn có chắc xóa tài khoản này không?</div>
          </Loading>
        </ModalComponent>
        <DrawerComponent className='Drawer-from-Modal' title='Chi tiết người dùng' isOpen={isOpenDrawer} onClose={() => setIsOpenDrawer(false)} width="90%">
          <Loading isLoading={isLoadingUpdate || isLoadingUpdated}>
          <Form name="basic" labelCol={{ span: 2 }} wrapperCol={{ span: 22 }} onFinish={onUpdateUser} autoComplete="on" form={form}> 
            {/* ===== */}
            <Form.Item label="Name" name="name">
              <Input value={stateUserDetails['name']} onChange={handleOnchangeDetails} name="name" />
            </Form.Item>
            {/* ====== */}
            <Form.Item label="Email" name="email">
              <Input value={stateUserDetails['email']} onChange={handleOnchangeDetails} name="email" />
            </Form.Item>
            {/* ====== */}
            <Form.Item label="Phone" name="phone">
              <Input value={stateUserDetails['name']} onChange={handleOnchangeDetails} name="phone" />
            </Form.Item>
            {/* ====== */}
            <Form.Item label="Address" name="address">
              <Input value={stateUserDetails['address']} onChange={handleOnchangeDetails} name="address" />
            </Form.Item>
            {/* ====== */}
            <Form.Item label="Avatar" name="avatar">
              <Upload fileList={stateUserDetails.avatar ? [{ uid: '-1', url: stateUserDetails.avatar }] : []} onChange={handleOnchangeAvatarDetails} maxCount={1}>
                <button type='button' className='Table-Avatar-Details'><i className="fa-solid fa-arrow-down"></i>Tải ảnh</button>
                {stateUserDetails?.avatar && ( 
                  <img className='Table-Avatar_img' src={stateUserDetails?.avatar} alt="avatar" />)}
              </Upload>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 20, span: 16 }}>
              <Button className='primary-Details' type="primary" htmlType="submit">
                Cập nhật
              </Button>
            </Form.Item>
          </Form>
          </Loading>
        </DrawerComponent>
      </div>
    </div>
  )
}

export default AdminUser
