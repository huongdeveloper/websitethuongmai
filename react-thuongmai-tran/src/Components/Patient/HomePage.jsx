import React from 'react'
import './HomeCss.css'
import MenuCartegory from '../Aoth/Home/MenuCartegory'
import SliderHome from '../Aoth/Home/SliderHome'
import ProductHome from '../Aoth/Home/ProductHome'
import ProductsHomes from '../Aoth/Home/ProductsHomes'
import Suggestion from '../Aoth/Home/Suggestion'
import ComponentFooter from '../HomePage/ComponentFooter'

const HomePage = () => {
  return (
    <div className='HomePage-body'>
      <div className='grid'>
      <div className='background_app-web'>
        <div className='homeBody-left jZosWU khflo'>
          <MenuCartegory/>
        </div>
        <div className='homeBody-right'>
          <div className='homeBody-slider'>
            <SliderHome/>
          </div>
          <div className='homeBody-product_two'>
            <ProductHome/>
          </div>
          <div className='homeBody-product_two'>
            <Suggestion/>
          </div>
          <div className='homeBody-product_two'>
            <ProductsHomes/>
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

export default HomePage
