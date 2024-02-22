import React, { useState, useEffect } from 'react'
import './HomeHeader.css'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import logo01 from '../../Assets/images/logo03.png';
import anhUser from '../../Assets/images/User02.png'
import { resetUser } from '../../Redux/slides/userSlide'
import * as UserService from '../../Services/UserService'
import * as message from '../Message'
import Loading from '../Loading';

const HeaderComponent = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [userName, setUserName] = useState('')
    const [userAvatar, setUserAvatar] = useState('')
    const [loading, setLoading] = useState(false)
    const user = useSelector((state) => state.user)
    const handleNalogin = () => {
        navigate('/sign-in')
        message.success('Bạn đã vào cổng thông tin đăng nhập.')
    }
    const handleProfile = () => {
        navigate('/profile-user')
        message.success('Bạn đã vào trang thông tin tài khoản.')
    }
    const handleAdmin = () => {
        navigate('/system/admin')
        message.success('Bạn đã vào hệ thống Website.')
    }
  useEffect(() => {
    setLoading(true)
    setUserName(user?.name)
    setUserAvatar(user?.avatar)
    setLoading(false)
  }, [user?.name, user?.avatar])
  const handleLogout = async () => {
    setLoading(true)
    await UserService.logoutUser()
    dispatch(resetUser())
    setLoading(false)
    message.success('Bạn đã đăng xuất tài khoản.')
  }

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
                    
                    <div className="header__search">
                        <div className="header__search-input-wrap">
                            <input type="text" className="header__search-input" placeholder="Nhập để tìm kiếm sản phẩm "/>
                        </div>
                        <button className="header__search-btn" type="submit">
                            <i className="header__search-btn-icon fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                    <div className="header__cart">
                        <div className="header__cart-wrap">
                            <i className="header__cart-ion fa-solid fa-cart-shopping"></i>
                            <span className="header__cart-notice">3</span>
                        </div>
                    </div>
                    <Loading isLoading={loading}>
                        {user?.access_token ? (
                    <div className="header__navbar-item header__navbar-user">
                        {userAvatar ? (
                            <img src={userAvatar} alt="" className="header__navbar-user-img header__navbar-item--strong"/>
                        ) : (
                            <img src={anhUser} alt="" className="header__navbar-user-img header__navbar-item--strong"/>
                        )}
                            <span className="header__navbar-user-name header__navbar-item--strong">
                                {userName?.length ? userName : user?.email}</span>

                            <ul className="header__navbar-user-menu">
                                <h3 className='user-item_h3'>Tài khoản của tôi</h3>
                                {user?.isAdmin && (
                                <li className="header__navbar-user-item">
                                    <a onClick={handleAdmin}>Quản lý hệ thống</a>
                                </li>   
                                )}                        
                                <li className="header__navbar-user-item">
                                    <a onClick={handleProfile}>Thông tin tài khoản</a>
                                </li>
                                <li className="header__navbar-user-item">
                                    <a href="">Quản lý đơn hàng</a>
                                </li>
                                <li className="header__navbar-user-item header__navbar-user-item--separate">
                                    <a onClick={() => handleLogout()}>Đăng xuất</a>
                                </li>
                            </ul>
                    </div> 
                    ) : (
                    <button className="header__navbar-item header__navbar-item--separate" onClick={handleNalogin}> 
                    <i className="fa-solid fa-user"></i>Tài khoản</button>
                    )}
                    </Loading>
                    <div className='header_bars-i'><i className="fa-solid fa-bars"></i></div>
                </div>
              </div>
             </header>
        </div>
  )
}

export default HeaderComponent
