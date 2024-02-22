import React, { useState, useEffect } from 'react'
import '../../Patient/HomeCss.css'
import { Upload } from "antd";
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getBase64 } from '../../../utils'
import * as UserService from '../../../Services/UserService'
import { useMutationHooks } from '../../../Hooks/useMutationHook'
import * as message from '../../Message'
import Loading from '../../Loading'
import { updateUser } from '../../../Redux/slides/userSlide'

const ProfilePage = () => {
    const navigate = useNavigate()
    const user = useSelector((state) => state.user)
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [avatar, setAvatar] = useState('')
    const mutation = useMutationHooks(
        (data) => {
            const { id, access_token, ...rests } = data
            UserService.updateUser(id, rests, access_token)
        }
    )

    const dispatch = useDispatch()
    const { data, isLoading, isSuccess, isError } = mutation
    useEffect(() => {
        setEmail(user?.email)
        setName(user?.name)
        setPhone(user?.phone)
        setAddress(user?.address)
        setAvatar(user?.avatar)
    }, [user])

    useEffect(() => {
      if (isSuccess) {
          message.success('Cập nhật thông tin nhập thành công.')
          handleGetDetailsUser(user?.id, user?.access_token)
          navigate('/');
      } else if (isError) {
          message.error('Cập nhật thất bại !')
      }
  }, [isSuccess, isError])
  const handleGetDetailsUser = async (id, token) => {
      const res = await UserService.getDetailsUser(id, token)
      dispatch(updateUser({ ...res?.data, access_token: token }))
  }
  const handleOnchangeName = (e) => {
    setName(e.target.value)
  }
  const handleOnchangeEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleOnchangePhone = (e) => {
    setPhone(e.target.value)
  }
  const handleOnchangeAddress = (e) => {
    setAddress(e.target.value)
  }
  const handleOnchangeAvatar = async ({fileList}) => {
    const file = fileList[0]
    if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj );
    }
    setAvatar(file.preview)
  }
  const handleUpdate = () => {
    mutation.mutate({ id: user?.id, email, name, phone, address, avatar, access_token: user?.access_token })
  }
  const handleProfileDelete = () => {
    navigate('/')
    message.success('Bạn đã thoát khỏi trang.')
  }
  return (
    <div className='ProfilePage-components'>
      <div className='grid'>
        <span className='ProfilePage-span'>
          <i className="Profile-span_i fa-solid fa-circle-arrow-left" onClick={handleProfileDelete}></i>
          <h2>Thông tin người dùng</h2>
          </span>
        <div className='Profile'>
          <Loading isLoading={isLoading}>
          <div className='Profile-table'>
            <div className='Profile-table-name'>
              <label htmlFor="">Name</label>
              <input type="text" placeholder='Nhập Tên' value={name} onChange={handleOnchangeName}/>
            </div>
            <div className='Profile-table-name Profile-Email'>
              <label htmlFor="">Email</label>
              <input type="text" placeholder='Nhập email' value={email} onChange={handleOnchangeEmail}/>
            </div>
            <div className='Profile-table-name'>
              <label htmlFor="">Phone</label>
              <input type="text" placeholder='Nhập phone' value={phone} onChange={handleOnchangePhone}/>
            </div>
            <div className='Profile-table-name Profile_Avatar'>
              <label htmlFor="">Avatar</label>
              <div className='Profile-table-Avatar'>
                
                <Upload onChange={handleOnchangeAvatar} maxCount={1}>
                <button className='Profile-table-Avatar-button'><i className="fa-solid fa-arrow-down"></i>Tải ảnh</button>
                </Upload>
                {avatar && ( <img className='Profile-table-Avatar_img' src={avatar} alt="avatar" />)}
              </div>
            </div>
            <div className='Profile-table-name Profile-table-Address'>
              <label htmlFor="">Address</label>
              <input type="text" placeholder='Nhập address' value={address} onChange={handleOnchangeAddress}/>
            </div>
            <div>
            <button className='Profile-table-button' onClick={handleUpdate}>Cập nhật</button>
            <button className='Profile-table-delete' onClick={handleProfileDelete}>Hủy</button>
            </div>
          </div>
          </Loading>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
