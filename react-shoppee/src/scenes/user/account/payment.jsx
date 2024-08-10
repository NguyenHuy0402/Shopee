import React, { useEffect, useState } from "react";

export default function Payment() {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (value) => {
        setSelectedOption(value);
    };

    useEffect(() => {
        const link = document.createElement("link");
        link.href =
            "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";
        link.rel = "stylesheet";
        link.integrity =
            "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH";
        link.crossOrigin = "anonymous";
        document.head.appendChild(link);

        return () => {
            document.head.removeChild(link);
        };
    }, []);
    return (
        <div className="app-profile">
            <div className="container-p">
                <div className="row">
                    <div className="col-md-2">
                        <div className="profile-container">
                            <div className="profile-header">
                                <a className="profile-link" href="/profile">
                                    <div className="profile-avatar">
                                        <div className="avatar-placeholder">
                                            <img
                                                src="../../assets/img/user.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </a>
                                <div className="profile-info">
                                    <div className="profile-username">
                                        nguyentruonggiang815
                                    </div>
                                    <div>
                                        <a
                                            className="profile-edit-link"
                                            href="/profile"
                                        >
                                            <svg
                                                width={12}
                                                height={12}
                                                viewBox="0 0 12 12"
                                                xmlns="http://www.w3.org/2000/svg"
                                                style={{ marginRight: 4 }}
                                            >
                                                <path
                                                    d="M8.54 0L6.987 1.56l3.46 3.48L12 3.48M0 8.52l.073 3.428L3.46 12l6.21-6.18-3.46-3.48"
                                                    fill="#9B9B9B"
                                                    fillRule="evenodd"
                                                />
                                            </svg>
                                            Sửa hồ sơ
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="profile-content">
                                {/* <div className="dropdown">
                                    <div className="dropdown-header">
                                        <a
                                            className="dropdown-link"
                                            href="/user/voucher-wallet"
                                        >
                                            <div className="dropdown-icon">
                                                <img
                                                    src="https://down-vn.img.susercontent.com/file/sg-11134004-7rdwk-ly85i091pfk629"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="dropdown-text">
                                                <span className="dropdown-label">
                                                    Ưu đãi dành riêng cho bạn
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="dropdown-body">
                                        <div className="dropdown-menu">
                                            <a
                                                className="dropdown-item"
                                                href="/user/voucher-wallet"
                                            >
                                                <span className="dropdown-item-text">
                                                    Kho voucher của bạn
                                                </span>
                                            </a>
                                            <a
                                                className="dropdown-item"
                                                href="/m/don-dau-tien-mien-phi"
                                            >
                                                <span className="dropdown-item-text">
                                                    Đơn Đầu Tiên Miễn Phí
                                                </span>
                                            </a>
                                            <a
                                                className="dropdown-item"
                                                href="/m/shopee-sieu-re"
                                            >
                                                <span className="dropdown-item-text">
                                                    Shopee Siêu Rẻ
                                                </span>
                                            </a>
                                            <a
                                                className="dropdown-item"
                                                href="/m/ma-giam-gia"
                                            >
                                                <span className="dropdown-item-text">
                                                    Mã giảm giá
                                                </span>
                                            </a>
                                            <a
                                                className="dropdown-item"
                                                href="/m/mien-phi-van-chuyen"
                                            >
                                                <span className="dropdown-item-text">
                                                    Miễn phí vận chuyển
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="dropdown">
                                    <div className="dropdown-header">
                                        <a
                                            className="dropdown-link"
                                            href="/m/8-8"
                                        >
                                            <div className="dropdown-icon">
                                                <img
                                                    className="freeship-88"
                                                    src="https://down-vn.img.susercontent.com/file/sg-11134004-7rdxw-ly5159btnr8q8b"
                                                    alt="a"
                                                />
                                            </div>
                                            <div className="dropdown-text">
                                                <span className="dropdown-label">
                                                    8.8 Siêu Hội Freeship
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                    {/* <div className="dropdown-body">
                                        <div className="dropdown-menu">
                                            <a
                                                className="dropdown-item"
                                                href="/m/8-8"
                                            >
                                                <span className="dropdown-item-text">
                                                    Trang chính
                                                </span>
                                            </a>
                                            <a
                                                className="dropdown-item"
                                                href="/m/khung-gio-san-sale"
                                            >
                                                <span className="dropdown-item-text">
                                                    Khung Giờ Săn Sale
                                                </span>
                                            </a>
                                            <a
                                                className="dropdown-item"
                                                href="/m/shopeevideo"
                                            >
                                                <span className="dropdown-item-text">
                                                    Shopee Video
                                                </span>
                                            </a>
                                            <a
                                                className="dropdown-item"
                                                href="/m/giao-nhanh-dung-hen"
                                            >
                                                <span className="dropdown-item-text">
                                                    Giao nhanh đúng hẹn
                                                </span>
                                            </a>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="dropdown">
                                    <div className="dropdown-header">
                                        <a
                                            className="dropdown-link"
                                            href="/profile"
                                        >
                                            <div className="dropdown-icon">
                                                <img
                                                    className="user-profile"
                                                    src="https://down-vn.img.susercontent.com/file/ba61750a46794d8847c3f463c5e71cc4"
                                                    alt="User Profile"
                                                />
                                            </div>
                                            <div className="dropdown-text">
                                                <span className="dropdown-label">
                                                    Tài khoản của tôi
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="dropdown-header--">
                                        <a
                                            className="dropdown-link"
                                            href="/profile"
                                        >
                                            <div className="dropdown-text--">
                                                <span className="dropdown-label-3--">
                                                    Hồ Sơ
                                                </span>
                                            </div>
                                        </a>
                                        <a
                                            className="dropdown-link"
                                            href="/payment"
                                        >
                                            <div className="dropdown-text--">
                                                <span className="dropdown-label-3-">
                                                    Ngân Hàng
                                                </span>
                                            </div>
                                        </a>
                                        <a
                                            className="dropdown-link"
                                            href="/address"
                                        >
                                            <div className="dropdown-text--">
                                                <span className="dropdown-label-3--">
                                                    Địa Chỉ
                                                </span>
                                            </div>
                                        </a>
                                        <a
                                            className="dropdown-link"
                                            href="/password"
                                        >
                                            <div className="dropdown-text--">
                                                <span className="dropdown-label-3--">
                                                    Đổi Mật Khẩu
                                                </span>
                                            </div>
                                        </a>
                                        <a
                                            className="dropdown-link"
                                            href="/notification"
                                        >
                                            <div className="dropdown-text--">
                                                <span className="dropdown-label-3--">
                                                    Cài Đặt Thông Báo
                                                </span>
                                            </div>
                                        </a>
                                        <a
                                            className="dropdown-link"
                                            href="/privacy"
                                        >
                                            <div className="dropdown-text--">
                                                <span className="dropdown-label-3--">
                                                    Những Thiết Lập Riêng Tư
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="dropdown dropdown--open">
                                    <div className="dropdown-header">
                                        <a
                                            className="dropdown-link"
                                            href="/purchase"
                                        >
                                            <div className="dropdown-icon">
                                                <img
                                                    className="profile-purchase-order"
                                                    src="https://down-vn.img.susercontent.com/file/f0049e9df4e536bc3e7f140d071e9078"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="dropdown-text">
                                                <span className="dropdown-label">
                                                    Đơn Mua
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="dropdown-body dropdown-body--open">
                                        <div className="dropdown-menu" />
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <div className="dropdown-header">
                                        <a
                                            className="dropdown-link"
                                            href="/notificationOrder"
                                        >
                                            <div className="dropdown-icon">
                                                <img
                                                    className="profile-notifications"
                                                    src="https://down-vn.img.susercontent.com/file/e10a43b53ec8605f4829da5618e0717c"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="dropdown-text">
                                                <span className="dropdown-label">
                                                    Thông báo
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                    {/* <div className="dropdown-body">
                                        <div className="dropdown-menu">
                                            <a
                                                className="dropdown-item"
                                                href="/user/notifications/order"
                                            >
                                                <span className="dropdown-item-text">
                                                    Cập nhật đơn hàng
                                                </span>
                                            </a>
                                            <a
                                                className="dropdown-item"
                                                href="/user/notifications/promotion"
                                            >
                                                <span className="dropdown-item-text">
                                                    Khuyến mãi
                                                </span>
                                            </a>
                                            <a
                                                className="dropdown-item"
                                                href="/user/notifications/wallet"
                                            >
                                                <span className="dropdown-item-text">
                                                    Cập nhật Ví
                                                </span>
                                            </a>
                                            <a
                                                className="dropdown-item"
                                                href="/user/notifications/shopee"
                                            >
                                                <span className="dropdown-item-text">
                                                    Cập nhật Shopee
                                                </span>
                                            </a>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="dropdown">
                                    <div className="dropdown-header">
                                        <a
                                            className="dropdown-link"
                                            href="/voucherWallet"
                                        >
                                            <div className="dropdown-icon">
                                                <img
                                                    className="profile-voucher-wallet"
                                                    src="https://down-vn.img.susercontent.com/file/84feaa363ce325071c0a66d3c9a88748"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="dropdown-text">
                                                <span className="dropdown-label">
                                                    Kho Voucher
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="dropdown-body">
                                        <div className="dropdown-menu" />
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <div className="dropdown-header">
                                        <a
                                            className="dropdown-link"
                                            href="/user/coin"
                                        >
                                            <div className="dropdown-icon">
                                                <img
                                                    className="profile-coin"
                                                    src="https://down-vn.img.susercontent.com/file/a0ef4bd8e16e481b4253bd0eb563f784"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="dropdown-text">
                                                <span className="dropdown-label">
                                                    Shopee Xu
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="dropdown-body">
                                        <div className="dropdown-menu" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="profile-container-">
                            <div className="profile-main-" role="main">
                                <div style={{ display: "contents" }}>
                                    <div className="profile-header-">
                                        <div className="header-title-card">
                                            <h1 className="title">
                                                Thẻ Tín Dụng/Ghi Nợ
                                            </h1>
                                            <div className="button">
                                                <button className="button-card-tittle">
                                                    <i class="fas fa-plus"></i>
                                                    <span>Thêm thẻ mới</span>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="bacc-centered-msg">
                                            Bạn chưa liên kết thẻ.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="profile-main-" role="main">
                                <div style={{ display: "contents" }}>
                                    <div className="profile-header-">
                                        <div className="header-title-card">
                                            <h1 className="title">
                                                Tài Khoản Ngân Hàng Của Tôi
                                            </h1>
                                            <div className="button">
                                                <button className="button-card-tittle">
                                                    <i class="fas fa-plus"></i>
                                                    <span>
                                                        Thêm Tài Khoản Ngân Hàng
                                                        Liên Kết
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="bacc-centered-msg">
                                            Bạn chưa có tài khoản ngân hàng.
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
