import React, { useRef, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import chinhHang from '../../../Assets/images/chinhHang.png';
import anhMau from '../../../Assets/images/anhMau.webp';
import TimeBackward from './TimeBackward';

const ProductHome = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
      if (sliderRef.current) {
        sliderRef.current.slickGoTo(0);
      }
    }, []); 
  
    const settings = {
      infinite: true,
      speed: 2000, 
      slidesToShow: 5, 
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0, 
      cssEase: 'linear', 
    };
  
    return (
        <div className='product-gallery-one'>
        <div className="product-gallery-one-content">
            <div className="product-gallery-one-content-title">
                <h1> Sản phẩm bán chạy</h1>
                <div className=''>
                    <TimeBackward/>
                </div>
            </div>
            <div className='product-gallery-category'>
                <button className='product-gallery-category_one uhtwO '> Nồi chiên</button>
                <button className='product-gallery-category_one'> Nồi chiên</button>
                <button className='product-gallery-category_one'> Nồi chiên</button>
                <button className='product-gallery-category_one'> Nồi chiên</button>
            </div>
            <div className="home-product">
                <Slider ref={sliderRef} {...settings}>
                    {/* =========== */}
                    <div className="grid__colum-2-4">
                            <div className="home-product-item">
                                <div><img className="home-product-item_img" src={anhMau}/></div>
                                <div> <img className='home-product-item_genuine' src={chinhHang} alt="" /></div>
                                <h4 className="home-product-item_name">Nồi chiên không dầu B.COOK Dung tích lớn 6L - Hàng chính hãng</h4>
                                <div className="home-product-item_price">
                                    <div className='home-product_star'>
                                        <div className='home-product_star-left'>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <div className='home-product_star-right'>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                    </div>
                                    <span className="home-product-item_price-current">Giá: 39.000.000 <span>đ</span></span>
                                </div>
                                <div className="home-product-item_origin">
                                    <span className="home-product-item_brand">Shop'Tran</span>
                                    <span className="home-product-item_origin-name">Hà Nội</span>
                                </div>
                                <div className="home-product-item_favourite">
                                    <i className="fa-solid fa-check"></i><span> Yêu thích</span>
                                </div>
                            </div>
                    </div>
                    {/* =========== */}
                    <div className="grid__colum-2-4">
                            <div className="home-product-item">
                                <div><img className="home-product-item_img" src={anhMau}/></div>
                                <div> <img className='home-product-item_genuine' src={chinhHang} alt="" /></div>
                                <h4 className="home-product-item_name">Nồi chiên không dầu B.COOK Dung tích lớn 6L - Hàng chính hãng</h4>
                                <div className="home-product-item_price">
                                    <div className='home-product_star'>
                                        <div className='home-product_star-left'>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                        </div>
                                        <div className='home-product_star-right'>
                                            <i class="fa-solid fa-star"></i>
                                        </div>
                                    </div>
                                    <span className="home-product-item_price-current">Giá: 39.000.000 <span>đ</span></span>
                                </div>
                                <div className="home-product-item_origin">
                                    <span className="home-product-item_brand">Shop'Tran</span>
                                    <span className="home-product-item_origin-name">Hà Nội</span>
                                </div>
                                <div className="home-product-item_favourite">
                                    <i className="fa-solid fa-check"></i><span> Yêu thích</span>
                                </div>
                            </div>
                    </div>
                    {/* =========== */}
                    <div className="grid__colum-2-4">
                            <div className="home-product-item">
                                <div><img className="home-product-item_img" src={anhMau}/></div>
                                <div> <img className='home-product-item_genuine' src={chinhHang} alt="" /></div>
                                <h4 className="home-product-item_name">Nồi chiên không dầu B.COOK Dung tích lớn 6L - Hàng chính hãng</h4>
                                <div className="home-product-item_price">
                                    <div className='home-product_star'>
                                        <div className='home-product_star-left'>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                        </div>
                                        <div className='home-product_star-right'>
                                            <i class="fa-solid fa-star"></i>
                                        </div>
                                    </div>
                                    <span className="home-product-item_price-current">Giá: 39.000.000 <span>đ</span></span>
                                </div>
                                <div className="home-product-item_origin">
                                    <span className="home-product-item_brand">Shop'Tran</span>
                                    <span className="home-product-item_origin-name">Hà Nội</span>
                                </div>
                                <div className="home-product-item_favourite">
                                    <i className="fa-solid fa-check"></i><span> Yêu thích</span>
                                </div>
                            </div>
                    </div>
                    {/* =========== */}
                    <div className="grid__colum-2-4">
                            <div className="home-product-item">
                                <div><img className="home-product-item_img" src={anhMau}/></div>
                                <div> <img className='home-product-item_genuine' src={chinhHang} alt="" /></div>
                                <h4 className="home-product-item_name">Nồi chiên không dầu B.COOK Dung tích lớn 6L - Hàng chính hãng</h4>
                                <div className="home-product-item_price">
                                    <div className='home-product_star'>
                                        <div className='home-product_star-left'>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                        </div>
                                        <div className='home-product_star-right'>
                                            <i class="fa-solid fa-star"></i>
                                        </div>
                                    </div>
                                    <span className="home-product-item_price-current">Giá: 39.000.000 <span>đ</span></span>
                                </div>
                                <div className="home-product-item_origin">
                                    <span className="home-product-item_brand">Shop'Tran</span>
                                    <span className="home-product-item_origin-name">Hà Nội</span>
                                </div>
                                <div className="home-product-item_favourite">
                                    <i className="fa-solid fa-check"></i><span> Yêu thích</span>
                                </div>
                            </div>
                    </div>
                    {/* =========== */}
                    <div className="grid__colum-2-4">
                            <div className="home-product-item">
                                <div><img className="home-product-item_img" src={anhMau}/></div>
                                <div> <img className='home-product-item_genuine' src={chinhHang} alt="" /></div>
                                <h4 className="home-product-item_name">Nồi chiên không dầu B.COOK Dung tích lớn 6L - Hàng chính hãng</h4>
                                <div className="home-product-item_price">
                                    <div className='home-product_star'>
                                        <div className='home-product_star-left'>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                        </div>
                                        <div className='home-product_star-right'>
                                            <i class="fa-solid fa-star"></i>
                                        </div>
                                    </div>
                                    <span className="home-product-item_price-current">Giá: 39.000.000 <span>đ</span></span>
                                </div>
                                <div className="home-product-item_origin">
                                    <span className="home-product-item_brand">Shop'Tran</span>
                                    <span className="home-product-item_origin-name">Hà Nội</span>
                                </div>
                                <div className="home-product-item_favourite">
                                    <i className="fa-solid fa-check"></i><span> Yêu thích</span>
                                </div>
                            </div>
                    </div>
                    {/* =========== */}
                    <div className="grid__colum-2-4">
                            <div className="home-product-item">
                                <div><img className="home-product-item_img" src={anhMau}/></div>
                                <div> <img className='home-product-item_genuine' src={chinhHang} alt="" /></div>
                                <h4 className="home-product-item_name">Nồi chiên không dầu B.COOK Dung tích lớn 6L - Hàng chính hãng</h4>
                                <div className="home-product-item_price">
                                    <div className='home-product_star'>
                                        <div className='home-product_star-left'>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                        </div>
                                        <div className='home-product_star-right'>
                                            <i class="fa-solid fa-star"></i>
                                        </div>
                                    </div>
                                    <span className="home-product-item_price-current">Giá: 39.000.000 <span>đ</span></span>
                                </div>
                                <div className="home-product-item_origin">
                                    <span className="home-product-item_brand">Shop'Tran</span>
                                    <span className="home-product-item_origin-name">Hà Nội</span>
                                </div>
                                <div className="home-product-item_favourite">
                                    <i className="fa-solid fa-check"></i><span> Yêu thích</span>
                                </div>
                            </div>
                    </div>
                    {/* =========== */}
                    <div className="grid__colum-2-4">
                            <div className="home-product-item">
                                <div><img className="home-product-item_img" src={anhMau}/></div>
                                <div> <img className='home-product-item_genuine' src={chinhHang} alt="" /></div>
                                <h4 className="home-product-item_name">Nồi chiên không dầu B.COOK Dung tích lớn 6L - Hàng chính hãng</h4>
                                <div className="home-product-item_price">
                                    <div className='home-product_star'>
                                        <div className='home-product_star-left'>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                        </div>
                                        <div className='home-product_star-right'>
                                            <i class="fa-solid fa-star"></i>
                                        </div>
                                    </div>
                                    <span className="home-product-item_price-current">Giá: 39.000.000 <span>đ</span></span>
                                </div>
                                <div className="home-product-item_origin">
                                    <span className="home-product-item_brand">Shop'Tran</span>
                                    <span className="home-product-item_origin-name">Hà Nội</span>
                                </div>
                                <div className="home-product-item_favourite">
                                    <i className="fa-solid fa-check"></i><span> Yêu thích</span>
                                </div>
                            </div>
                    </div>
                </Slider>
                </div>
            </div>
        </div>
    );
  };

export default ProductHome
