import React from "react";
export default function checkout() {
    return (
        <div>
            <header className="header-p">
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
                                    src="img/qr/qr-code.png"
                                    className="header__qr"
                                    alt=""
                                />
                                <div className="header__apps">
                                    <a href="a" className="header__app-link">
                                        <img
                                            src="img/qr/app-store.png"
                                            className="header__app-img"
                                            alt=""
                                        />
                                    </a>
                                    <a href="a" className="header__app-link">
                                        <img
                                            src="img/qr/gg-play.png"
                                            className="header__app-img"
                                            alt=""
                                        />
                                    </a>
                                    <a href="a" className="header__app-link">
                                        <img
                                            src="img/qr/app-gallery.png"
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
                                                    src="img/sp/casio.png"
                                                    className="header__notifi-img"
                                                    alt=""
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
                                                    src="img/sp/iphone.png"
                                                    className="header__notifi-img"
                                                    alt=""
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
                                                    src="img/sp/iphone2.png"
                                                    className="header__notifi-img"
                                                    alt=""
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
                                                    src="img/sp/laptop.png"
                                                    className="header__notifi-img"
                                                    alt=""
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
                                                    src="img/sp/laptop2.png"
                                                    className="header__notifi-img"
                                                    alt=""
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
                                    <a href="#" class="header__nav-item-link header__nav-item--bold">Lục Thiên Phong</a>
                                    <ul class="header__nav-user-menu">
                                        <li class="header__nav-user-item">
                                            <a href="#">Tài khoản của tôi</a>
                                        </li>
                                        <li class="header__nav-user-item">
                                            <a href="#">Đơn mua</a>
                                        </li>
                                        <li class="header__nav-user-item">
                                            <a href="#">Đăng xuất</a>
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
                                                alt=""
                                            />
                                            <div className="cart-page-logo__page-name">
                                                Giỏ hàng
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
            </header>
            <div className="cart-container">
                <div className="container-p container-carts">
                    <div className="Notification-cart">
                        <img
                            className="img-notification-freeship"
                            src="../assets/img/logo/freeship.png"
                            alt="a"
                        />
                        <span className="Notification-text-cart">
                            Nhấn vào mục Mã giảm giá ở cuối trang để hưởng miễn
                            phí vận chuyển bạn nhé!
                        </span>
                    </div>
                    <div className="Header-cart">
                        <div className="select-all-checkbox-cart">
                            <label className="stardust-checkbox">
                                <input
                                    className="stardust-checkbox__input"
                                    type="checkbox"
                                    aria-checked="false"
                                    aria-disabled="false"
                                    tabIndex={0}
                                    role="checkbox"
                                    aria-label="Click here to select all products"
                                />
                                <div className="stardust-checkbox__box" />
                            </label>
                        </div>
                        <div className="product-header-cart">Sản Phẩm</div>
                        <div className="price-header-cart">Đơn Giá</div>
                        <div className="quantity-header-cart">Số Lượng</div>
                        <div className="total-price-header-cart">Số Tiền</div>
                        <div className="actions-header-cart">Thao Tác</div>
                    </div>
                    <section className="shop-section-cart">
                        <div className="shop-container-cart">
                            <div className="shop-header-cart">
                                <div className="select-shop-checkbox">
                                    <label className="stardust-checkbox">
                                        <input
                                            className="stardust-checkbox__input"
                                            type="checkbox"
                                            aria-checked="false"
                                            aria-disabled="false"
                                            tabIndex={0}
                                            role="checkbox"
                                            aria-label="Click here to select all products"
                                        />
                                        <div className="stardust-checkbox__box" />
                                    </label>
                                </div>
                                <div className="select-shop-text">
                                    <a
                                        className="shop-link"
                                        href="/khocongngheonline?categoryId=100644&entryPoint=cart&itemId=23177255617"
                                    >
                                        <div className="preferred-seller-icon">
                                            Yếu Thích
                                        </div>
                                        <span
                                            className="shop-name-cart"
                                            style={{ marginLeft: 10 }}
                                        >
                                            Kho Công Nghệ Online
                                        </span>
                                    </a>
                                </div>
                                <div className="select-shop-chat">
                                    <svg
                                        viewBox="0 0 16 16"
                                        className="shopee-svg-icon"
                                    >
                                        <g fillRule="evenodd">
                                            <path d="M15 4a1 1 0 01.993.883L16 5v9.932a.5.5 0 01-.82.385l-2.061-1.718-8.199.001a1 1 0 01-.98-.8l-.016-.117-.108-1.284 8.058.001a2 2 0 001.976-1.692l.018-.155L14.293 4H15zm-2.48-4a1 1 0 011 1l-.003.077-.646 8.4a1 1 0 01-.997.923l-8.994-.001-2.06 1.718a.5.5 0 01-.233.108l-.087.007a.5.5 0 01-.492-.41L0 11.732V1a1 1 0 011-1h11.52zM3.646 4.246a.5.5 0 000 .708c.305.304.694.526 1.146.682A4.936 4.936 0 006.4 5.9c.464 0 1.02-.062 1.608-.264.452-.156.841-.378 1.146-.682a.5.5 0 10-.708-.708c-.185.186-.445.335-.764.444a4.004 4.004 0 01-2.564 0c-.319-.11-.579-.258-.764-.444a.5.5 0 00-.708 0z" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div className="related-products-container">
                                <div className="related-products-header">
                                    <span className="promotion-title">
                                        Mua Kèm
                                    </span>
                                    <span className="promotion-description">
                                        Mua nhiều hơn ₫399.000 và nhận được 1
                                        quà tặng
                                    </span>
                                    <span className="promotion-link">
                                        <a href="/purchase-with-gifts/201385711309348/23177255617/189373321?showGifts=0">
                                            Thêm &gt;
                                        </a>
                                    </span>
                                </div>
                                <div className="related-product-item-cart">
                                    <div className="product-content-cart">
                                        <div className="checkbox-container-cart">
                                            <label className="custom-checkbox-footer">
                                                <input
                                                    className="checkbox-input"
                                                    type="checkbox"
                                                    aria-checked="false"
                                                    aria-disabled="false"
                                                    tabIndex={0}
                                                    role="checkbox"
                                                    aria-label="Click here to select this product"
                                                />
                                                <div className="checkbox-box" />
                                            </label>
                                        </div>
                                        <div className="product-details-cart">
                                            <div className="product-image-cart">
                                                <a href="a">
                                                    <img
                                                        src="../assets/img/sp/iphone.png"
                                                        alt="a"
                                                    />
                                                </a>
                                            </div>
                                            <div className="product-info-cart">
                                                <a
                                                    className="product-link-cart"
                                                    title="a"
                                                    href="a"
                                                >
                                                    Monka 3075 V2 Pro - Bàn phím
                                                    cơ Monka 3075 V2 Pro Mạch
                                                    Xuôi (Led RGB, Kết Nối 3
                                                    Mode, Màn Hình LCD)
                                                </a>
                                                <div className="free-return-cart">
                                                    Đổi ý miễn phí 15 ngày
                                                </div>
                                                <img
                                                    className="additional-image"
                                                    src="../assets/img/logo/qc88.png"
                                                    alt="a"
                                                />
                                            </div>
                                            <div className="product-options">
                                                <button
                                                    className="options-button"
                                                    role="button"
                                                    tabIndex={0}
                                                >
                                                    <div className="options-text">
                                                        Phân loại hàng: ^
                                                    </div>
                                                    <div className="options-value">
                                                        Đen Keycap Ninja,KTT
                                                        Hyacinth
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="product-pricing-cart">
                                            <div className="price-wrapper-cart">
                                                <span className="original-price-cart">
                                                    ₫1.990.000
                                                </span>
                                                <span className="discounted-price-cart">
                                                    ₫1.810.000
                                                </span>
                                            </div>
                                        </div>
                                        <div className="product-quantity-cart">
                                            <button className="quantity-button-cart">
                                                -
                                            </button>
                                            <input
                                                className="quantity-input-field-cart"
                                                type="text"
                                                role="spinbutton"
                                                aria-valuenow={1}
                                                defaultValue={1}
                                            />
                                            <button className="quantity-button-cart">
                                                +
                                            </button>
                                        </div>
                                        <div className="product-total-price-cart">
                                            <span>₫1.810.000</span>
                                            <span className="a11y-hidden">
                                                Total price: ₫1.810.000
                                            </span>
                                        </div>
                                        <div className="product-actions-cart">
                                            <button className="delete-button">
                                                Xóa
                                            </button>
                                            <div className="similar-products-button-wrapper">
                                                <button
                                                    className="similar-products-button"
                                                    id="show-popup"
                                                >
                                                    <span className="similar-products-text">
                                                        Tìm sản phẩm tương tự ^
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                        {/* Popup */}
                                        <div className="popup" id="popup">
                                            <div className="popup-content">
                                                <span
                                                    className="popup-close"
                                                    id="close-popup"
                                                >
                                                    ×
                                                </span>
                                                <h2>Sản phẩm tương tự</h2>
                                                {/* Nội dung của bảng nhỏ */}
                                                <p>
                                                    Danh sách sản phẩm tương tự
                                                    sẽ hiển thị ở đây.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="voucher-wrapper-cart">
                            <div className="voucher-icon-cart">
                                <label className="custom-checkbox">
                                    <input
                                        className="checkbox-input"
                                        type="checkbox"
                                        aria-checked="false"
                                        aria-disabled="false"
                                        tabIndex={0}
                                        role="checkbox"
                                        aria-label="Click here to select this product"
                                    />
                                    <div className="checkbox-box" />
                                </label>
                            </div>
                            <div className="voucher-details-cart">
                                <div className="voucher-description">
                                    Voucher hoàn đến 70%
                                </div>
                                <div
                                    className="voucher-button-wrapper"
                                    style={{ position: "relative" }}
                                >
                                    <button className="voucher-button">
                                        Xem thêm voucher
                                    </button>
                                    <div style={{ display: "contents" }} />
                                </div>
                            </div>
                        </div>
                        <div className="shipping-discount-wrapper-cart">
                            <img
                                className="img-notification-freeship"
                                src="../assets/img/logo/freeship.png"
                                alt="a"
                            />
                            <div className="shipping-discount-description-cart">
                                Giảm ₫300.000 phí vận chuyển đơn tối thiểu ₫0;
                                Giảm ₫500.000 phí vận chuyển đơn tối thiểu
                                ₫500.000
                            </div>
                            <div className="shipping-discount-drawer">
                                <span className="shipping-discount-learn-more">
                                    {" "}
                                    Tìm hiểu thêm{" "}
                                </span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className="cart-container">
                <div className="container-p container-carts">
                    <section className="shop-section-cart">
                        <div className="shop-container-cart">
                            <div className="shop-header-cart">
                                <div className="select-shop-checkbox">
                                    <label className="stardust-checkbox">
                                        <input
                                            className="stardust-checkbox__input"
                                            type="checkbox"
                                            aria-checked="false"
                                            aria-disabled="false"
                                            tabIndex={0}
                                            role="checkbox"
                                            aria-label="Click here to select all products"
                                        />
                                        <div className="stardust-checkbox__box" />
                                    </label>
                                </div>
                                <div className="select-shop-text">
                                    <a
                                        className="shop-link"
                                        href="/khocongngheonline?categoryId=100644&entryPoint=cart&itemId=23177255617"
                                    >
                                        <div className="preferred-seller-icon">
                                            Yếu Thích
                                        </div>
                                        <span
                                            className="shop-name-cart"
                                            style={{ marginLeft: 10 }}
                                        >
                                            Kho Công Nghệ Online
                                        </span>
                                    </a>
                                </div>
                                <div className="select-shop-chat">
                                    <svg
                                        viewBox="0 0 16 16"
                                        className="shopee-svg-icon"
                                    >
                                        <g fillRule="evenodd">
                                            <path d="M15 4a1 1 0 01.993.883L16 5v9.932a.5.5 0 01-.82.385l-2.061-1.718-8.199.001a1 1 0 01-.98-.8l-.016-.117-.108-1.284 8.058.001a2 2 0 001.976-1.692l.018-.155L14.293 4H15zm-2.48-4a1 1 0 011 1l-.003.077-.646 8.4a1 1 0 01-.997.923l-8.994-.001-2.06 1.718a.5.5 0 01-.233.108l-.087.007a.5.5 0 01-.492-.41L0 11.732V1a1 1 0 011-1h11.52zM3.646 4.246a.5.5 0 000 .708c.305.304.694.526 1.146.682A4.936 4.936 0 006.4 5.9c.464 0 1.02-.062 1.608-.264.452-.156.841-.378 1.146-.682a.5.5 0 10-.708-.708c-.185.186-.445.335-.764.444a4.004 4.004 0 01-2.564 0c-.319-.11-.579-.258-.764-.444a.5.5 0 00-.708 0z" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div className="related-products-container">
                                <div className="related-products-header">
                                    <span className="promotion-title">
                                        Mua Kèm
                                    </span>
                                    <span className="promotion-description">
                                        Mua nhiều hơn ₫399.000 và nhận được 1
                                        quà tặng
                                    </span>
                                    <span className="promotion-link">
                                        <a href="/purchase-with-gifts/201385711309348/23177255617/189373321?showGifts=0">
                                            Thêm &gt;
                                        </a>
                                    </span>
                                </div>
                                <div className="related-product-item-cart">
                                    <div className="product-content-cart">
                                        <div className="checkbox-container-cart">
                                            <label className="custom-checkbox">
                                                <input
                                                    className="checkbox-input"
                                                    type="checkbox"
                                                    aria-checked="false"
                                                    aria-disabled="false"
                                                    tabIndex={0}
                                                    role="checkbox"
                                                    aria-label="Click here to select this product"
                                                />
                                                <div className="checkbox-box" />
                                            </label>
                                        </div>
                                        <div className="product-details-cart">
                                            <div className="product-image-cart">
                                                <a href="a">
                                                    <img
                                                        src="../assets/img/sp/iphone.png"
                                                        alt="a"
                                                    />
                                                </a>
                                            </div>
                                            <div className="product-info-cart">
                                                <a
                                                    className="product-link-cart"
                                                    title="a"
                                                    href="a"
                                                >
                                                    Monka 3075 V2 Pro - Bàn phím
                                                    cơ Monka 3075 V2 Pro Mạch
                                                    Xuôi (Led RGB, Kết Nối 3
                                                    Mode, Màn Hình LCD)
                                                </a>
                                                <div className="free-return-cart">
                                                    Đổi ý miễn phí 15 ngày
                                                </div>
                                                <img
                                                    className="additional-image"
                                                    src="../assets/img/logo/qc88.png"
                                                    alt="a"
                                                />
                                            </div>
                                            <div className="product-options">
                                                <button
                                                    className="options-button"
                                                    role="button"
                                                    tabIndex={0}
                                                >
                                                    <div className="options-text">
                                                        Phân loại hàng: ^
                                                    </div>
                                                    <div className="options-value">
                                                        Đen Keycap Ninja,KTT
                                                        Hyacinth
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="product-pricing-cart">
                                            <div className="price-wrapper-cart">
                                                <span className="original-price-cart">
                                                    ₫1.990.000
                                                </span>
                                                <span className="discounted-price-cart">
                                                    ₫1.810.000
                                                </span>
                                            </div>
                                        </div>
                                        <div className="product-quantity-cart">
                                            <button className="quantity-button-cart">
                                                -
                                            </button>
                                            <input
                                                className="quantity-input-field-cart"
                                                type="text"
                                                role="spinbutton"
                                                aria-valuenow={1}
                                                defaultValue={1}
                                            />
                                            <button className="quantity-button-cart">
                                                +
                                            </button>
                                        </div>
                                        <div className="product-total-price-cart">
                                            <span>₫1.810.000</span>
                                            <span className="a11y-hidden">
                                                Total price: ₫1.810.000
                                            </span>
                                        </div>
                                        <div className="product-actions-cart">
                                            <button className="delete-button">
                                                Xóa
                                            </button>
                                            <div className="similar-products-button-wrapper">
                                                <button
                                                    className="similar-products-button"
                                                    id="show-popup"
                                                >
                                                    <span className="similar-products-text">
                                                        Tìm sản phẩm tương tự ^
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                        {/* Popup */}
                                        <div className="popup" id="popup">
                                            <div className="popup-content">
                                                <span
                                                    className="popup-close"
                                                    id="close-popup"
                                                >
                                                    ×
                                                </span>
                                                <h2>Sản phẩm tương tự</h2>
                                                {/* Nội dung của bảng nhỏ */}
                                                <p>
                                                    Danh sách sản phẩm tương tự
                                                    sẽ hiển thị ở đây.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="voucher-wrapper-cart">
                            <div className="voucher-icon-cart">
                                <label className="custom-checkbox">
                                    <input
                                        className="checkbox-input"
                                        type="checkbox"
                                        aria-checked="false"
                                        aria-disabled="false"
                                        tabIndex={0}
                                        role="checkbox"
                                        aria-label="Click here to select this product"
                                    />
                                    <div className="checkbox-box" />
                                </label>
                            </div>
                            <div className="voucher-details-cart">
                                <div className="voucher-description">
                                    Voucher hoàn đến 70%
                                </div>
                                <div
                                    className="voucher-button-wrapper"
                                    style={{ position: "relative" }}
                                >
                                    <button className="voucher-button">
                                        Xem thêm voucher
                                    </button>
                                    <div style={{ display: "contents" }} />
                                </div>
                            </div>
                        </div>
                        <div className="shipping-discount-wrapper-cart">
                            <img
                                className="img-notification-freeship"
                                src="../assets/img/logo/freeship.png"
                                alt="a"
                            />
                            <div className="shipping-discount-description-cart">
                                Giảm ₫300.000 phí vận chuyển đơn tối thiểu ₫0;
                                Giảm ₫500.000 phí vận chuyển đơn tối thiểu
                                ₫500.000
                            </div>
                            <div className="shipping-discount-drawer">
                                <span className="shipping-discount-learn-more">
                                    {" "}
                                    Tìm hiểu thêm{" "}
                                </span>
                            </div>
                        </div>
                    </section>
                    <section className="cart-footer">
                        <div className="voucher-section">
                            <div className="voucher-info">
                                <div className="voucher-icon">Icon</div>
                                <div className="voucher-text">
                                    Shopee Voucher
                                </div>
                            </div>
                            <div className="voucher-extra" />
                            <button className="voucher-button">
                                Chọn hoặc nhập mã
                            </button>
                        </div>
                        <div className="coin-footer-cart">
                            <div className="coin-info">
                                <label className="custom-checkbox">
                                    <input
                                        className="checkbox-input"
                                        type="checkbox"
                                        aria-checked="false"
                                        aria-disabled="false"
                                        tabIndex={0}
                                        role="checkbox"
                                        aria-label="Click here to select this product"
                                    />
                                    <div className="checkbox-box" />
                                </label>
                            </div>
                            <div className="coin-icon">
                                <svg
                                    fill="none"
                                    viewBox="0 0 18 18"
                                    className="icon-coin-line"
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
                            </div>
                            <div className="coin-description">
                                <span className="coin-label">Shopee Xu</span>
                                <span className="coin-status">
                                    Bạn chưa chọn sản phẩm
                                </span>
                            </div>
                            <div className="price-display">-₫0</div>
                        </div>
                        <div className="cart-footer-end">
                            <div className="select-all-container">
                                <label className="select-all-checkbox">
                                    <input
                                        className="checkbox-input"
                                        type="checkbox"
                                        aria-checked="false"
                                        aria-disabled="false"
                                        tabIndex={0}
                                        role="checkbox"
                                        aria-label="Click here to select all products"
                                    />
                                    <div className="checkbox-box" />
                                </label>
                            </div>
                            <button className="select-all-btn">
                                Chọn Tất Cả (2)
                            </button>
                            <button className="remove-btn">Xóa</button>
                            <button className="wishlist-btn">
                                Lưu vào mục Đã thích
                            </button>
                            <div className="spacer" />
                            <div className="summary-container" role="region">
                                <div className="summary-details">
                                    <div className="summary-label">
                                        Tổng thanh toán (0 Sản phẩm):
                                    </div>
                                    <div className="summary-amount">₫0</div>
                                </div>
                            </div>
                            <a href="confirmation">
                                {" "}
                                <button className="checkout-btn">
                                    <span className="checkout-text">
                                        Mua hàng
                                    </span>
                                </button>
                            </a>
                        </div>
                    </section>
                    <div className="shopee-header-section shopee-header-section--simpl">
                        <div className="shopee-header-section__header__title">
                            <div>CÓ THỂ BẠN CŨNG THÍCH</div>
                        </div>
                        <a
                            className="shopee-header-section__header-link"
                            tabIndex={-1}
                            href="/cart/recommend"
                        >
                            <button className="shopee-button-no-outline">
                                Xem tất cả&nbsp;&gt;
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
