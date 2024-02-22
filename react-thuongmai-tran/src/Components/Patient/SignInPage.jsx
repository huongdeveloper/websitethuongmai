import React, { useEffect } from 'react';
import './HomeCss.css';
import { useState } from 'react'
import jwt_decode from "jwt-decode";
import Loading from '../Loading'
import * as message from '../Message'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import backgroundImage from '../../Assets/images/pexels.webp';
import { updateUser } from '../../Redux/slides/userSlide'
import * as UserService from '../../Services/UserService'
import { useMutationHooks } from '../../Hooks/useMutationHook'

const SignInPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const user  = useSelector((state) => state.user)

  const mutation = useMutationHooks(
    data => UserService.loginUser(data)
  )

  const handleGetDetailsUser = async (id, token) => {
      const storage = localStorage.getItem('refresh_token')
      const refreshToken = JSON.parse(storage)
      const res = await UserService.getDetailsUser(id, token)
      dispatch(updateUser({ ...res?.data, access_token: token,refreshToken }))
  }
  const { data, isLoading, isSuccess } = mutation
  useEffect(() => {
    if (isSuccess) {
      if(location?.state) {
        navigate(location?.state)
      }else {
        navigate('/')
      }
      localStorage.setItem('access_token', JSON.stringify(data?.access_token))
      localStorage.setItem('refresh_token', JSON.stringify(data?.refresh_token))
      if (data?.access_token) {
        const decoded = jwt_decode(data?.access_token)
        if (decoded?.id) {
          handleGetDetailsUser(decoded?.id, data?.access_token)
          message.success('Đăng nhập thành công.');
        }
      }
    }
  }, [isSuccess])

  const handleNavigateSignUp = () => {
    message.success('Chuyển trang đăng ký thành công.')
    navigate('/sign-up')
  }
  const handleOnchangeEmail = (e) => {
    setEmail(e.target.value);
  }
  const handleOnchangePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleSignIn = (e) => {
    e.preventDefault();
  
    if (!email.length || !password.length) {
      message.error("Bạn chưa nhập dữ liệu.Vui lòng nhập vào.");
      return;
    }
    mutation.mutate({
      email,
      password
    })
  }

  return (
    <div className="signin-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="signin-form">
        <div className='signin-form-header'>
            <h2>Đăng nhập</h2>
            <a className='signin-form-clear' href="/">X</a>
        </div>
        <form>
            <div className='login__check'>
                <input type="email" className='signin_user-input' 
                placeholder='Email người dùng' value={email} onChange={handleOnchangeEmail}/>
                <span className='login__box'><i class="fa-regular fa-envelope"></i></span>
            </div>
            <div className='login__check'>
                <input type={isShowPassword ? "text" : "password"} className='signin_user-input' 
                placeholder='Mật khẩu' value={password} onChange={handleOnchangePassword}/>
                <span className='login__check-span' onClick={() => setIsShowPassword(!isShowPassword)}>
                    <i className={isShowPassword ? 'fa-regular fa-eye' : 'fa-regular fa-eye-slash'}></i>
                </span>
            </div>
            <div className='Forgot-password'>
                <a href="">Quên mật khẩu?</a>
            </div>
            {data?.status === 'ERR' && <span style={{ color: 'red' }}>{data?.message}</span>}
            <Loading isLoading={isLoading}>
              <button type="submit" onClick={handleSignIn}>Đăng nhập</button>
          </Loading>
          <p className='login__register'>Bạn chưa có tài khoản?<p className='register' onClick={handleNavigateSignUp}> đăng ký </p>tại đây.</p>
        </form>
      </div>
    </div>
  );
}

export default SignInPage;
