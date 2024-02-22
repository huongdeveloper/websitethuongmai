import React, { useEffect, useRef, useState } from 'react'
import { Input, Button, Space, Form, Upload } from 'antd'
import { useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import TableComponent from '../AdminUser/Modal/TableComponent'
import * as CategoryService from '../../../Services/CategoryService'
import { PlusOutlined, DeleteOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons'
import { useMutationHooks } from '../../../Hooks/useMutationHook'
import ModalComponent from '../AdminUser/Modal/ModalComponent'
import * as message from '../../Message'
import Loading from '../../Loading'
import { getBase64 } from '../../../utils'
import DrawerComponent from '../AdminUser/Modal/DrawerComponent'

const AdminCartegory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const searchInput = useRef(null);
  const user = useSelector((state) => state?.user)
  const [isModalOpenDelete, setIsModalOpenDelete] = useState(false)
  const [rowSelected, setRowSelected] = useState('')
  const [isOpenDrawer, setIsOpenDrawer] = useState(false)
  const [isLoadingUpdate, setIsLoadingUpdate] = useState(false)
  const inittial = () => ({
    name: '', image: ''
  })
  const [stateCartegory, setStateCartegogy] = useState(inittial())
  const [stateCartegoryDetails, setStateCartegoryDetails] = useState(inittial())

  const [form] = Form.useForm();
  const mutation = useMutationHooks(
    (data) => {
      const { name, image } = data
      const res = CategoryService.createCategory({ name, image })
      return res
    }
  )
  const mutationDeleted = useMutationHooks(
    (data) => {
      const { id,
        token,
      } = data
      const res = CategoryService.deleteCategory(
        id,
        token)
      return res
    },
  )
  const mutationUpdate = useMutationHooks(
    (data) => {
      const { id,
        token,
        ...rests } = data
      const res = CategoryService.updateCategory(
        id,
        token,
        { ...rests })
      return res
    },
  )
  const mutationDeletedMany = useMutationHooks(
    (data) => {
      const { token, ...ids
      } = data
      const res = CategoryService.deleteManyCategory(
        ids,
        token)
      return res
    },
  )
  const getAllCategorys = async () => {
    const res = await CategoryService.getAllCategory()
    return res
  }
  useEffect(() => {
    if(!isModalOpen) {
      form.setFieldsValue(stateCartegoryDetails)
    }else {
      form.setFieldsValue(inittial());
      setStateCartegogy({
        ...stateCartegory,
        image: ''
      });
    }
  }, [form, stateCartegoryDetails, isModalOpen])
  const { data, isLoading, isSuccess, isError } = mutation
  const { data: dataUpdated, isLoading: isLoadingUpdated, isSuccess: isSuccessUpdated, isError: isErrorUpdated } = mutationUpdate
  const { data: dataDeleted, isLoading: isLoadingDeleted, isSuccess: isSuccessDelected, isError: isErrorDeleted } = mutationDeleted
  const { data: dataDeletedMany, isLoading: isLoadingDeletedMany, isSuccess: isSuccessDelectedMany, isError: isErrorDeletedMany } = mutationDeletedMany

  const queryCategory = useQuery({ queryKey: ['categorys'], queryFn: getAllCategorys })
  const { isLoading: isLoadingCategorys, data: categorys } = queryCategory
  const renderAction = () => {
    return (
      <div>
        <DeleteOutlined style={{ color: 'red', fontSize: '30px', cursor: 'pointer' }} onClick={() => setIsModalOpenDelete(true)}/>
        <EditOutlined style={{ color: 'orange', fontSize: '30px', cursor: 'pointer' }} onClick={handleDetailsProduct}/>
      </div>
    )
  }
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
  };
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
      sorter: (a, b) => a.name.length - b.name.length,
      ...getColumnSearchProps('name')
    },
    {
      title: 'image',
      dataIndex: 'image',
      render: (image) => <img src={image} alt="image" style={{ maxWidth: '60px', maxHeight: '50px' }} />
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: renderAction
    },
  ];
  const dataTable = categorys?.data?.length && categorys?.data?.map((cartegory) => {
    return { ...cartegory, key: cartegory._id }
  })
  const handleDelteManyCartegorys = (ids) => {
    mutationDeletedMany.mutate({ ids: ids, token: user?.access_token }, {
      onSettled: () => {
        queryCategory.refetch()
      }
    })
  }
  const handleCancel = () => {
    setIsModalOpen(false);
    setStateCartegogy({
      name: '', image: ''
    })
    form.resetFields()
  };
  const onFinish = () => {
    const params = {
      name: stateCartegory.name,
      image: stateCartegory.image
    }
    if (!params.name.trim()) {
      message.error('Bạn chưa nhập dữ liệu.');
    } else {
      mutation.mutate(params, {
        onSettled: () => {
          queryCategory.refetch()
          message.success('Tạo danh mục thành công.')
          setIsModalOpen(false);
        }
      })
    }
    
  }
  const handleOnchange = (e) => {
    setStateCartegogy({
      ...stateCartegory,
      [e.target.name]: e.target.value
    })
  }
  const handleOnchangeAvatar = async ({ fileList }) => {
    const file = fileList[0]
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setStateCartegogy({
      ...stateCartegory,
      image: file.preview
    })
  }
  const handleCancelDelete = () => {
    setIsModalOpenDelete(false)
  }
  const handleDeleteProduct = () => {
    mutationDeleted.mutate({ id: rowSelected, token: user?.access_token }, {
      onSettled: () => {
        queryCategory.refetch()
      }
    })
  }
  useEffect(() => {
    if (isSuccessDelected && dataDeleted?.status === 'OK') {
      message.success('Delete dữ liệu thành công.')
      handleCancelDelete()
    } else if (isErrorDeleted) {
      message.error('Delete thất bại')
    }
  }, [isSuccessDelected])
  useEffect(() => {
    if (isSuccessDelectedMany && dataDeletedMany?.status === 'OK') {
      message.success()
    } else if (isErrorDeletedMany) {
      message.error()
    }
  }, [isSuccessDelectedMany])
  useEffect(() => {
    if (rowSelected && isOpenDrawer) {
      setIsLoadingUpdate(true)
      fetchGetDetailsCartegory(rowSelected)
    }
  }, [rowSelected, isOpenDrawer])

  const fetchGetDetailsCartegory = async (rowSelected) => {
    const res = await CategoryService.getDetailsCategory(rowSelected)
    if (res?.data) {
      setStateCartegoryDetails({
        name: res?.data?.name,
        image: res?.data?.image,
      })
    }
    setIsLoadingUpdate(false)
  }
  const handleDetailsProduct = () => {
    setIsOpenDrawer(true)
  }
  const handleOnchangeDetails = (e) => {
    setStateCartegoryDetails({
      ...stateCartegoryDetails,
      [e.target.name]: e.target.value
    })
  }
  const handleOnchangeAvatarDetails = async ({ fileList }) => {
    const file = fileList[0]
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setStateCartegoryDetails({
      ...stateCartegoryDetails,
      image: file.preview
    })
  }
  const onUpdateProduct = () => {
    if (!stateCartegoryDetails.name || !stateCartegoryDetails.image) {
      message.error('Bạn chưa nhập đầy đủ dữ liệu!');
      return;
    }
    mutationUpdate.mutate({ id: rowSelected, token: user?.access_token, ...stateCartegoryDetails }, {
      onSettled: () => {
        queryCategory.refetch()
        setIsOpenDrawer(false)
      }
    })
  }

  return (
    <div className='AdminUser'>
      <div className='AdminUser-list_User'>
        <h2>Quản lý danh mục</h2>
        <div style={{ marginTop: '10px' }}>
          <Button className='Admin_cartegory-create' onClick={() => setIsModalOpen(true)}><PlusOutlined/>Tạo danh mục</Button>
        </div>
        <div className='AdminUser-table-component'>
          <TableComponent handleDelteMany={handleDelteManyCartegorys} columns={columns} data={dataTable}
           isLoading={isLoadingCategorys}onRow={(record, rowIndex) => {
            return {
              onClick: event => {
                setRowSelected(record._id)
              }
            };
          }} />
        </div>
        <ModalComponent forceRender title="Tạo danh mục" open={isModalOpen} onCancel={handleCancel} footer={null}>
          <Loading isLoading={isLoading}>
          <Form name="basic" labelCol={{ span: 6 }} wrapperCol={{ span: 18 }} onFinish={onFinish} autoComplete="on" form={form} >
            <Form.Item label="Name" name="name">
              <Input value={stateCartegory['name']} onChange={handleOnchange} name="name" />
            </Form.Item>
            {/* ============= */}
            <Form.Item label="Image" name="image">
              <Upload fileList={stateCartegory.image ? [{ uid: '-1', url: stateCartegory.image }] : []} onChange={handleOnchangeAvatar} maxCount={1}>
                <button className='Table-Avatar-Details' type='button'><i className="fa-solid fa-arrow-down"></i>Tải ảnh</button>
                {stateCartegory?.image && ( 
                  <img className='Table-Avatar_img' src={stateCartegory?.image} alt="image" />)}
              </Upload>
            </Form.Item>
            {/* ============= */}
            <Form.Item wrapperCol={{ offset: 20, span: 16 }}>
              <Button className='primary-Details' type="primary" htmlType="submit">
                Create
              </Button>
            </Form.Item>
          </Form>
        </Loading>
        </ModalComponent>
        <DrawerComponent title='Chi tiết danh mục' isOpen={isOpenDrawer} onClose={() => setIsOpenDrawer(false)} width="90%">
        <Loading isLoading={isLoadingUpdate || isLoadingUpdated}>
          <Form name="basic" labelCol={{ span: 2 }} wrapperCol={{ span: 22 }} onFinish={onUpdateProduct} autoComplete="on" form={form}>
            <Form.Item label="Name" name="name" >
              <Input value={stateCartegoryDetails['name']} onChange={handleOnchangeDetails} name="name" />
            </Form.Item>
            {/* ============= */}
            <Form.Item label="Image" name="image" >
              <Upload fileList={stateCartegory.image ? [{ uid: '-1', url: stateCartegory.image }] : []} onChange={handleOnchangeAvatarDetails} maxCount={1}>
                <button className='Table-Avatar-Details' type='button'><i className="fa-solid fa-arrow-down"></i>Tải ảnh</button>
                {stateCartegoryDetails?.image && (
                  <img src={stateCartegoryDetails?.image} className='Table-Avatar_img'/> )}
              </Upload>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 20, span: 16 }}>
              <Button className='primary-Details' type="primary" htmlType="submit">
                Update
              </Button>
            </Form.Item>
          </Form>
        </Loading>
      </DrawerComponent>
        <ModalComponent title="Xóa danh mục" open={isModalOpenDelete} onCancel={handleCancelDelete} onOk={handleDeleteProduct}>
        <Loading isLoading={isLoadingDeleted}>
          <div>Bạn có chắc xóa danh mục này không?</div>
        </Loading>
      </ModalComponent>
      </div>
    </div>
  )
}

export default AdminCartegory
