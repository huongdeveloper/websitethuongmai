import React from 'react'
import chinhHang from '../../../Assets/images/chinhHang.png';
import anhMau from '../../../Assets/images/anhMau.webp';
import TimePresent from '../Home/TimePresent';
const ListProducts = () => {
  return (
    <div className='product-gallery-one'>
        <div className="product-gallery-one-content">
            <div className="product-gallery-one-content-title list-product_pading">
                <div className='product-gallery-one-list'>
                    <button className='product-gallery_list hwertM uhplist '> Phổ Biến </button>
                    <button className='product-gallery_list hwertM'> Bán Chạy </button>
                    <button className='product-gallery_list hwertM'> Hàng Mới </button>
                    <button className='product-gallery_list hwertM'> Giá Thấp Đến Cao</button>
                    <button className='product-gallery_list hwertM'> Giá Cao Đến Thấp</button>
                </div>
                <div className='list-product_time'>
                    <TimePresent/>
                </div>
            </div>
            <div className="home-product list-product_border">
                <div className="grid__row">
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
                </div>
            </div>         
        </div>
    </div>
  )
}

export default ListProducts
