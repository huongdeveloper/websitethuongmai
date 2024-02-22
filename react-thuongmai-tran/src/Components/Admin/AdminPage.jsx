import React, { useState, useEffect } from 'react'
import '../HomePage/HomeHeader.css'
import { Menu } from 'antd'
import { getItem } from '../../utils';
import logo01 from '../../Assets/images/logo03.png';
import anhUser from '../../Assets/images/User02.png';
import { useNavigate } from 'react-router-dom'
import * as message from '../Message'
import { useSelector } from 'react-redux';
import Loading from '../Loading';
import { useMemo } from 'react';
import { useQueries } from '@tanstack/react-query';
import { UserOutlined, AppstoreOutlined, ShoppingCartOutlined, FileDoneOutlined, 
  ContainerOutlined, FileImageOutlined, SkinOutlined, BgColorsOutlined } from '@ant-design/icons'
import AdminUser from './AdminUser/AdminUser';
import AdminProduct from './AdminProduct/AdminProduct';
import OrderAdmin from './AdminCart/OrderAdmin';
import AdminHome from './AdminHome/AdminHome';
import * as UserService from '../../Services/UserService'
import * as CategoryService from '../../Services/CategoryService'
import AdminCartegory from './AdminCartegory/AdminCartegory';

const AdminPage = () => {
  const navigate = useNavigate()
  const [userName, setUserName] = useState('')
  const [userAvatar, setUserAvatar] = useState('')
  const [loading, setLoading] = useState(false)
  const user = useSelector((state) => state?.user)

  const [keySelected, setKeySelected] = useState('');

  useEffect(() => {
    setLoading(true)
    setUserName(user?.name)
    setUserAvatar(user?.avatar)
    setLoading(false)
  }, [user?.name, user?.avatar])

  const handleLogout = () => {
    navigate('/')
    message.success('Bạn đã chuyển về trang Home.')
  }
  const handleOnCLick = ({ key }) => {
    setKeySelected(key)
  }
  const items = [
    getItem('Người dùng', 'users', <UserOutlined />),
    getItem('Danh mục', 'cartegorys', <FileDoneOutlined />),
    getItem('Loại sản phẩm', 'productTypes', <ContainerOutlined />),
    getItem('Sản phẩm', 'products', <AppstoreOutlined />),
    getItem('Ảnh mô tả', 'descriptions', <FileImageOutlined />),
    getItem('Coler sản phẩm', 'productColor', <BgColorsOutlined />),
    getItem('Size sản phẩm', 'productSizes', <SkinOutlined />),
    getItem('Đơn hàng', 'orders', <ShoppingCartOutlined />),
    
  ];
  const renderPage = (key) => {
    switch (key) {
      case 'users':
        return (
          <AdminUser />
        )
      case 'products':
        return (
          <AdminProduct />
        )
      case 'orders':
        return (
          <OrderAdmin />
        )
      case 'cartegorys':
        return (
          <AdminCartegory />
        )
      default:
        return <></>
    }
  }
  const COLORS = {
    users: ['#0378e6', '#22f317'],
    products: ['#ef0909', '#10f12a'],
    orders: ['#11998e', '#38ef7d'],
    cartegorys: ['#06e928', '#e014e0']
   };

  const getAllUsers = async () => {
    const res = await UserService.getAllUser(user?.access_token)
    return {data: res?.data, key: 'users'}
  }
  const getAllCategorys = async () => {
    const res = await CategoryService.getAllCategory()
    return {data: res?.data, key: 'cartegorys'}
  }
   const queries = useQueries({
    queries: [
      {queryKey: ['cartegorys'], queryFn: getAllCategorys, staleTime: 1000 * 60},
      {queryKey: ['users'], queryFn: getAllUsers, staleTime: 1000 * 60},
    ]
  })
   const memoCount = useMemo(() => {
    const result = {}
    try {
      if(queries) {
        queries.forEach((query) => {
          result[query?.data?.key] = query?.data?.data?.length
        })
      }
    return result
    } catch (error) {
      return result
    }
  },[queries])
  return (
    <div className="app">
        <header className="header">
              <div className="grid">
                <div className="header-with-search">
                    <div className="header__logo">
                        <a href="/" className="header__logo-link">
                            <img src={logo01} alt="" className="header__logo-img" />
                        </a>
                    </div>
                    <Loading isLoading={loading}>
                    {user?.isAdmin && (
                      <div className='header_Admin-user'>
                        <h2>Xin chào:</h2>
                        {userAvatar ? (
                        <img src={userAvatar} alt="" />
                        ) : (
                          <img src={anhUser} alt="" />
                        )}
                        <span>{userName?.length ? userName : user?.email}</span>
                      </div>
                      )} 
                    </Loading>
                    <div className='header__Admin-logout'>
                      <i className="fa-solid fa-arrow-right-from-bracket" onClick={handleLogout}></i>
                    </div>
                </div>
              </div>
        </header>
        <div className='body__Admin'>
          <div className='grid'>
            <div className='body__Admin-Menu'>
              <Menu mode="inline" className='body__Admin-Menu-left'
              items={items} onClick={handleOnCLick}/>
              <div className='body__Admin-home'>
                <Loading isLoading={memoCount && Object.keys(memoCount) &&  Object.keys(memoCount).length !== 2}>
                {!keySelected && (
                  <AdminHome data={memoCount} colors={COLORS} setKeySelected={setKeySelected}/>
                  )}
                </Loading>
                {renderPage(keySelected)}
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AdminPage
