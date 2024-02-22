import React, { useEffect } from 'react';
import './HomeCss.css';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutationHooks } from '../../Hooks/useMutationHook'
import registerImage from '../../Assets/images/register03.jpeg'; 
import * as UserService from '../../Services/UserService'
import Loading from '../Loading'
import * as message from '../Message'

const SignUpPage = () => {
    const [isShowPassword, setIsShowPassword] = useState(false)
    const [isShowRestPassword, setIsShowRestPassword] = useState(false)
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

  const mutation = useMutationHooks(
    data => UserService.signupUser(data)
  )
  const { data, isLoading, isSuccess, isError } = mutation
  useEffect(() => {
    if (isSuccess) {
      message.success("Đăng ký thành công.")
      handleNavigateSignIn()
      return;
    } else if (isError) {
      message.error("Đăng ký thất bại.")
      return;
    }
  }, [isSuccess, isError])

  const handleNavigateSignIn = () => {
    message.success('Chuyển trang đăng nhập thành công.')
    navigate('/sign-in')
  }
  const handleOnchangeEmail = (e) => {
    setEmail(e.target.value);
  }
  const handleOnchangePassword = (e) => {
    setPassword(e.target.value);
  }
  const handleOnchangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  }
  const handleSignUp = (e) => {
    e.preventDefault();
  
    if (!email.length || !password.length || !confirmPassword.length) {
      message.error("Bạn chưa nhập dữ liệu.Vui lòng nhập vào.");
      return;
    } else if (password !== confirmPassword) {
      message.error("Mật khẩu không khớp.Vui lòng kiểm tra lại.");
      return;
    }
    mutation.mutate({ email, password, confirmPassword })
  }

    return (
      <div className="signin-container" style={{ backgroundImage: `url(${registerImage})` }}>
        <div className="signin-form">
          <div className='signin-form-header'>
              <h2>Đăng ký</h2>
              <a className='register-form-clear' href="/">X</a>
          </div>
          <form>
              <div className='login__check'>
                  <input type="email" className='signin_user-input' placeholder='Email người dùng' 
                  value={email} onChange={handleOnchangeEmail}/>
                  <span className='login__box'><i class="fa-regular fa-envelope"></i></span>
              </div>
              <div className='login__check'>
                  <input type={isShowPassword ? "text" : "password"} className='signin_user-input' 
                   placeholder='Mật khẩu mới' value={password} onChange={handleOnchangePassword}/>
                  <span className='login__check-span' onClick={() => setIsShowPassword(!isShowPassword)}>
                      <i className={isShowPassword ? 'fa-regular fa-eye' : 'fa-regular fa-eye-slash'}></i>
                  </span>
              </div>
              <div className='login__check'>
                  <input type={isShowRestPassword ? "text" : "password"} className='signin_user-input' 
                   placeholder='Nhập lại Mật khẩu mới' value={confirmPassword} onChange={handleOnchangeConfirmPassword}/>
                  <span className='login__check-span' onClick={() => setIsShowRestPassword(!isShowRestPassword)}>
                      <i className={isShowRestPassword ? 'fa-regular fa-eye' : 'fa-regular fa-eye-slash'}></i>
                  </span>
              </div>
              {data?.status === 'ERR' && <span style={{ color: 'red' }}>{data?.message}</span>}
              <Loading isLoading={isLoading}>
                <button type="submit" onClick={handleSignUp}>Đăng ký</button>
              </Loading>
            <p className='login__register'>Bạn đã có tài khoản?<p className='register' onClick={handleNavigateSignIn}> đăng nhập </p>tại đây.</p>
          </form>
        </div>
      </div>
    );
  }

export default SignUpPage
