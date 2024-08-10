import React from "react";
import Filter from "../scenes/productList/Filter";

const Categories = () => {
    return (
        <div className="categories-container">
            <div className="carousel">
                <div className="carousel-indicators">
                    <button
                        className="carousel-indicator active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        className="carousel-indicator"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        className="carousel-indicator"
                        aria-label="Slide 3"
                    ></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src="./assets/img/home/1.jpg"
                            alt="Los Angeles"
                            className="carousel-image"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="./assets/img/home/2.jpg"
                            alt="Chicago"
                            className="carousel-image"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="./assets/img/home/3.jpg"
                            alt="New York"
                            className="carousel-image"
                        />
                    </div>
                </div>

                <button className="carousel-control-prev" aria-label="Previous">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" aria-label="Next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>

            <div className="carousel-header">
                <a
                    className="carousel-header-link"
                    href="/mall/Thời-Trang-Nam-cat.11035567"
                >
                    Shopee Mall
                </a>
                <a
                    className="carousel-header-link"
                    href="/mall/brands/11035567"
                >
                    <div className="carousel-header-see-all">
                        Xem tất cả
                        <i className="fas fa-chevron-right"></i>
                    </div>
                </a>
            </div>

            <div className="category-slider">
                <div className="category-slider-item">
                    <a className="category-link" href="/thoi-trang-nam">
                        <div className="category-item">
                            <div
                                className="category-image"
                                style={{
                                    backgroundImage:
                                        'url("https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn")',
                                }}
                            ></div>
                            <div className="category-name">Thời Trang Nam</div>
                        </div>
                    </a>
                </div>
            </div>

            <div className="section-header">
                <div className="section-title">
                    SIÊU SHOP THỊNH HÀNH - BUNG DEAL SIÊU PHẨM
                </div>
                <div className="section-content">
                    <div className="section-item">
                        <a
                            className="section-link"
                            href="/Thời-Trang-Nam-cat.11035567"
                        >
                            <div className="section-item-content">
                                <div
                                    className="section-image"
                                    style={{
                                        backgroundImage:
                                            'url("https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn")',
                                    }}
                                ></div>
                                <div className="section-name">
                                    FREESHIP & HOÀN XU XTRA
                                </div>
                                <div className="section-price">
                                    <span>từ</span>₫19.800
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div className="section-header">
                <div className="section-title">
                    KIỂU CÁCH THỊNH HÀNH - DIỆN BẢNH MẶC SANG
                </div>
                <div className="section-content">
                    <div className="section-item">
                        <a
                            className="section-link"
                            href="/Thời-Trang-Nam-cat.11035567"
                        >
                            <div className="section-item-content">
                                <div
                                    className="section-image"
                                    style={{
                                        backgroundImage:
                                            'url("https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn")',
                                    }}
                                ></div>
                                <div className="section-name">
                                    FREESHIP & HOÀN XU XTRA
                                </div>
                                <div className="section-price">
                                    <span>từ</span>₫19.800
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div className="filter-container">
                <nav className="filter-nav">
                    <h3 className="filter-heading">
                        <i className="filter-icon fas fa-list-ul"></i>
                        Bộ lọc tìm kiếm
                    </h3>
                    <div className="filter-group">
                        <div className="filter-group-title">Theo Danh Mục</div>
                        <ul className="filter-group-list">
                            <li className="filter-item">
                                <input
                                    type="checkbox"
                                    className="filter-checkbox"
                                />
                                Thiết bị mạng
                            </li>
                            <li className="filter-item">
                                <input
                                    type="checkbox"
                                    className="filter-checkbox"
                                />
                                Chuột và bàn phím
                            </li>
                            <li className="filter-item">
                                <input
                                    type="checkbox"
                                    className="filter-checkbox"
                                />
                                USB
                            </li>
                            <li className="filter-item">
                                <input
                                    type="checkbox"
                                    className="filter-checkbox"
                                />
                                Link kiện máy tính
                            </li>
                            <li className="filter-item">
                                <input
                                    type="checkbox"
                                    className="filter-checkbox"
                                />
                                Wifi
                            </li>
                        </ul>
                    </div>
                    <button className="btn btn-primary filter-reset-btn">
                        LÀM MỚI
                    </button>
                </nav>
            </div>

            <div className="product-list">
                <Filter />
                <div className="products">
                    <div className="product-item">
                        <a className="product-link" href="#">
                            <div
                                className="product-image"
                                style={{
                                    backgroundImage:
                                        "url(./assets/img/home/1.PNG)",
                                }}
                            ></div>
                            <div className="product-info">
                                <h4 className="product-name">
                                    Ổ đĩa flash USB2.0 2TB Hp kim loại chống
                                    thấm nước
                                </h4>
                                <div className="product-price">
                                    <p className="product-price-old">
                                        180.000đ
                                    </p>
                                    <p className="product-price-new">
                                        200.000đ
                                    </p>
                                    <i className="product-shipping fas fa-shipping-fast"></i>
                                </div>
                                <div className="product-footer">
                                    <div className="product-save">
                                        <input
                                            type="checkbox"
                                            id="heart-save"
                                        />
                                        <label
                                            htmlFor="heart-save"
                                            className="far fa-heart"
                                        ></label>
                                    </div>
                                    <div className="product-rating">
                                        <i className="star-checked far fa-star"></i>
                                        <i className="star-checked far fa-star"></i>
                                        <i className="star-checked far fa-star"></i>
                                        <i className="star-checked far fa-star"></i>
                                        <i className="star-checked far fa-star"></i>
                                    </div>
                                    <div className="product-sold">
                                        Đã bán 3,8k
                                    </div>
                                </div>
                                <div className="product-origin">Hà Nội</div>
                                <div className="product-favourite">
                                    Yêu thích
                                </div>
                                <div className="product-sale-off">
                                    <div className="sale-off-value">40%</div>
                                    <div className="sale-off-label">GIẢM</div>
                                </div>
                            </div>
                            <div className="product-footer">
                                Tìm sản phẩm tương tự
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;
