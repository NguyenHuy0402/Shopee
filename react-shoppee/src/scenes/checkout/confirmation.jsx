import React from "react";
export default function confirmation() {
    return (
        <div className="app">
            <header className="header-pp">
                <div className="grid wide">
                    {/* navbar */}
                    <nav className="header__navbar hide-on-mobile-tablet">
                        <ul className="header__nav-list">
                            <li className="header__nav-item header__nav-item--hover header__nav-item--separate">
                                Kênh Người Bán
                            </li>
                            <li className="header__nav-item header__nav-item--hover header__nav-item--separate">
                                Trở thành Người bán Shopee
                            </li>
                            <li className="header__nav-item header__nav-item--hover header__nav-item--separate header__show-qr">
                                Tải ứng dụng
                            </li>
                            {/* qr code */}
                            <div className="header__qrcode">
                                <img
                                    src="../assets/img/qr/qr-code.png"
                                    className="header__qr"
                                    alt=""
                                />
                                <div className="header__apps">
                                    <a href="a" className="header__app-link">
                                        <img
                                            src="../assets/img/qr/app-store.png"
                                            className="header__app-img"
                                            alt=""
                                        />
                                    </a>
                                    <a href="a" className="header__app-link">
                                        <img
                                            src="../assets/img/qr/gg-play.png"
                                            className="header__app-img"
                                            alt=""
                                        />
                                    </a>
                                    <a href="a" className="header__app-link">
                                        <img
                                            src="../assets/img/qr/app-gallery.png"
                                            className="header__app-img"
                                            alt=""
                                        />
                                    </a>
                                </div>
                            </div>
                            <li className="header__nav-item">
                                Kết nối
                                <a href="a" className="header__nav-icon-link">
                                    <i className="header__nav-icon fab fa-facebook" />
                                </a>
                                <a href="a" className="header__nav-icon-link">
                                    <i className="header__nav-icon fab fa-instagram" />
                                </a>
                            </li>
                        </ul>
                        <ul className="header__nav-list">
                            <li className="header__nav-item header__show-note">
                                <a href="a" className="header__nav-item-link">
                                    <i className="header__nav-icon far fa-bell" />
                                    Thông báo
                                </a>
                                {/* thông báo */}
                                <div className="header__notifi">
                                    <header className="header__notifi-header">
                                        <h3>Thông Báo Mới Nhận</h3>
                                    </header>
                                    <ul className="header__notifi-list">
                                        <li className="header__notifi-item">
                                            <a
                                                href="a"
                                                className="header__notifi-link"
                                            >
                                                <img
                                                    src="../assets/img/sp/casio.png"
                                                    className="header__notifi-img"
                                                />
                                                <div className="header__notifi-info">
                                                    <div className="header__notifi-name">
                                                        Casio fx 580 VN Plus
                                                    </div>
                                                    <div className="header__notifi-desc">
                                                        Mua Casio 580 của LTP
                                                        bao xịn, bao mượt, bao
                                                        đẹp
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="header__notifi-item">
                                            <a
                                                href="a"
                                                className="header__notifi-link"
                                            >
                                                <img
                                                    src="../assets/img/sp/iphone.png"
                                                    className="header__notifi-img"
                                                />
                                                <div className="header__notifi-info">
                                                    <div className="header__notifi-name">
                                                        Điện Thoại iPhone 13 Pro
                                                        128GB - Hàng Nhập Khẩu
                                                    </div>
                                                    <div className="header__notifi-desc">
                                                        3 Camera: Ống kính góc
                                                        rộng f/1.5 - Tele f/2.8
                                                        - Siêu rộng f/1.8
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="header__notifi-item">
                                            <a
                                                href="a"
                                                className="header__notifi-link"
                                            >
                                                <img
                                                    src="../assets/img/sp/iphone2.png"
                                                    className="header__notifi-img"
                                                />
                                                <div className="header__notifi-info">
                                                    <div className="header__notifi-name">
                                                        Apple iPhone 12 Pro Max
                                                        128GB
                                                    </div>
                                                    <div className="header__notifi-desc">
                                                        iPhone 12 Pro Max. Màn
                                                        hình Super Retina XDR
                                                        6.7 inch
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="header__notifi-item">
                                            <a
                                                href="a"
                                                className="header__notifi-link"
                                            >
                                                <img
                                                    src="../assets/img/sp/laptop.png"
                                                    className="header__notifi-img"
                                                />
                                                <div className="header__notifi-info">
                                                    <div className="header__notifi-name">
                                                        Laptop HP 650 g1 siêu
                                                        khỏe bền
                                                    </div>
                                                    <div className="header__notifi-desc">
                                                        Laptop siêu bền, HP 650
                                                        g1 siêu khỏe bền ssd
                                                        120gb 15,6inh FULL HD
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="header__notifi-item">
                                            <a
                                                href="a"
                                                className="header__notifi-link"
                                            >
                                                <img
                                                    src="../assets/img/sp/laptop2.png"
                                                    className="header__notifi-img"
                                                />
                                                <div className="header__notifi-info">
                                                    <div className="header__notifi-name">
                                                        Laptop thinkpad x240
                                                        chất mỏng nhẹ i5 4300u
                                                        Ram 4gb Ssd 128gb
                                                    </div>
                                                    <div className="header__notifi-desc">
                                                        HP 650 g1 chip M đời 4,
                                                        cpu i5 4200M ram 4gb
                                                        -8gb
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                    <footer className="header__notifi-footer">
                                        <a
                                            href="a"
                                            className="header__notifi-footer-btn"
                                        >
                                            Xem tất cả
                                        </a>
                                    </footer>
                                </div>
                            </li>
                            <li className="header__nav-item">
                                <a href="a" className="header__nav-item-link">
                                    <i className="header__nav-icon far fa-question-circle" />
                                    Hỗ trợ
                                </a>
                            </li>
                            <li className="header__nav-item header__nav-item--bold header__nav-item--separate">
                                <a href="a" className="header__nav-item-link">
                                    Đăng ký
                                </a>
                            </li>
                            <li className="header__nav-item header__nav-item--bold">
                                <a href="a" className="header__nav-item-link">
                                    Đăng nhập
                                </a>
                            </li>
                            {/* <li class="header__nav-item header__nav-user">
                      <img src="img/user.png" class="header__nav-user-avt">
                      <a href="a" class="header__nav-item-link header__nav-item--bold">Lục Thiên Phong</a>
                      <ul class="header__nav-user-menu">
                          <li class="header__nav-user-item">
                              <a href="a">Tài khoản của tôi</a>
                          </li>
                          <li class="header__nav-user-item">
                              <a href="a">Đơn mua</a>
                          </li>
                          <li class="header__nav-user-item">
                              <a href="a">Đăng xuất</a>
                          </li>
                      </ul>
                  </li> */}
                        </ul>
                    </nav>
                </div>
                <ul className="header__sort-bar">
                    <li className="header__sort-item">
                        <a href="a" className="header__sort-link">
                            Liên quan
                        </a>
                    </li>
                    <li className="header__sort-item header__sort-item--active">
                        <a href="a" className="header__sort-link">
                            Mới nhất
                        </a>
                    </li>
                    <li className="header__sort-item">
                        <a href="a" className="header__sort-link">
                            Bán chạy
                        </a>
                    </li>
                    <li className="header__sort-item">
                        <a href="a" className="header__sort-link">
                            Giá
                        </a>
                    </li>
                </ul>
            </header>
            <div className="shopee">
                <div>
                    <section className="cart-page-header-wrapper container-wrapper">
                        <div className="container-p">
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <div className="cart-page-header">
                                    <a className="cart-page-logo" href="/">
                                        <img
                                            src="../assets/img/logo/shopee-logo1.png"
                                            className="header__logo-img"
                                        />
                                        <div className="cart-page-logo__page-name">
                                            Thanh Toán
                                        </div>
                                    </a>
                                </div>
                                <div className="cart-page-searchbar">
                                    <form
                                        role="search"
                                        autoComplete="off"
                                        className="shopee-searchbar"
                                    >
                                        <div className="shopee-searchbar__main">
                                            <div className="shopee-searchbar-input">
                                                <input
                                                    aria-label="ĐIỆN TỬ LIVESTREAM GIẢM 25%"
                                                    className="shopee-searchbar-input__input"
                                                    maxLength={128}
                                                    placeholder="ĐIỆN TỬ LIVESTREAM GIẢM 25%"
                                                    autoComplete="off"
                                                    aria-autocomplete="list"
                                                    aria-controls="shopee-searchbar-listbox"
                                                    aria-expanded="false"
                                                    role="combobox"
                                                    defaultValue
                                                />
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            className="btn btn-solid-primary btn--s btn--inline shopee-searchbar__search-button"
                                        >
                                            <svg
                                                height={14}
                                                viewBox="0 0 19 19"
                                                width={14}
                                                className="shopee-svg-icon"
                                            >
                                                <g
                                                    fillRule="evenodd"
                                                    stroke="none"
                                                    strokeWidth={1}
                                                >
                                                    <g transform="translate(-1016 -32)">
                                                        <g>
                                                            <g transform="translate(405 21)">
                                                                <g transform="translate(611 11)">
                                                                    <path d="m8 16c4.418278 0 8-3.581722 8-8s-3.581722-8-8-8-8 3.581722-8 8 3.581722 8 8 8zm0-2c-3.3137085 0-6-2.6862915-6-6s2.6862915-6 6-6 6 2.6862915 6 6-2.6862915 6-6 6z" />
                                                                    <path d="m12.2972351 13.7114222 4.9799555 4.919354c.3929077.3881263 1.0260608.3842503 1.4141871-.0086574.3881263-.3929076.3842503-1.0260607-.0086574-1.414187l-4.9799554-4.919354c-.3929077-.3881263-1.0260608-.3842503-1.4141871.0086573-.3881263.3929077-.3842503 1.0260608.0086573 1.4141871z" />
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className="main-container">
                <div className="pay-container container-p">
                    <div className="xBNaac" />
                    <div className="address-container">
                        <div className="address-content">
                            <div className="address-header">
                                <div className="icon-container">
                                    <svg
                                        height={16}
                                        viewBox="0 0 12 16"
                                        width={12}
                                        className="shopee-svg-icon icon-location-marker"
                                    >
                                        <path
                                            d="M6 3.2c1.506 0 2.727 1.195 2.727 2.667 0 1.473-1.22 2.666-2.727 2.666S3.273 7.34 3.273 5.867C3.273 4.395 4.493 3.2 6 3.2zM0 6c0-3.315 2.686-6 6-6s6 2.685 6 6c0 2.498-1.964 5.742-6 9.933C1.613 11.743 0 8.498 0 6z"
                                            fillRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <h2 className="pay-address">
                                    Địa chỉ nhận hàng
                                </h2>
                            </div>
                        </div>
                        <div className="address-details">
                            <div>
                                <div className="details-container">
                                    <div className="recipient-name">
                                        Nguyễn trường giang (+84) 396113106
                                    </div>
                                    <div className="address-details-pay">
                                        29/1a, Đường Số 147, Phường Phước Long
                                        B, Thành Phố Thủ Đức, TP. Hồ Chí Minh
                                    </div>
                                    <div className="default-tag-pay">
                                        Mặc định
                                    </div>
                                </div>
                            </div>
                            <button className="change-address-button">
                                Thay đổi
                            </button>
                        </div>
                    </div>
                    <div className="product-container-pay">
                        <div className="product-header-pay">
                            <div className="header-item product-title-pay">
                                <h2 className="title-text-pay">Sản phẩm</h2>
                            </div>
                            <div className="header-item product-info-pay" />
                            <div className="header-item product-price-pay">
                                Đơn giá
                            </div>
                            <div className="header-item product-quantity-pay">
                                Số lượng
                            </div>
                            <div className="header-item product-total-pay">
                                Thành tiền
                            </div>
                        </div>
                        <div className="seller-container">
                            <div className="badge-container">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={62}
                                    height={16}
                                    fill="none"
                                >
                                    <title>Preferred Seller</title>
                                    <path
                                        fill="#EE4D2D"
                                        fillRule="evenodd"
                                        d="M0 2C0 .9.9 0 2 0h58a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2z"
                                        clipRule="evenodd"
                                    />
                                    <g clipPath="url(#clip0)">
                                        <path
                                            fill="#fff"
                                            d="M8.7 13H7V8.7L5.6 6.3A828.9 828.9 0 004 4h2l2 3.3a1197.3 1197.3 0 002-3.3h1.6L8.7 8.7V13zm7.9-1.7h1.7c0 .3-.2.6-.5 1-.2.3-.5.5-1 .7l-.6.2h-.8c-.5 0-1 0-1.5-.2l-1-.8a4 4 0 01-.9-2.4c0-1 .3-1.9 1-2.6a3 3 0 012.4-1l.8.1a2.8 2.8 0 011.3.7l.4.6.3.8V10h-4.6l.2 1 .4.7.6.5.7.1c.4 0 .7 0 .9-.2l.2-.6v-.1zm0-2.3l-.1-1-.3-.3c0-.2-.1-.2-.2-.3l-.8-.2c-.3 0-.6.2-.9.5l-.3.5a4 4 0 00-.3.8h3zm-1.4-4.2l-.7.7h-1.4l1.5-2h1.1l1.5 2h-1.4l-.6-.7zm8.1 1.6H25V13h-1.7v-.5.1H23l-.7.5-.9.1-1-.1-.7-.4c-.3-.2-.4-.5-.6-.8l-.2-1.3V6.4h1.7v3.7c0 1 0 1.6.3 1.7.2.2.5.3.7.3h.4l.4-.2.3-.3.3-.5.2-1.4V6.4zM34.7 13a11.2 11.2 0 01-1.5.2 3.4 3.4 0 01-1.3-.2 2 2 0 01-.5-.3l-.3-.5-.2-.6V7.4h-1.2v-1h1.1V5h1.7v1.5h1.9v1h-2v3l.2 1.2.1.3.2.2h.3l.2.1c.2 0 .6 0 1.3-.3v1zm2.4 0h-1.7V3.5h1.7v3.4a3.7 3.7 0 01.2-.1 2.8 2.8 0 013.4 0l.4.4.2.7V13h-1.6V9.3 8.1l-.4-.6-.6-.2a1 1 0 00-.4.1 2 2 0 00-.4.2l-.3.3a3 3 0 00-.3.5l-.1.5-.1.9V13zm5.4-6.6H44V13h-1.6V6.4zm-.8-.9l1.8-2h1.8l-2.1 2h-1.5zm7.7 5.8H51v.5l-.4.5a2 2 0 01-.4.4l-.6.3-1.4.2c-.5 0-1 0-1.4-.2l-1-.7c-.3-.3-.5-.7-.6-1.2-.2-.4-.3-.9-.3-1.4 0-.5.1-1 .3-1.4a2.6 2.6 0 011.6-1.8c.4-.2.9-.3 1.4-.3.6 0 1 .1 1.5.3.4.1.7.4 1 .6l.2.5.1.5h-1.6c0-.3-.1-.5-.3-.6-.2-.2-.4-.3-.8-.3s-.8.2-1.2.6c-.3.4-.4 1-.4 2 0 .9.1 1.5.4 1.8.4.4.8.6 1.2.6h.5l.3-.2.2-.3v-.4zm4 1.7h-1.6V3.5h1.7v3.4a3.7 3.7 0 01.2-.1 2.8 2.8 0 013.4 0l.3.4.3.7V13h-1.6V9.3L56 8.1c-.1-.3-.2-.5-.4-.6l-.6-.2a1 1 0 00-.3.1 2 2 0 00-.4.2l-.3.3a3 3 0 00-.3.5l-.2.5V13z"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <path
                                                fill="#fff"
                                                d="M0 0h55v16H0z"
                                                transform="translate(4)"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <h3 className="store-name-pay">
                                Kho Công Nghệ Online
                            </h3>
                            <button className="chat-button button-style-pay">
                                <svg
                                    viewBox="0 0 16 16"
                                    className="shopee-svg-icon chat-icon-pay"
                                >
                                    <g fillRule="evenodd">
                                        <path d="M15 4a1 1 0 01.993.883L16 5v9.932a.5.5 0 01-.82.385l-2.061-1.718-8.199.001a1 1 0 01-.98-.8l-.016-.117-.108-1.284 8.058.001a2 2 0 001.976-1.692l.018-.155L14.293 4H15zm-2.48-4a1 1 0 011 1l-.003.077-.646 8.4a1 1 0 01-.997.923l-8.994-.001-2.06 1.718a.5.5 0 01-.233.108l-.087.007a.5.5 0 01-.492-.41L0 11.732V1a1 1 0 011-1h11.52zM3.646 4.246a.5.5 0 000 .708c.305.304.694.526 1.146.682A4.936 4.936 0 006.4 5.9c.464 0 1.02-.062 1.608-.264.452-.156.841-.378 1.146-.682a.5.5 0 10-.708-.708c-.185.186-.445.335-.764.444a4.004 4.004 0 01-2.564 0c-.319-.11-.579-.258-.764-.444a.5.5 0 00-.708 0z" />
                                    </g>
                                </svg>
                                Chat ngay
                            </button>
                        </div>
                        <div className="product-header-pay">
                            <div className="header-item product-title-pay">
                                <div className="product-info-pay">
                                    <img
                                        className="product-image"
                                        alt="product image"
                                        src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ltszfkrsiej12e_tn"
                                        width={60}
                                        height={40}
                                    />
                                    <span className="product-details">
                                        <span className="product-name-pay">
                                            Monka 3075 V2 Pro - Bàn phím cơ
                                            Monka 307...
                                        </span>
                                        <div className="product-extra-info">
                                            <span className="return-policy">
                                                Đổi ý miễn phí 15 ngày
                                            </span>
                                        </div>
                                    </span>
                                </div>
                            </div>
                            <div className="header-item product-info-pay">
                                <span className="product-type-details">
                                    Loại: Đen Keycap Ninja, KTT Hyacinth
                                </span>
                            </div>
                            <div className="header-item product-price-pay">
                                ₫1.810.000
                            </div>
                            <div className="header-item product-quantity-pay">
                                1
                            </div>
                            <div className="header-item product-total-pay">
                                ₫1.810.000
                            </div>
                        </div>
                        <div className="product-header-pay">
                            <div className="header-item product-title-pay">
                                <div className="product-info-pay">
                                    <img
                                        className="product-image"
                                        alt="product image"
                                        src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lw1ajhd0duxnea_tn"
                                        width={60}
                                        height={40}
                                    />
                                    <span className="product-details">
                                        <span className="product-name-pay">
                                            <span className="gift-label">
                                                Quà Tặng
                                            </span>{" "}
                                            Combo Switch dành cho bàn phím cơ
                                        </span>
                                        <div className="product-extra-info">
                                            <span className="return-policy">
                                                Đổi ý miễn phí 15 ngày
                                            </span>
                                        </div>
                                    </span>
                                </div>
                            </div>
                            <div className="header-item product-info-pay">
                                <span className="product-type-details">
                                    Loại: Đen Keycap Ninja, KTT Hyacinth
                                </span>
                            </div>
                            <div className="header-item product-price-pay" />
                            <div className="header-item product-quantity-pay">
                                1
                            </div>
                            <div className="header-item product-total-pay" />
                        </div>
                        <div className="product-voucher-pay">
                            Icon
                            <div className="voucher-shop-pay">
                                Voucher của Shop
                            </div>
                            <div className="voucher-choose-acctions">
                                <button className="voucher-button-pay-choose">
                                    <span>Chọn Voucher</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="message-container">
                        <div className="message-section">
                            <div className="message-column">
                                <div className="message-input-wrapper">
                                    <div className="message-label">
                                        <span className="message-text-pay">
                                            Lời nhắn:
                                        </span>
                                        <div className="message-input">
                                            <div className="input-container">
                                                <div className="input-wrapper">
                                                    <input
                                                        className="input-field"
                                                        type="text"
                                                        placeholder="Lưu ý cho Người bán..."
                                                        aria-label="Lời nhắn:"
                                                        defaultValue
                                                    />
                                                </div>
                                                <div />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="shipping-column">
                                <div className="shipping-info">
                                    <div className="shipping-pay">
                                        <div className="shipping-label">
                                            Đơn vị vận chuyển:
                                        </div>
                                        <div className="shipping-provider">
                                            <div>Nhanh</div>
                                        </div>
                                        <button className="change-button">
                                            Thay đổi
                                        </button>
                                        <div className="price">
                                            <span className="price-shipping-pay">
                                                ₫51.500
                                            </span>
                                        </div>
                                    </div>
                                    <div className="delivery-info">
                                        <img
                                            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/checkout/41fe56ab756fc3082a08.svg"
                                            alt="Shipping Icon"
                                        />
                                        Đảm bảo nhận hàng từ 5 Tháng 8 - 7 Tháng
                                        8
                                        <div className="voucher-info">
                                            <div>
                                                Nhận Voucher trị giá ₫15.000 nếu
                                                đơn hàng được giao đến bạn sau
                                                ngày 7 Tháng 8 2024.
                                            </div>
                                            <div className="info-icon">
                                                <svg
                                                    enableBackground="new 0 0 15 15"
                                                    viewBox="0 0 15 15"
                                                    x={0}
                                                    y={0}
                                                    className="icon-help"
                                                >
                                                    <g>
                                                        <circle
                                                            cx="7.5"
                                                            cy="7.5"
                                                            fill="none"
                                                            r="6.5"
                                                            strokeMiterlimit={
                                                                10
                                                            }
                                                        />
                                                        <path
                                                            d="m5.3 5.3c.1-.3.3-.6.5-.8s.4-.4.7-.5.6-.2 1-.2c.3 0 .6 0 .9.1s.5.2.7.4.4.4.5.7.2.6.2.9c0 .2 0 .4-.1.6s-.1.3-.2.5c-.1.1-.2.2-.3.3-.1.2-.2.3-.4.4-.1.1-.2.2-.3.3s-.2.2-.3.4c-.1.1-.1.2-.2.4s-.1.3-.1.5v.4h-.9v-.5c0-.3.1-.6.2-.8s.2-.4.3-.5c.2-.2.3-.3.5-.5.1-.1.3-.3.4-.4.1-.2.2-.3.3-.5s.1-.4.1-.7c0-.4-.2-.7-.4-.9s-.5-.3-.9-.3c-.3 0-.5 0-.7.1-.1.1-.3.2-.4.4-.1.1-.2.3-.3.5 0 .2-.1.5-.1.7h-.9c0-.3.1-.7.2-1zm2.8 5.1v1.2h-1.2v-1.2z"
                                                            stroke="none"
                                                        />
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="additional-info" />
                                    <div className="inspection-info">
                                        <div className="inspection-text">
                                            Được đồng kiểm.{" "}
                                        </div>
                                        <div className="inspection-icon">
                                            icon
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-container">
                <div className="pay-container container-p">
                    <div className="product-container-pay">
                        <div className="seller-container">
                            <div className="badge-container">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={62}
                                    height={16}
                                    fill="none"
                                >
                                    <title>Preferred Seller</title>
                                    <path
                                        fill="#EE4D2D"
                                        fillRule="evenodd"
                                        d="M0 2C0 .9.9 0 2 0h58a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2z"
                                        clipRule="evenodd"
                                    />
                                    <g clipPath="url(#clip0)">
                                        <path
                                            fill="#fff"
                                            d="M8.7 13H7V8.7L5.6 6.3A828.9 828.9 0 004 4h2l2 3.3a1197.3 1197.3 0 002-3.3h1.6L8.7 8.7V13zm7.9-1.7h1.7c0 .3-.2.6-.5 1-.2.3-.5.5-1 .7l-.6.2h-.8c-.5 0-1 0-1.5-.2l-1-.8a4 4 0 01-.9-2.4c0-1 .3-1.9 1-2.6a3 3 0 012.4-1l.8.1a2.8 2.8 0 011.3.7l.4.6.3.8V10h-4.6l.2 1 .4.7.6.5.7.1c.4 0 .7 0 .9-.2l.2-.6v-.1zm0-2.3l-.1-1-.3-.3c0-.2-.1-.2-.2-.3l-.8-.2c-.3 0-.6.2-.9.5l-.3.5a4 4 0 00-.3.8h3zm-1.4-4.2l-.7.7h-1.4l1.5-2h1.1l1.5 2h-1.4l-.6-.7zm8.1 1.6H25V13h-1.7v-.5.1H23l-.7.5-.9.1-1-.1-.7-.4c-.3-.2-.4-.5-.6-.8l-.2-1.3V6.4h1.7v3.7c0 1 0 1.6.3 1.7.2.2.5.3.7.3h.4l.4-.2.3-.3.3-.5.2-1.4V6.4zM34.7 13a11.2 11.2 0 01-1.5.2 3.4 3.4 0 01-1.3-.2 2 2 0 01-.5-.3l-.3-.5-.2-.6V7.4h-1.2v-1h1.1V5h1.7v1.5h1.9v1h-2v3l.2 1.2.1.3.2.2h.3l.2.1c.2 0 .6 0 1.3-.3v1zm2.4 0h-1.7V3.5h1.7v3.4a3.7 3.7 0 01.2-.1 2.8 2.8 0 013.4 0l.4.4.2.7V13h-1.6V9.3 8.1l-.4-.6-.6-.2a1 1 0 00-.4.1 2 2 0 00-.4.2l-.3.3a3 3 0 00-.3.5l-.1.5-.1.9V13zm5.4-6.6H44V13h-1.6V6.4zm-.8-.9l1.8-2h1.8l-2.1 2h-1.5zm7.7 5.8H51v.5l-.4.5a2 2 0 01-.4.4l-.6.3-1.4.2c-.5 0-1 0-1.4-.2l-1-.7c-.3-.3-.5-.7-.6-1.2-.2-.4-.3-.9-.3-1.4 0-.5.1-1 .3-1.4a2.6 2.6 0 011.6-1.8c.4-.2.9-.3 1.4-.3.6 0 1 .1 1.5.3.4.1.7.4 1 .6l.2.5.1.5h-1.6c0-.3-.1-.5-.3-.6-.2-.2-.4-.3-.8-.3s-.8.2-1.2.6c-.3.4-.4 1-.4 2 0 .9.1 1.5.4 1.8.4.4.8.6 1.2.6h.5l.3-.2.2-.3v-.4zm4 1.7h-1.6V3.5h1.7v3.4a3.7 3.7 0 01.2-.1 2.8 2.8 0 013.4 0l.3.4.3.7V13h-1.6V9.3L56 8.1c-.1-.3-.2-.5-.4-.6l-.6-.2a1 1 0 00-.3.1 2 2 0 00-.4.2l-.3.3a3 3 0 00-.3.5l-.2.5V13z"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <path
                                                fill="#fff"
                                                d="M0 0h55v16H0z"
                                                transform="translate(4)"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <h3 className="store-name-pay">
                                Kho Công Nghệ Online
                            </h3>
                            <button className="chat-button button-style-pay">
                                <svg
                                    viewBox="0 0 16 16"
                                    className="shopee-svg-icon chat-icon-pay"
                                >
                                    <g fillRule="evenodd">
                                        <path d="M15 4a1 1 0 01.993.883L16 5v9.932a.5.5 0 01-.82.385l-2.061-1.718-8.199.001a1 1 0 01-.98-.8l-.016-.117-.108-1.284 8.058.001a2 2 0 001.976-1.692l.018-.155L14.293 4H15zm-2.48-4a1 1 0 011 1l-.003.077-.646 8.4a1 1 0 01-.997.923l-8.994-.001-2.06 1.718a.5.5 0 01-.233.108l-.087.007a.5.5 0 01-.492-.41L0 11.732V1a1 1 0 011-1h11.52zM3.646 4.246a.5.5 0 000 .708c.305.304.694.526 1.146.682A4.936 4.936 0 006.4 5.9c.464 0 1.02-.062 1.608-.264.452-.156.841-.378 1.146-.682a.5.5 0 10-.708-.708c-.185.186-.445.335-.764.444a4.004 4.004 0 01-2.564 0c-.319-.11-.579-.258-.764-.444a.5.5 0 00-.708 0z" />
                                    </g>
                                </svg>
                                Chat ngay
                            </button>
                        </div>
                        <div className="product-header-pay">
                            <div className="header-item product-title-pay">
                                <div className="product-info-pay">
                                    <img
                                        className="product-image"
                                        alt="product image"
                                        src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ltszfkrsiej12e_tn"
                                        width={60}
                                        height={40}
                                    />
                                    <span className="product-details">
                                        <span className="product-name-pay">
                                            Monka 3075 V2 Pro - Bàn phím cơ
                                            Monka 307...
                                        </span>
                                        <div className="product-extra-info">
                                            <span className="return-policy">
                                                Đổi ý miễn phí 15 ngày
                                            </span>
                                        </div>
                                    </span>
                                </div>
                            </div>
                            <div className="header-item product-info-pay">
                                <span className="product-type-details">
                                    Loại: Đen Keycap Ninja, KTT Hyacinth
                                </span>
                            </div>
                            <div className="header-item product-price-pay">
                                ₫1.810.000
                            </div>
                            <div className="header-item product-quantity-pay">
                                1
                            </div>
                            <div className="header-item product-total-pay">
                                ₫1.810.000
                            </div>
                        </div>
                        <div className="product-header-pay">
                            <div className="header-item product-title-pay">
                                <div className="product-info-pay">
                                    <img
                                        className="product-image"
                                        alt="product-image"
                                        src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lw1ajhd0duxnea_tn"
                                        width={60}
                                        height={40}
                                    />
                                    <span className="product-details">
                                        <span className="product-name-pay">
                                            <span className="gift-label">
                                                Quà Tặng
                                            </span>{" "}
                                            Combo Switch dành cho bàn phím cơ
                                        </span>
                                        <div className="product-extra-info">
                                            <span className="return-policy">
                                                Đổi ý miễn phí 15 ngày
                                            </span>
                                        </div>
                                    </span>
                                </div>
                            </div>
                            <div className="header-item product-info-pay">
                                <span className="product-type-details">
                                    Loại: Đen Keycap Ninja, KTT Hyacinth
                                </span>
                            </div>
                            <div className="header-item product-price-pay" />
                            <div className="header-item product-quantity-pay">
                                1
                            </div>
                            <div className="header-item product-total-pay" />
                        </div>
                        <div className="product-voucher-pay">
                            Icon
                            <div className="voucher-shop-pay">
                                Voucher của Shop
                            </div>
                            <div className="voucher-choose-acctions">
                                <button className="voucher-button-pay-choose">
                                    <span>Chọn Voucher</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="message-container">
                        <div className="message-section">
                            <div className="message-column">
                                <div className="message-input-wrapper">
                                    <div className="message-label">
                                        <span className="message-text-pay">
                                            Lời nhắn:
                                        </span>
                                        <div className="message-input">
                                            <div className="input-container">
                                                <div className="input-wrapper">
                                                    <input
                                                        className="input-field"
                                                        type="text"
                                                        placeholder="Lưu ý cho Người bán..."
                                                        aria-label="Lời nhắn:"
                                                        defaultValue
                                                    />
                                                </div>
                                                <div />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="shipping-column">
                                <div className="shipping-info">
                                    <div className="shipping-pay">
                                        <div className="shipping-label">
                                            Đơn vị vận chuyển:
                                        </div>
                                        <div className="shipping-provider">
                                            <div>Nhanh</div>
                                        </div>
                                        <button className="change-button">
                                            Thay đổi
                                        </button>
                                        <div className="price">
                                            <span className="price-shipping-pay">
                                                ₫51.500
                                            </span>
                                        </div>
                                    </div>
                                    <div className="delivery-info">
                                        <img
                                            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/checkout/41fe56ab756fc3082a08.svg"
                                            alt="Shipping Icon"
                                        />
                                        Đảm bảo nhận hàng từ 5 Tháng 8 - 7 Tháng
                                        8
                                        <div className="voucher-info">
                                            <div>
                                                Nhận Voucher trị giá ₫15.000 nếu
                                                đơn hàng được giao đến bạn sau
                                                ngày 7 Tháng 8 2024.
                                            </div>
                                            <div className="info-icon">
                                                <svg
                                                    enableBackground="new 0 0 15 15"
                                                    viewBox="0 0 15 15"
                                                    x={0}
                                                    y={0}
                                                    className="icon-help"
                                                >
                                                    <g>
                                                        <circle
                                                            cx="7.5"
                                                            cy="7.5"
                                                            fill="none"
                                                            r="6.5"
                                                            strokeMiterlimit={
                                                                10
                                                            }
                                                        />
                                                        <path
                                                            d="m5.3 5.3c.1-.3.3-.6.5-.8s.4-.4.7-.5.6-.2 1-.2c.3 0 .6 0 .9.1s.5.2.7.4.4.4.5.7.2.6.2.9c0 .2 0 .4-.1.6s-.1.3-.2.5c-.1.1-.2.2-.3.3-.1.2-.2.3-.4.4-.1.1-.2.2-.3.3s-.2.2-.3.4c-.1.1-.1.2-.2.4s-.1.3-.1.5v.4h-.9v-.5c0-.3.1-.6.2-.8s.2-.4.3-.5c.2-.2.3-.3.5-.5.1-.1.3-.3.4-.4.1-.2.2-.3.3-.5s.1-.4.1-.7c0-.4-.2-.7-.4-.9s-.5-.3-.9-.3c-.3 0-.5 0-.7.1-.1.1-.3.2-.4.4-.1.1-.2.3-.3.5 0 .2-.1.5-.1.7h-.9c0-.3.1-.7.2-1zm2.8 5.1v1.2h-1.2v-1.2z"
                                                            stroke="none"
                                                        />
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="additional-info" />
                                    <div className="inspection-info">
                                        <div className="inspection-text">
                                            Được đồng kiểm.{" "}
                                        </div>
                                        <div className="inspection-icon">
                                            icon
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-container ">
                <div className="container-p">
                    <div className="voucher-container-shop ">
                        <div className="voucher-shop-pay">
                            <div className="voucher-icon-container-shop-pay">
                                <div className="voucher-icon-shop-pay">
                                    <div className="voucher-icon-inner-shop-pay">
                                        <h2 className="voucher-title-shop-pay">
                                            Icon Shopee Voucher
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="voucher-action-shop-pay">
                                <button className="voucher-button-shop-pay">
                                    Chọn Voucher
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="coins-section">
                        <div className="coins-details">
                            <svg
                                fill="none"
                                viewBox="0 0 18 18"
                                className="coins-icon"
                            >
                                <path
                                    stroke="#FFA600"
                                    strokeWidth="1.3"
                                    d="M17.35 9A8.35 8.35 0 11.65 9a8.35 8.35 0 0116.7 0z"
                                />
                                <path
                                    fill="#FFA600"
                                    fillRule="evenodd"
                                    stroke="#FFA600"
                                    strokeWidth=".2"
                                    d="M6.86 4.723c-.683.576-.998 1.627-.75 2.464.215.725.85 1.258 1.522 1.608.37.193.77.355 1.177.463.1.027.2.051.3.08.098.03.196.062.294.096.06.021.121.044.182.067.017.006.107.041.04.014-.07-.028.071.03.087.037.286.124.56.27.82.44.114.076.045.024.151.111a2.942 2.942 0 01.322.303c.087.093.046.042.114.146.18.275.245.478.235.8-.01.328-.14.659-.325.867-.47.53-1.232.73-1.934.696a4.727 4.727 0 01-1.487-.307c-.45-.182-.852-.462-1.242-.737-.25-.176-.643-.04-.788.197-.17.279-.044.574.207.75.753.532 1.539.946 2.474 1.098.885.144 1.731.124 2.563-.224.78-.326 1.416-.966 1.607-1.772.198-.838-.023-1.644-.61-2.29-.683-.753-1.722-1.17-2.706-1.43a4.563 4.563 0 01-.543-.183c.122.048-.044-.02-.078-.035a4.77 4.77 0 01-.422-.212c-.594-.338-.955-.722-.872-1.369.105-.816.757-1.221 1.555-1.28.808-.06 1.648.135 2.297.554.614.398 1.19-.553.58-.947-1.33-.86-3.504-1.074-4.77-.005z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <h2 className="coins-title">Shopee Xu</h2>
                            <div className="coins-unavailable">
                                Không thể sử dụng Xu
                            </div>
                        </div>
                        <div className="coins-action">
                            <div className="coins-amount">[-₫0]</div>
                            <label className="checkbox-container checkbox-container--disabled">
                                <input
                                    className="checkbox-input"
                                    type="checkbox"
                                    aria-checked="false"
                                    aria-disabled="true"
                                    tabIndex={0}
                                    role="checkbox"
                                    aria-label="Coins Balance 0"
                                    aria-live="polite"
                                />
                                <div className="checkbox-box" />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-container">
                <div className="container-p">
                    <div className="payment-method-container">
                        <div className="payment-method-header">
                            <h2 className="visually-hidden">
                                Phương thức thanh toán
                            </h2>
                            <div className="payment-method-content">
                                <div className="current-payment-method">
                                    <div className="current-payment-method-title">
                                        Phương thức thanh toán
                                    </div>
                                    <div className="payment-method-options">
                                        <div role="radiogroup">
                                            <span>
                                                <button
                                                    className="payment-method-option-info disabled"
                                                    tabIndex={0}
                                                    role="radio"
                                                    aria-disabled="true"
                                                    aria-checked="false"
                                                >
                                                    <div className="voucher-info">
                                                        <span>
                                                            Số dư TK Shopee{" "}
                                                        </span>
                                                        <span className="voucher-balance">
                                                            {" "}
                                                            (₫0)
                                                        </span>
                                                    </div>
                                                </button>
                                            </span>
                                            <span>
                                                <button
                                                    className="payment-method-option-shoppeepay selected"
                                                    tabIndex={0}
                                                    role="radio"
                                                    aria-label="Ví ShopeePay"
                                                    aria-disabled="false"
                                                    aria-checked="true"
                                                >
                                                    Ví ShopeePay
                                                </button>
                                            </span>
                                            <span>
                                                <button
                                                    className="payment-method-option-googlepay disabled"
                                                    tabIndex={0}
                                                    role="radio"
                                                    aria-label="Google Pay"
                                                    aria-disabled="true"
                                                    aria-checked="false"
                                                >
                                                    Google Pay
                                                </button>
                                            </span>
                                            <span>
                                                <button
                                                    className="payment-method-option-banking"
                                                    tabIndex={0}
                                                    role="radio"
                                                    aria-label="Thẻ Tín dụng/Ghi nợ"
                                                    aria-disabled="false"
                                                    aria-checked="false"
                                                >
                                                    Thẻ Tín dụng/Ghi nợ
                                                </button>
                                            </span>
                                            <span>
                                                <button
                                                    className="payment-method-option-hang"
                                                    tabIndex={0}
                                                    role="radio"
                                                    aria-label="Thanh toán khi nhận hàng"
                                                    aria-disabled="false"
                                                    aria-checked="false"
                                                >
                                                    Thanh toán khi nhận hàng
                                                </button>
                                            </span>
                                        </div>
                                        <div aria-live="polite" />
                                    </div>
                                </div>
                                <div className="payment-method-banners">
                                    <div className="banner-single">
                                        <img
                                            className="banner-single-pay"
                                            src="../assets/img/logo/banner-pay.jpg"
                                            alt="a"
                                        />
                                    </div>
                                </div>
                                <div className="bank-transfer-categories">
                                    <div className="bank-transfer-category">
                                        <div className="bank-transfer-item disabled">
                                            <div
                                                className="radio-button-pay"
                                                tabIndex={0}
                                                role="radio"
                                                aria-checked="false"
                                                aria-disabled="false"
                                            >
                                                <input
                                                    type="radio"
                                                    id="html"
                                                    name="fav_language"
                                                    defaultValue="HTML"
                                                />
                                                <div className="radio-content">
                                                    <div className="radio-label">
                                                        <div className="bank-transfer-card">
                                                            <div className="card-icon-container">
                                                                <img
                                                                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/paymentfe/cb78f1ca161d1694.png"
                                                                    className="card-icon"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <div className="card-details">
                                                                <div className="card-title">
                                                                    Ví ShopeePay
                                                                    Số dư
                                                                </div>
                                                                <div className="card-subtitle">
                                                                    ₫0
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bank-transfer-category">
                                        <div className="bank-transfer-item">
                                            <div
                                                className="radio-button-pay checked"
                                                tabIndex={0}
                                                role="radio"
                                                aria-checked="true"
                                            >
                                                <input
                                                    type="radio"
                                                    id="html"
                                                    name="fav_language"
                                                    defaultValue="HTML"
                                                />
                                                <div className="radio-content">
                                                    <div className="radio-label">
                                                        <div className="bank-transfer-card">
                                                            <div className="card-icon-container">
                                                                <img
                                                                    src="https://spm.susercontent.com/api/v4/50092786/shopee_logo_bucket/static/images/Img_giro_bidv.png"
                                                                    className="card-icon"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <div className="card-details">
                                                                <div className="card-title">
                                                                    BIDV
                                                                </div>
                                                                <div className="card-subtitle">
                                                                    xI_08
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="divider" />
                                <div
                                    className="payment-summary-container"
                                    aria-live="polite"
                                >
                                    <div className="summary-item">
                                        <h3 className="summary-title">
                                            Shopee Xu nhận được từ Voucher
                                        </h3>
                                        <div className="summary-value">
                                            1.000 Xu
                                        </div>
                                    </div>
                                    <div className="summary-item">
                                        <h3 className="summary-title">
                                            Tổng Shopee Xu sẽ nhận được
                                            <div
                                                className="info-icon"
                                                id="info-icon"
                                                tabIndex={0}
                                            >
                                                <div
                                                    role="button"
                                                    className="info-icon__target"
                                                >
                                                    <svg
                                                        enableBackground="new 0 0 15 15"
                                                        viewBox="0 0 15 15"
                                                        x={0}
                                                        y={0}
                                                        className="icon-help"
                                                    >
                                                        <g>
                                                            <circle
                                                                cx="7.5"
                                                                cy="7.5"
                                                                fill="none"
                                                                r="6.5"
                                                                strokeMiterlimit={
                                                                    10
                                                                }
                                                            />
                                                            <path
                                                                d="m5.3 5.3c.1-.3.3-.6.5-.8s.4-.4.7-.5.6-.2 1-.2c.3 0 .6 0 .9.1s.5.2.7.4.4.4.5.7.2.6.2.9c0 .2 0 .4-.1.6s-.1.3-.2.5c-.1.1-.2.2-.3.3-.1.2-.2.3-.4.4-.1.1-.2.2-.3.3s-.2.2-.3.4c-.1.1-.1.2-.2.4s-.1.3-.1.5v.4h-.9v-.5c0-.3.1-.6.2-.8s.2-.4.3-.5c.2-.2.3-.3.5-.5.1-.1.3-.3.4-.4.1-.2.2-.3.3-.5s.1-.4.1-.7c0-.4-.2-.7-.4-.9s-.5-.3-.9-.3c-.3 0-.5 0-.7.1-.1.1-.3.2-.4.4-.1.1-.2.3-.3.5 0 .2-.1.5-.1.7h-.9c0-.3.1-.7.2-1zm2.8 5.1v1.2h-1.2v-1.2z"
                                                                stroke="none"
                                                            />
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                        </h3>
                                        <div className="summary-value summary-value-1">
                                            1.000 Xu
                                        </div>
                                    </div>
                                    <div className="divider" />
                                    <div className="summary-item">
                                        <h3 className="summary-title">
                                            Tổng tiền hàng
                                        </h3>
                                        <div className="summary-value">
                                            ₫1.935.000
                                        </div>
                                    </div>
                                    <div className="summary-item">
                                        <h3 className="summary-title">
                                            Phí vận chuyển
                                        </h3>
                                        <div className="summary-value">
                                            ₫122.800
                                        </div>
                                    </div>
                                    <div className="summary-item">
                                        <h3 className="summary-title">
                                            Tổng cộng Voucher giảm giá:
                                        </h3>
                                        <div className="summary-value">
                                            -₫5.000
                                        </div>
                                    </div>
                                    <div className="summary-item">
                                        <h3 className="summary-title">
                                            Tổng thanh toán
                                        </h3>
                                        <div className="summary-value total-amount">
                                            ₫2.052.800
                                        </div>
                                    </div>
                                    <div className="order-agreement">
                                        <div className="agreement-text-pay">
                                            Nhấn "Đặt hàng" đồng nghĩa với việc
                                            bạn đồng ý tuân theo{" "}
                                            <a
                                                className="agreement-link"
                                                href="https://help.shopee.vn/portal/article/77242"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Điều khoản Shopee
                                            </a>
                                        </div>
                                        <div className="agreement-button">
                                            <button className="btn-place-order">
                                                <a href="/">Đặt hàng</a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
