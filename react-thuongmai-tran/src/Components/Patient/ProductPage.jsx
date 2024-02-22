import React from 'react'
import './HomeCss.css'
import MenuCartegory from '../Aoth/Home/MenuCartegory'
import ComponentFooter from '../HomePage/ComponentFooter'
import SliderProduct from '../Aoth/Product/SliderProduct'
import ListProducts from '../Aoth/Product/ListProducts'

const ProductPage = () => {
  return (
    <div className='HomePage-body'>
      <div className='grid'>
        <div className='Container-sc'>
            <p><a className='Container-sc-home' href="/">Trang chủ</a></p><i className="fa-solid fa-chevron-right"></i>
            <p className='Container-sc-category'>Đồ Chơi - Mẹ & Bé</p>
        </div>
      <div className='background_app-web'>
        <div className='homeBody-left jZosWU khflo'>
          <MenuCartegory/>
        </div>
        <div className='homeBody-right'>
          <div className='homeBody-slider'>
            <SliderProduct/>
          </div>
          <div className='homeBody-product_two'>
            <ListProducts/>
          </div>
        </div>
        </div>
      </div>
      <div className=''>
        <ComponentFooter/>
      </div>
    </div>
  )
}

export default ProductPage
