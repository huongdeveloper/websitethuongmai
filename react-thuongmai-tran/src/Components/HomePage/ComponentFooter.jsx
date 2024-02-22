import React from 'react'
import facebook from '../../Assets/images/facebook.png';
import zalo from '../../Assets/images/zalo.jpg';
import instagram from '../../Assets/images/instagram.jpg';
import visa from '../../Assets/images/visa.png';
import oo from '../../Assets/images/oo.png';
import atm from '../../Assets/images/atm.png';
import tragop from '../../Assets/images/tragop.png';

const ComponentFooter = () => {
  return (
    <div className='footer-patient'>
      <div className='grid'>
        <div className='footer-patient_Wrapper'>
          <div className='footer-patient_FooterHeading'>
            <h4>Hỗ trợ khách hàng</h4>
            <div className='footer-patient-separator'>
              <a href="#" className='small-text'>Hotline: 0962758296</a>
              <a href="#" className='small-text'>Các câu hỏi thường gặp</a>
              <a href="#" className='small-text'>Gửi yêu cầu hỗ trợ</a>
              <a href="#" className='small-text'>Hướng dẫn đặt hàng</a>
              <a href="#" className='small-text'>Phương thức vận chuyển</a>
              <a href="#" className='small-text'>Chính sách đổi trả</a>
            </div>
          </div>
          <div className='footer-patient_FooterHeading'>
            <h4>Hợp tác và liên kết</h4>
            <div className='footer-patient-separator'>
              <a href="#" className='small-text'>Bán hàng cùng Shop Giang Tùng</a>
            </div>
          </div>
          <div className='footer-patient_FooterHeading'>
            <h4>Về Shop'Tran</h4>
            <div className='footer-patient-separator'>
              <a href="#" className='small-text'>Chính sách bảo mật thanh toán</a>
              <a href="#" className='small-text'>Chính sách bảo mật thông tin cá nhân</a>
              <a href="#" className='small-text'>Chính sách giải quyết khiếu nại</a>
              <a href="#" className='small-text'>Gói hội viên VIP</a>
              <a href="#" className='small-text'>Điều khoản sử dụng</a>
              <a href="#" className='small-text'>Bán hàng doanh nghiệp</a>
            </div>
          </div>
          <div className='footer-patient_FooterHeading'>
            <h4>Phương thức thanh toán</h4>
            <div className='footer-patient-separator'>
                <a href=""><img src={visa} alt="" className='footer-VNPay'/></a>
                <a href=""><img src={oo} alt="" className='footer-Visa'/></a>
                <a href=""><img src={atm} alt="" className='footer-momo'/></a>
                <a href=""><img src={tragop} alt="" className='footer-tragop'/></a>
          </div>
          </div>
          <div className='footer-patient_FooterHeading'>
          <h4>Kết nối với chúng tôi</h4>
          <div className='footer-patient-separator'>
              <a href=""><img src={facebook} alt="" className='footer-facebook'/></a>
              <a href=""><img src={zalo} alt="" className='footer-zalo'/></a>
              <a href=""><img src={instagram} alt="" className='footer-instagram'/></a>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComponentFooter
