import React from "react";
import AppUrl from "../../api/AppURL";

export default function Banner() {
    return (
        <div className="header__contain">
            <label htmlFor="mobile-search" className="header__mobile-search">
                <i className="header__mobile-search-icon fas fa-search" />
            </label>
            <div className="header__logo">
                <a href="/" className="header__logo-link">
                    <img
                        alt=""
                        src={`${AppUrl.ImageFE}/assets/img/logo/logo-full-white.png`}
                        className="header__logo-img"
                    />
                </a>
            </div>
            <input
                type="checkbox"
                id="mobile-search"
                className="header__search-check"
                hidden
            />
            <div className="header__search">
                <div className="header__search-input-wrap">
                    <input
                        type="text"
                        className="header__search-input"
                        placeholder="Tìm kiếm trên Shoppee"
                    />
                    <div className="header__search-history">
                        <ul className="header__search-history-list">
                            <li className="header__search-history-item">
                                <a href="https://example.com">
                                    Combo 30 điểm đại học khối A
                                </a>
                            </li>
                            <li className="header__search-history-item">
                                <a href="https://example.com">
                                    Combo 30 điểm đại học khối D
                                </a>
                            </li>
                            <li className="header__search-history-item">
                                <a href="https://example.com">
                                    Mỹ phẩm cho người yêu
                                </a>
                            </li>
                            <li className="header__search-history-item">
                                <a href="https://example.com">
                                    Bí kíp tán crush auto đổ
                                </a>
                            </li>
                            <li className="header__search-history-item">
                                <a href="https://example.com">
                                    Iphone 13 Pro Max giá rẻ
                                </a>
                            </li>
                            <li className="header__search-history-item">
                                <a href="https://example.com">
                                    Người yêu đẹp trai như LTP
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <button className="btn header__search-btn">
                    <i className="header__search-btn-icon fas fa-search" />
                </button>
            </div>
            {/* header__cart--no-cart */}
            {/* header__cart--has-cart */}
            <div className="header__cart header__cart--has-cart">
                <a href="checkout">
                    <i className="header__cart-icon fas fa-shopping-cart" />
                </a>
                <div className="header__cart-count">4</div>
                <div className="header__cart-list no-cart">
                    <img
                        alt=""
                        src={`${AppUrl.ImageFE}/assets/img/sp/no-cart.png`}
                        className="header__no-cart-img"
                    />
                    <p className="header__no-cart-text">Chưa có sản phẩm</p>
                </div>
                <div className="header__cart-list has-cart">
                    <h4 className="header__cart-heading">Sản phẩm đã chọn</h4>
                    <ul className="header__cart-list-item">
                        <li className="header__cart-item">
                            <img
                                alt=""
                                src={`${AppUrl.ImageFE}/assets/img/buy/1.PNG`}
                                className="header__cart-item-img"
                            />
                            <div className="header__cart-item-info">
                                <div className="header__cart-item-heading">
                                    <h3 className="header__cart-item-name">
                                        Thanh Thanh 2000 1m57 46kg 88-62-89
                                    </h3>
                                    <p className="header__cart-item-price">
                                        2.000.000đ
                                    </p>
                                </div>
                                <div className="header__cart-item-body">
                                    <p className="header__cart-item-number">
                                        x 2
                                    </p>
                                    <div className="header__cart-item-close">
                                        Xoá
                                        <i className="fas fa-times" />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="header__cart-item">
                            <img
                                alt=""
                                src={`${AppUrl.ImageFE}/assets/img/buy/2.PNG`}
                                className="header__cart-item-img"
                            />
                            <div className="header__cart-item-info">
                                <div className="header__cart-item-heading">
                                    <h3 className="header__cart-item-name">
                                        Hồng Ánh 1998 1m62 48kg 89-64-91
                                    </h3>
                                    <p className="header__cart-item-price">
                                        2.500.000đ
                                    </p>
                                </div>
                                <div className="header__cart-item-body">
                                    <p className="header__cart-item-number">
                                        x 1
                                    </p>
                                    <div className="header__cart-item-close">
                                        Xoá
                                        <i className="fas fa-times" />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="header__cart-item">
                            <img
                                alt=""
                                src={`${AppUrl.ImageFE}/assets/img/buy/3.PNG`}
                                className="header__cart-item-img"
                            />
                            <div className="header__cart-item-info">
                                <div className="header__cart-item-heading">
                                    <h3 className="header__cart-item-name">
                                        Quỳnh Như 1999 1m65 49kg 90-62-89
                                    </h3>
                                    <p className="header__cart-item-price">
                                        2.800.000đ
                                    </p>
                                </div>
                                <div className="header__cart-item-body">
                                    <p className="header__cart-item-number">
                                        x 1
                                    </p>
                                    <div className="header__cart-item-close">
                                        Xoá
                                        <i className="fas fa-times" />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="header__cart-item">
                            <img
                                alt=""
                                src={`${AppUrl.ImageFE}/assets/img/buy/4.PNG`}
                                className="header__cart-item-img"
                            />
                            <div className="header__cart-item-info">
                                <div className="header__cart-item-heading">
                                    <h3 className="header__cart-item-name">
                                        Kim Ngân 2001 1m55 45kg 86-60-87
                                    </h3>
                                    <p className="header__cart-item-price">
                                        3.200.000đ
                                    </p>
                                </div>
                                <div className="header__cart-item-body">
                                    <p className="header__cart-item-number">
                                        x 3
                                    </p>
                                    <div className="header__cart-item-close">
                                        Xoá
                                        <i className="fas fa-times" />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="header__cart-item">
                            <img
                                alt=""
                                src={`${AppUrl.ImageFE}/assets/img/buy/5.PNG`}
                                className="header__cart-item-img"
                            />
                            <div className="header__cart-item-info">
                                <div className="header__cart-item-heading">
                                    <h3 className="header__cart-item-name">
                                        Thanh Thanh 2000 1m57 46kg 88-62-89
                                    </h3>
                                    <p className="header__cart-item-price">
                                        2.000.000đ
                                    </p>
                                </div>
                                <div className="header__cart-item-body">
                                    <p className="header__cart-item-number">
                                        x 2
                                    </p>
                                    <div className="header__cart-item-close">
                                        Xoá
                                        <i className="fas fa-times" />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="header__cart-item">
                            <img
                                alt=""
                                src={`${AppUrl.ImageFE}/assets/img/buy/6.PNG`}
                                className="header__cart-item-img"
                            />
                            <div className="header__cart-item-info">
                                <div className="header__cart-item-heading">
                                    <h3 className="header__cart-item-name">
                                        Hồng Ánh 1998 1m62 48kg 89-64-91
                                    </h3>
                                    <p className="header__cart-item-price">
                                        2.500.000đ
                                    </p>
                                </div>
                                <div className="header__cart-item-body">
                                    <p className="header__cart-item-number">
                                        x 1
                                    </p>
                                    <div className="header__cart-item-close">
                                        Xoá
                                        <i className="fas fa-times" />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="header__cart-item">
                            <img
                                alt=""
                                src={`${AppUrl.ImageFE}/assets/img/buy/7.PNG`}
                                className="header__cart-item-img"
                            />
                            <div className="header__cart-item-info">
                                <div className="header__cart-item-heading">
                                    <h3 className="header__cart-item-name">
                                        Quỳnh Như 1999 1m65 49kg 90-62-89
                                    </h3>
                                    <p className="header__cart-item-price">
                                        2.800.000đ
                                    </p>
                                </div>
                                <div className="header__cart-item-body">
                                    <p className="header__cart-item-number">
                                        x 1
                                    </p>
                                    <div className="header__cart-item-close">
                                        Xoá
                                        <i className="fas fa-times" />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="header__cart-item">
                            <img
                                alt=""
                                src={`${AppUrl.ImageFE}/assets/img/buy/8.PNG`}
                                className="header__cart-item-img"
                            />
                            <div className="header__cart-item-info">
                                <div className="header__cart-item-heading">
                                    <h3 className="header__cart-item-name">
                                        Kim Ngân 2001 1m55 45kg 86-60-87
                                    </h3>
                                    <p className="header__cart-item-price">
                                        3.200.000đ
                                    </p>
                                </div>
                                <div className="header__cart-item-body">
                                    <p className="header__cart-item-number">
                                        x 3
                                    </p>
                                    <div className="header__cart-item-close">
                                        Xoá
                                        <i className="fas fa-times" />
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="header__cart-footer">
                        <a
                            href="checkout"
                            className="btn btn--primary header__cart-see-cart"
                        >
                            Xem giỏ hàng
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
