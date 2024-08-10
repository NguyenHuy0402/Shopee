import React, { useEffect, useState } from "react";

export default function VoucherWallet() {
    const [activeTab, setActiveTab] = useState("tab-id-all");

    const handleTabClick = (e, tabId) => {
        e.preventDefault();
        setActiveTab(tabId); // Cập nhật tab hiện tại
    };
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
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
                                    {/* <div className="dropdown-header--">
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
                                    </div> */}
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
                                    {/* <div className="dropdown-header--">
                                        <a
                                            className="dropdown-item"
                                            href="/notificationOrder"
                                        >
                                            <div className="dropdown-text--">
                                                <span className="dropdown-label-3--">
                                                    Cập nhật đơn hàng
                                                </span>
                                            </div>
                                        </a>
                                        <a
                                            className="dropdown-link"
                                            href="/notificationPromotion"
                                        >
                                            <div className="dropdown-text--">
                                                <span className="dropdown-label-3--">
                                                    Khuyến mãi
                                                </span>
                                            </div>
                                        </a>
                                        <a
                                            className="dropdown-link"
                                            href="/notificationWallet"
                                        >
                                            <div className="dropdown-text--">
                                                <span className="dropdown-label-3-">
                                                    Cập nhật Ví
                                                </span>
                                            </div>
                                        </a>
                                        <a
                                            className="dropdown-link"
                                            href="/notificationShopee"
                                        >
                                            <div className="dropdown-text--">
                                                <span className="dropdown-label-3--">
                                                    Cập nhật Shopee
                                                </span>
                                            </div>
                                        </a>
                                    </div> */}
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
                                                <span className="dropdown-label-3">
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
                                    <div className="voucher-wallet-section">
                                        <div className="voucher-wallet-title">
                                            Kho Voucher
                                        </div>
                                        <div className="voucher-wallet-links">
                                            <div className="voucher-wallet-link-item">
                                                <a
                                                    href="https://shopee.vn/ma-giam-gia"
                                                    className="voucher-wallet-link"
                                                >
                                                    Tìm thêm voucher
                                                </a>
                                            </div>
                                            <div className="voucher-wallet-link-item">
                                                <a
                                                    className="voucher-wallet-link"
                                                    href="/user/voucher-wallet?page=history"
                                                >
                                                    Xem lịch sử voucher
                                                </a>
                                            </div>
                                            <div className="voucher-wallet-link-item-">
                                                <a
                                                    className="voucher-wallet-link-1 more-info"
                                                    href="https://help.shopee.vn/vn/s/article/T%E1%BA%A0i-sao-t%C3%B4i-kh%C3%B4ng-d%C3%B9ng-%C4%91%C6%B0%E1%BB%A3c-m%C3%A3-gi%E1%BA%A3m-gi%C3%A1-1542942386648"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Tìm hiểu
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="voucher-wallet-section-code">
                                        <div className="voucher-code-section">
                                            <div className="voucher-code-title">
                                                Mã Voucher
                                            </div>
                                            <div className="voucher-code-input-wrapper">
                                                <div className="voucher-code-input-container">
                                                    <input
                                                        type="text"
                                                        placeholder="Nhập mã voucher tại đây"
                                                        maxlength="255"
                                                        value=""
                                                        className="voucher-code-input"
                                                    />
                                                </div>
                                            </div>
                                            <button
                                                disabled
                                                className="voucher-code-save-button"
                                            >
                                                Lưu
                                            </button>
                                        </div>
                                    </div>
                                    <div className="voucher-wallet-code-">
                                        <section
                                            className="tabs-container"
                                            role="tablist"
                                        >
                                            <h2 className="sr-only">Tabs</h2>
                                            <a
                                                className={`tab-item ${
                                                    activeTab === "tab-id-all"
                                                        ? "active"
                                                        : ""
                                                }`}
                                                title="Tất cả"
                                                role="tab"
                                                aria-selected={
                                                    activeTab === "tab-id-all"
                                                }
                                                aria-controls="panel-id-all"
                                                id="tab-id-all"
                                                href="/user/purchase/?type=6"
                                                onClick={(e) =>
                                                    handleTabClick(
                                                        e,
                                                        "tab-id-all"
                                                    )
                                                }
                                            >
                                                <span className="tab-label">
                                                    Tất cả (10)
                                                </span>
                                            </a>
                                            <a
                                                className={`tab-item ${
                                                    activeTab ===
                                                    "tab-id-pending"
                                                        ? "active"
                                                        : ""
                                                }`}
                                                title="Chờ thanh toán"
                                                role="tab"
                                                aria-selected={
                                                    activeTab ===
                                                    "tab-id-pending"
                                                }
                                                aria-controls="panel-id-pending"
                                                id="tab-id-pending"
                                                href="/user/purchase/?type=9"
                                                onClick={(e) =>
                                                    handleTabClick(
                                                        e,
                                                        "tab-id-pending"
                                                    )
                                                }
                                            >
                                                <span className="tab-label">
                                                    Shopee (10)
                                                </span>
                                            </a>
                                            <a
                                                className={`tab-item ${
                                                    activeTab ===
                                                    "tab-id-shipping"
                                                        ? "active"
                                                        : ""
                                                }`}
                                                title="Vận chuyển"
                                                role="tab"
                                                aria-selected={
                                                    activeTab ===
                                                    "tab-id-shipping"
                                                }
                                                aria-controls="panel-id-shipping"
                                                id="tab-id-shipping"
                                                href="/user/purchase/?type=7"
                                                onClick={(e) =>
                                                    handleTabClick(
                                                        e,
                                                        "tab-id-shipping"
                                                    )
                                                }
                                            >
                                                <span className="tab-label">
                                                    Shop (0)
                                                </span>
                                            </a>
                                            <a
                                                className={`tab-item ${
                                                    activeTab ===
                                                    "tab-id-awaiting"
                                                        ? "active"
                                                        : ""
                                                }`}
                                                title="Chờ giao hàng"
                                                role="tab"
                                                aria-selected={
                                                    activeTab ===
                                                    "tab-id-awaiting"
                                                }
                                                aria-controls="panel-id-awaiting"
                                                id="tab-id-awaiting"
                                                href="/user/purchase/?type=8"
                                                onClick={(e) =>
                                                    handleTabClick(
                                                        e,
                                                        "tab-id-awaiting"
                                                    )
                                                }
                                            >
                                                <span className="tab-label">
                                                    Nạp thẻ & Dịch vụ (0)
                                                </span>
                                            </a>
                                            <a
                                                className={`tab-item ${
                                                    activeTab ===
                                                    "tab-id-completed"
                                                        ? "active"
                                                        : ""
                                                }`}
                                                title="Hoàn thành"
                                                role="tab"
                                                aria-selected={
                                                    activeTab ===
                                                    "tab-id-completed"
                                                }
                                                aria-controls="panel-id-completed"
                                                id="tab-id-completed"
                                                href="/user/purchase/?type=3"
                                                onClick={(e) =>
                                                    handleTabClick(
                                                        e,
                                                        "tab-id-completed"
                                                    )
                                                }
                                            >
                                                <span className="tab-label">
                                                    Scan & Pay (0)
                                                </span>
                                            </a>
                                            <a
                                                className={`tab-item ${
                                                    activeTab ===
                                                    "tab-id-canceled"
                                                        ? "active"
                                                        : ""
                                                }`}
                                                title="Đã hủy"
                                                role="tab"
                                                aria-selected={
                                                    activeTab ===
                                                    "tab-id-canceled"
                                                }
                                                aria-controls="panel-id-canceled"
                                                id="tab-id-canceled"
                                                href="/user/purchase/?type=4"
                                                onClick={(e) =>
                                                    handleTabClick(
                                                        e,
                                                        "tab-id-canceled"
                                                    )
                                                }
                                            >
                                                <span className="tab-label">
                                                    Dịch vụ Tài chính (0)
                                                </span>
                                            </a>
                                            <a
                                                className={`tab-item ${
                                                    activeTab ===
                                                    "tab-id-returned"
                                                        ? "active"
                                                        : ""
                                                }`}
                                                title="Trả hàng/Hoàn tiền"
                                                role="tab"
                                                aria-selected={
                                                    activeTab ===
                                                    "tab-id-returned"
                                                }
                                                aria-controls="panel-id-returned"
                                                id="tab-id-returned"
                                                href="/user/purchase/?type=12"
                                                onClick={(e) =>
                                                    handleTabClick(
                                                        e,
                                                        "tab-id-returned"
                                                    )
                                                }
                                            >
                                                <span className="tab-label">
                                                    Từ Đối Tác (0)
                                                </span>
                                            </a>
                                        </section>

                                        <div id="tab-content">
                                            <div
                                                id="panel-id-all"
                                                className={`tab-content ${
                                                    activeTab === "tab-id-all"
                                                        ? "active"
                                                        : ""
                                                }`}
                                            >
                                                <div>
                                                    <div className="vouchers-wallet-contai">
                                                        <div className="voucher-card">
                                                            <div className="voucher-left">
                                                                <img
                                                                    className="voucher-logo"
                                                                    src="https://down-vn.img.susercontent.com/file/e6a3b7beffa95ca492926978d5235f79"
                                                                    alt="Logo"
                                                                />
                                                                <a
                                                                    className="voucher-logo-text"
                                                                    href="a"
                                                                >
                                                                    SHOPEE
                                                                </a>
                                                            </div>
                                                            <div className="voucher-right">
                                                                <div className="voucher-header">
                                                                    <div className="voucher-title">
                                                                        Giảm 15%
                                                                        Giảm tối
                                                                        đa ₫200k
                                                                    </div>
                                                                    <div className="voucher-subtitle">
                                                                        Đơn Tối
                                                                        Thiểu
                                                                        ₫1tr
                                                                    </div>
                                                                </div>
                                                                <div className="voucher-details">
                                                                    <div className="voucher-expiry">
                                                                        Có hiệu
                                                                        lực sau:
                                                                        2 ngày
                                                                    </div>
                                                                    <a
                                                                        className="voucher-conditions"
                                                                        href="a"
                                                                    >
                                                                        Điều
                                                                        Kiện
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="voucher-action">
                                                                <button className="voucher-button">
                                                                    Dùng ngay
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="voucher-card">
                                                            <div className="voucher-left">
                                                                <img
                                                                    className="voucher-logo"
                                                                    src="https://down-vn.img.susercontent.com/file/sg-11134004-7qved-lepkveiufff6f9"
                                                                    alt="Logo"
                                                                />
                                                                <a
                                                                    className="voucher-logo-text"
                                                                    href="a"
                                                                >
                                                                    Sắc đẹp
                                                                </a>
                                                            </div>
                                                            <div className="voucher-right">
                                                                <div className="voucher-header">
                                                                    <div className="voucher-title">
                                                                        Giảm 10%
                                                                        Giảm tối
                                                                        đa ₫120k
                                                                    </div>
                                                                    <div className="voucher-subtitle">
                                                                        Đơn Tối
                                                                        Thiểu
                                                                        ₫250k
                                                                    </div>
                                                                </div>
                                                                <div className="voucher-details">
                                                                    <div className="voucher-expiry">
                                                                        Có hiệu
                                                                        lực sau:
                                                                        8 giờ
                                                                    </div>
                                                                    <a
                                                                        className="voucher-conditions"
                                                                        href="a"
                                                                    >
                                                                        Điều
                                                                        Kiện
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="voucher-action">
                                                                <button className="voucher-button">
                                                                    Dùng ngay
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="vouchers-wallet-contai">
                                                        <div className="voucher-card">
                                                            <div className="voucher-left">
                                                                <img
                                                                    className="voucher-logo"
                                                                    src="https://down-vn.img.susercontent.com/file/vn-11134004-7r98o-lrr36gtsbogpf6"
                                                                    alt="Logo"
                                                                />
                                                                <a
                                                                    className="voucher-logo-text"
                                                                    href="a"
                                                                >
                                                                    VIDEO X HÀNG
                                                                    MỚI VỀ
                                                                </a>
                                                            </div>
                                                            <div className="voucher-right">
                                                                <div className="voucher-header">
                                                                    <div className="voucher-title">
                                                                        Giảm 15%
                                                                        Giảm tối
                                                                        đa ₫200k
                                                                    </div>
                                                                    <div className="voucher-subtitle">
                                                                        Đơn Tối
                                                                        Thiểu
                                                                        ₫50k
                                                                    </div>
                                                                </div>
                                                                <div className="voucher-details">
                                                                    <div className="voucher-info">
                                                                        Chỉ có
                                                                        trên
                                                                        Video
                                                                    </div>
                                                                    <div className="voucher-expiry">
                                                                        Có hiệu
                                                                        lực sau:
                                                                        1 ngày
                                                                    </div>
                                                                    <a
                                                                        className="voucher-conditions"
                                                                        href="a"
                                                                    >
                                                                        Điều
                                                                        Kiện
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="voucher-action">
                                                                <button className="voucher-button">
                                                                    Dùng ngay
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="voucher-card">
                                                            <div className="voucher-left">
                                                                <img
                                                                    className="voucher-logo"
                                                                    src="https://down-vn.img.susercontent.com/file/e6a3b7beffa95ca492926978d5235f79"
                                                                    alt="Logo"
                                                                />
                                                                <a
                                                                    className="voucher-logo-text"
                                                                    href="a"
                                                                >
                                                                    SHOPEE
                                                                </a>
                                                            </div>
                                                            <div className="voucher-right">
                                                                <div className="voucher-header">
                                                                    <div className="voucher-title">
                                                                        Giảm 15%
                                                                        Giảm tối
                                                                        đa ₫200k
                                                                    </div>
                                                                    <div className="voucher-subtitle">
                                                                        Đơn Tối
                                                                        Thiểu
                                                                        ₫50k
                                                                    </div>
                                                                </div>
                                                                <div className="voucher-details">
                                                                    <div className="voucher-info">
                                                                        Chỉ có
                                                                        trên
                                                                        Video
                                                                    </div>
                                                                    <div className="voucher-expiry">
                                                                        Có hiệu
                                                                        lực sau:
                                                                        1 ngày
                                                                    </div>
                                                                    <a
                                                                        className="voucher-conditions"
                                                                        href="a"
                                                                    >
                                                                        Điều
                                                                        Kiện
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="voucher-action">
                                                                <button className="voucher-button">
                                                                    Dùng ngay
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="vouchers-wallet-contai">
                                                        <div className="voucher-card">
                                                            <div className="voucher-left">
                                                                <img
                                                                    className="voucher-logo"
                                                                    src="https://down-vn.img.susercontent.com/file/vn-11134004-7r98o-lrr36gtsbogpf6"
                                                                    alt="Logo"
                                                                />
                                                                <a
                                                                    className="voucher-logo-text"
                                                                    href="a"
                                                                >
                                                                    VIDEO X HÀNG
                                                                    MỚI VỀ
                                                                </a>
                                                            </div>
                                                            <div className="voucher-right">
                                                                <div className="voucher-header">
                                                                    <div className="voucher-title">
                                                                        Giảm 15%
                                                                        Giảm tối
                                                                        đa ₫200k
                                                                    </div>
                                                                    <div className="voucher-subtitle">
                                                                        Đơn Tối
                                                                        Thiểu
                                                                        ₫50k
                                                                    </div>
                                                                </div>
                                                                <div className="voucher-details">
                                                                    <div className="voucher-info">
                                                                        Chỉ có
                                                                        trên
                                                                        Video
                                                                    </div>
                                                                    <div className="voucher-expiry">
                                                                        Có hiệu
                                                                        lực sau:
                                                                        1 ngày
                                                                    </div>
                                                                    <a
                                                                        className="voucher-conditions"
                                                                        href="a"
                                                                    >
                                                                        Điều
                                                                        Kiện
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="voucher-action">
                                                                <button className="voucher-button">
                                                                    Dùng ngay
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="voucher-card">
                                                            <div className="voucher-left">
                                                                <img
                                                                    className="voucher-logo"
                                                                    src="https://down-vn.img.susercontent.com/file/vn-11134004-7r98o-lrr36gtsbogpf6"
                                                                    alt="Logo"
                                                                />
                                                                <a
                                                                    className="voucher-logo-text"
                                                                    href="a"
                                                                >
                                                                    VIDEO X HÀNG
                                                                    MỚI VỀ
                                                                </a>
                                                            </div>
                                                            <div className="voucher-right">
                                                                <div className="voucher-header">
                                                                    <div className="voucher-title">
                                                                        Giảm 15%
                                                                        Giảm tối
                                                                        đa ₫200k
                                                                    </div>
                                                                    <div className="voucher-subtitle">
                                                                        Đơn Tối
                                                                        Thiểu
                                                                        ₫50k
                                                                    </div>
                                                                </div>
                                                                <div className="voucher-details">
                                                                    <div className="voucher-info">
                                                                        Chỉ có
                                                                        trên
                                                                        Video
                                                                    </div>
                                                                    <div className="voucher-expiry">
                                                                        Có hiệu
                                                                        lực sau:
                                                                        1 ngày
                                                                    </div>
                                                                    <a
                                                                        className="voucher-conditions"
                                                                        href="a"
                                                                    >
                                                                        Điều
                                                                        Kiện
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="voucher-action">
                                                                <button className="voucher-button">
                                                                    Dùng ngay
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="vouchers-wallet-contai">
                                                        <div className="voucher-card">
                                                            <div className="voucher-left">
                                                                <img
                                                                    className="voucher-logo"
                                                                    src="https://down-vn.img.susercontent.com/file/vn-11134004-7r98o-lrr36gtsbogpf6"
                                                                    alt="Logo"
                                                                />
                                                                <a
                                                                    className="voucher-logo-text"
                                                                    href="a"
                                                                >
                                                                    VIDEO X HÀNG
                                                                    MỚI VỀ
                                                                </a>
                                                            </div>
                                                            <div className="voucher-right">
                                                                <div className="voucher-header">
                                                                    <div className="voucher-title">
                                                                        Giảm 15%
                                                                        Giảm tối
                                                                        đa ₫200k
                                                                    </div>
                                                                    <div className="voucher-subtitle">
                                                                        Đơn Tối
                                                                        Thiểu
                                                                        ₫50k
                                                                    </div>
                                                                </div>
                                                                <div className="voucher-details">
                                                                    <div className="voucher-info">
                                                                        Chỉ có
                                                                        trên
                                                                        Video
                                                                    </div>
                                                                    <div className="voucher-expiry">
                                                                        Có hiệu
                                                                        lực sau:
                                                                        1 ngày
                                                                    </div>
                                                                    <a
                                                                        className="voucher-conditions"
                                                                        href="a"
                                                                    >
                                                                        Điều
                                                                        Kiện
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="voucher-action">
                                                                <button className="voucher-button">
                                                                    Dùng ngay
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="voucher-card">
                                                            <div className="voucher-left">
                                                                <img
                                                                    className="voucher-logo"
                                                                    src="https://down-vn.img.susercontent.com/file/vn-11134004-7r98o-lrr36gtsbogpf6"
                                                                    alt="Logo"
                                                                />
                                                                <a
                                                                    className="voucher-logo-text"
                                                                    href="a"
                                                                >
                                                                    VIDEO X HÀNG
                                                                    MỚI VỀ
                                                                </a>
                                                            </div>
                                                            <div className="voucher-right">
                                                                <div className="voucher-header">
                                                                    <div className="voucher-title">
                                                                        Giảm 15%
                                                                        Giảm tối
                                                                        đa ₫200k
                                                                    </div>
                                                                    <div className="voucher-subtitle">
                                                                        Đơn Tối
                                                                        Thiểu
                                                                        ₫50k
                                                                    </div>
                                                                </div>
                                                                <div className="voucher-details">
                                                                    <div className="voucher-info">
                                                                        Chỉ có
                                                                        trên
                                                                        Video
                                                                    </div>
                                                                    <div className="voucher-expiry">
                                                                        Có hiệu
                                                                        lực sau:
                                                                        1 ngày
                                                                    </div>
                                                                    <a
                                                                        className="voucher-conditions"
                                                                        href="a"
                                                                    >
                                                                        Điều
                                                                        Kiện
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="voucher-action">
                                                                <button className="voucher-button">
                                                                    Dùng ngay
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="vouchers-wallet-contai">
                                                        <div className="voucher-card">
                                                            <div className="voucher-left">
                                                                <img
                                                                    className="voucher-logo"
                                                                    src="https://down-vn.img.susercontent.com/file/vn-11134004-7r98o-lrr36gtsbogpf6"
                                                                    alt="Logo"
                                                                />
                                                                <a
                                                                    className="voucher-logo-text"
                                                                    href="a"
                                                                >
                                                                    VIDEO X HÀNG
                                                                    MỚI VỀ
                                                                </a>
                                                            </div>
                                                            <div className="voucher-right">
                                                                <div className="voucher-header">
                                                                    <div className="voucher-title">
                                                                        Giảm 15%
                                                                        Giảm tối
                                                                        đa ₫200k
                                                                    </div>
                                                                    <div className="voucher-subtitle">
                                                                        Đơn Tối
                                                                        Thiểu
                                                                        ₫50k
                                                                    </div>
                                                                </div>
                                                                <div className="voucher-details">
                                                                    <div className="voucher-info">
                                                                        Chỉ có
                                                                        trên
                                                                        Video
                                                                    </div>
                                                                    <div className="voucher-expiry">
                                                                        Có hiệu
                                                                        lực sau:
                                                                        1 ngày
                                                                    </div>
                                                                    <a
                                                                        className="voucher-conditions"
                                                                        href="a"
                                                                    >
                                                                        Điều
                                                                        Kiện
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="voucher-action">
                                                                <button className="voucher-button">
                                                                    Dùng ngay
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="voucher-card">
                                                            <div className="voucher-left">
                                                                <img
                                                                    className="voucher-logo"
                                                                    src="https://down-vn.img.susercontent.com/file/vn-11134004-7r98o-lrr36gtsbogpf6"
                                                                    alt="Logo"
                                                                />
                                                                <a
                                                                    className="voucher-logo-text"
                                                                    href="a"
                                                                >
                                                                    VIDEO X HÀNG
                                                                    MỚI VỀ
                                                                </a>
                                                            </div>
                                                            <div className="voucher-right">
                                                                <div className="voucher-header">
                                                                    <div className="voucher-title">
                                                                        Giảm 15%
                                                                        Giảm tối
                                                                        đa ₫200k
                                                                    </div>
                                                                    <div className="voucher-subtitle">
                                                                        Đơn Tối
                                                                        Thiểu
                                                                        ₫50k
                                                                    </div>
                                                                </div>
                                                                <div className="voucher-details">
                                                                    <div className="voucher-info">
                                                                        Chỉ có
                                                                        trên
                                                                        Video
                                                                    </div>
                                                                    <div className="voucher-expiry">
                                                                        Có hiệu
                                                                        lực sau:
                                                                        1 ngày
                                                                    </div>
                                                                    <a
                                                                        className="voucher-conditions"
                                                                        href="a"
                                                                    >
                                                                        Điều
                                                                        Kiện
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="voucher-action">
                                                                <button className="voucher-button">
                                                                    Dùng ngay
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                id="panel-id-pending"
                                                className={`tab-content ${
                                                    activeTab ===
                                                    "tab-id-pending"
                                                        ? "active"
                                                        : ""
                                                }`}
                                            >
                                                <div>
                                                    <div className="vouchers-wallet-contai">
                                                        <div className="voucher-card">
                                                            <div className="voucher-left">
                                                                <img
                                                                    className="voucher-logo"
                                                                    src="https://down-vn.img.susercontent.com/file/e6a3b7beffa95ca492926978d5235f79"
                                                                    alt="Logo"
                                                                />
                                                                <a
                                                                    className="voucher-logo-text"
                                                                    href="a"
                                                                >
                                                                    SHOPEE
                                                                </a>
                                                            </div>
                                                            <div className="voucher-right">
                                                                <div className="voucher-header">
                                                                    <div className="voucher-title">
                                                                        Giảm 15%
                                                                        Giảm tối
                                                                        đa ₫200k
                                                                    </div>
                                                                    <div className="voucher-subtitle">
                                                                        Đơn Tối
                                                                        Thiểu
                                                                        ₫1tr
                                                                    </div>
                                                                </div>
                                                                <div className="voucher-details">
                                                                    <div className="voucher-expiry">
                                                                        Có hiệu
                                                                        lực sau:
                                                                        2 ngày
                                                                    </div>
                                                                    <a
                                                                        className="voucher-conditions"
                                                                        href="a"
                                                                    >
                                                                        Điều
                                                                        Kiện
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="voucher-action">
                                                                <button className="voucher-button">
                                                                    Dùng ngay
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="voucher-card">
                                                            <div className="voucher-left">
                                                                <img
                                                                    className="voucher-logo"
                                                                    src="https://down-vn.img.susercontent.com/file/sg-11134004-7qved-lepkveiufff6f9"
                                                                    alt="Logo"
                                                                />
                                                                <a
                                                                    className="voucher-logo-text"
                                                                    href="a"
                                                                >
                                                                    Sắc đẹp
                                                                </a>
                                                            </div>
                                                            <div className="voucher-right">
                                                                <div className="voucher-header">
                                                                    <div className="voucher-title">
                                                                        Giảm 10%
                                                                        Giảm tối
                                                                        đa ₫120k
                                                                    </div>
                                                                    <div className="voucher-subtitle">
                                                                        Đơn Tối
                                                                        Thiểu
                                                                        ₫250k
                                                                    </div>
                                                                </div>
                                                                <div className="voucher-details">
                                                                    <div className="voucher-expiry">
                                                                        Có hiệu
                                                                        lực sau:
                                                                        8 giờ
                                                                    </div>
                                                                    <a
                                                                        className="voucher-conditions"
                                                                        href="a"
                                                                    >
                                                                        Điều
                                                                        Kiện
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="voucher-action">
                                                                <button className="voucher-button">
                                                                    Dùng ngay
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="vouchers-wallet-contai">
                                                        <div className="voucher-card">
                                                            <div className="voucher-left">
                                                                <img
                                                                    className="voucher-logo"
                                                                    src="https://down-vn.img.susercontent.com/file/vn-11134004-7r98o-lrr36gtsbogpf6"
                                                                    alt="Logo"
                                                                />
                                                                <a
                                                                    className="voucher-logo-text"
                                                                    href="a"
                                                                >
                                                                    VIDEO X HÀNG
                                                                    MỚI VỀ
                                                                </a>
                                                            </div>
                                                            <div className="voucher-right">
                                                                <div className="voucher-header">
                                                                    <div className="voucher-title">
                                                                        Giảm 15%
                                                                        Giảm tối
                                                                        đa ₫200k
                                                                    </div>
                                                                    <div className="voucher-subtitle">
                                                                        Đơn Tối
                                                                        Thiểu
                                                                        ₫50k
                                                                    </div>
                                                                </div>
                                                                <div className="voucher-details">
                                                                    <div className="voucher-info">
                                                                        Chỉ có
                                                                        trên
                                                                        Video
                                                                    </div>
                                                                    <div className="voucher-expiry">
                                                                        Có hiệu
                                                                        lực sau:
                                                                        1 ngày
                                                                    </div>
                                                                    <a
                                                                        className="voucher-conditions"
                                                                        href="a"
                                                                    >
                                                                        Điều
                                                                        Kiện
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="voucher-action">
                                                                <button className="voucher-button">
                                                                    Dùng ngay
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="voucher-card">
                                                            <div className="voucher-left">
                                                                <img
                                                                    className="voucher-logo"
                                                                    src="https://down-vn.img.susercontent.com/file/e6a3b7beffa95ca492926978d5235f79"
                                                                    alt="Logo"
                                                                />
                                                                <a
                                                                    className="voucher-logo-text"
                                                                    href="a"
                                                                >
                                                                    SHOPEE
                                                                </a>
                                                            </div>
                                                            <div className="voucher-right">
                                                                <div className="voucher-header">
                                                                    <div className="voucher-title">
                                                                        Giảm 15%
                                                                        Giảm tối
                                                                        đa ₫200k
                                                                    </div>
                                                                    <div className="voucher-subtitle">
                                                                        Đơn Tối
                                                                        Thiểu
                                                                        ₫50k
                                                                    </div>
                                                                </div>
                                                                <div className="voucher-details">
                                                                    <div className="voucher-info">
                                                                        Chỉ có
                                                                        trên
                                                                        Video
                                                                    </div>
                                                                    <div className="voucher-expiry">
                                                                        Có hiệu
                                                                        lực sau:
                                                                        1 ngày
                                                                    </div>
                                                                    <a
                                                                        className="voucher-conditions"
                                                                        href="a"
                                                                    >
                                                                        Điều
                                                                        Kiện
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="voucher-action">
                                                                <button className="voucher-button">
                                                                    Dùng ngay
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="vouchers-wallet-contai">
                                                        <div className="voucher-card">
                                                            <div className="voucher-left">
                                                                <img
                                                                    className="voucher-logo"
                                                                    src="https://down-vn.img.susercontent.com/file/vn-11134004-7r98o-lrr36gtsbogpf6"
                                                                    alt="Logo"
                                                                />
                                                                <a
                                                                    className="voucher-logo-text"
                                                                    href="a"
                                                                >
                                                                    VIDEO X HÀNG
                                                                    MỚI VỀ
                                                                </a>
                                                            </div>
                                                            <div className="voucher-right">
                                                                <div className="voucher-header">
                                                                    <div className="voucher-title">
                                                                        Giảm 15%
                                                                        Giảm tối
                                                                        đa ₫200k
                                                                    </div>
                                                                    <div className="voucher-subtitle">
                                                                        Đơn Tối
                                                                        Thiểu
                                                                        ₫50k
                                                                    </div>
                                                                </div>
                                                                <div className="voucher-details">
                                                                    <div className="voucher-info">
                                                                        Chỉ có
                                                                        trên
                                                                        Video
                                                                    </div>
                                                                    <div className="voucher-expiry">
                                                                        Có hiệu
                                                                        lực sau:
                                                                        1 ngày
                                                                    </div>
                                                                    <a
                                                                        className="voucher-conditions"
                                                                        href="a"
                                                                    >
                                                                        Điều
                                                                        Kiện
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="voucher-action">
                                                                <button className="voucher-button">
                                                                    Dùng ngay
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="voucher-card">
                                                            <div className="voucher-left">
                                                                <img
                                                                    className="voucher-logo"
                                                                    src="https://down-vn.img.susercontent.com/file/vn-11134004-7r98o-lrr36gtsbogpf6"
                                                                    alt="Logo"
                                                                />
                                                                <a
                                                                    className="voucher-logo-text"
                                                                    href="a"
                                                                >
                                                                    VIDEO X HÀNG
                                                                    MỚI VỀ
                                                                </a>
                                                            </div>
                                                            <div className="voucher-right">
                                                                <div className="voucher-header">
                                                                    <div className="voucher-title">
                                                                        Giảm 15%
                                                                        Giảm tối
                                                                        đa ₫200k
                                                                    </div>
                                                                    <div className="voucher-subtitle">
                                                                        Đơn Tối
                                                                        Thiểu
                                                                        ₫50k
                                                                    </div>
                                                                </div>
                                                                <div className="voucher-details">
                                                                    <div className="voucher-info">
                                                                        Chỉ có
                                                                        trên
                                                                        Video
                                                                    </div>
                                                                    <div className="voucher-expiry">
                                                                        Có hiệu
                                                                        lực sau:
                                                                        1 ngày
                                                                    </div>
                                                                    <a
                                                                        className="voucher-conditions"
                                                                        href="a"
                                                                    >
                                                                        Điều
                                                                        Kiện
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="voucher-action">
                                                                <button className="voucher-button">
                                                                    Dùng ngay
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="vouchers-wallet-contai">
                                                        <div className="voucher-card">
                                                            <div className="voucher-left">
                                                                <img
                                                                    className="voucher-logo"
                                                                    src="https://down-vn.img.susercontent.com/file/vn-11134004-7r98o-lrr36gtsbogpf6"
                                                                    alt="Logo"
                                                                />
                                                                <a
                                                                    className="voucher-logo-text"
                                                                    href="a"
                                                                >
                                                                    VIDEO X HÀNG
                                                                    MỚI VỀ
                                                                </a>
                                                            </div>
                                                            <div className="voucher-right">
                                                                <div className="voucher-header">
                                                                    <div className="voucher-title">
                                                                        Giảm 15%
                                                                        Giảm tối
                                                                        đa ₫200k
                                                                    </div>
                                                                    <div className="voucher-subtitle">
                                                                        Đơn Tối
                                                                        Thiểu
                                                                        ₫50k
                                                                    </div>
                                                                </div>
                                                                <div className="voucher-details">
                                                                    <div className="voucher-info">
                                                                        Chỉ có
                                                                        trên
                                                                        Video
                                                                    </div>
                                                                    <div className="voucher-expiry">
                                                                        Có hiệu
                                                                        lực sau:
                                                                        1 ngày
                                                                    </div>
                                                                    <a
                                                                        className="voucher-conditions"
                                                                        href="a"
                                                                    >
                                                                        Điều
                                                                        Kiện
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="voucher-action">
                                                                <button className="voucher-button">
                                                                    Dùng ngay
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="voucher-card">
                                                            <div className="voucher-left">
                                                                <img
                                                                    className="voucher-logo"
                                                                    src="https://down-vn.img.susercontent.com/file/vn-11134004-7r98o-lrr36gtsbogpf6"
                                                                    alt="Logo"
                                                                />
                                                                <a
                                                                    className="voucher-logo-text"
                                                                    href="a"
                                                                >
                                                                    VIDEO X HÀNG
                                                                    MỚI VỀ
                                                                </a>
                                                            </div>
                                                            <div className="voucher-right">
                                                                <div className="voucher-header">
                                                                    <div className="voucher-title">
                                                                        Giảm 15%
                                                                        Giảm tối
                                                                        đa ₫200k
                                                                    </div>
                                                                    <div className="voucher-subtitle">
                                                                        Đơn Tối
                                                                        Thiểu
                                                                        ₫50k
                                                                    </div>
                                                                </div>
                                                                <div className="voucher-details">
                                                                    <div className="voucher-info">
                                                                        Chỉ có
                                                                        trên
                                                                        Video
                                                                    </div>
                                                                    <div className="voucher-expiry">
                                                                        Có hiệu
                                                                        lực sau:
                                                                        1 ngày
                                                                    </div>
                                                                    <a
                                                                        className="voucher-conditions"
                                                                        href="a"
                                                                    >
                                                                        Điều
                                                                        Kiện
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="voucher-action">
                                                                <button className="voucher-button">
                                                                    Dùng ngay
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="vouchers-wallet-contai">
                                                        <div className="voucher-card">
                                                            <div className="voucher-left">
                                                                <img
                                                                    className="voucher-logo"
                                                                    src="https://down-vn.img.susercontent.com/file/vn-11134004-7r98o-lrr36gtsbogpf6"
                                                                    alt="Logo"
                                                                />
                                                                <a
                                                                    className="voucher-logo-text"
                                                                    href="a"
                                                                >
                                                                    VIDEO X HÀNG
                                                                    MỚI VỀ
                                                                </a>
                                                            </div>
                                                            <div className="voucher-right">
                                                                <div className="voucher-header">
                                                                    <div className="voucher-title">
                                                                        Giảm 15%
                                                                        Giảm tối
                                                                        đa ₫200k
                                                                    </div>
                                                                    <div className="voucher-subtitle">
                                                                        Đơn Tối
                                                                        Thiểu
                                                                        ₫50k
                                                                    </div>
                                                                </div>
                                                                <div className="voucher-details">
                                                                    <div className="voucher-info">
                                                                        Chỉ có
                                                                        trên
                                                                        Video
                                                                    </div>
                                                                    <div className="voucher-expiry">
                                                                        Có hiệu
                                                                        lực sau:
                                                                        1 ngày
                                                                    </div>
                                                                    <a
                                                                        className="voucher-conditions"
                                                                        href="a"
                                                                    >
                                                                        Điều
                                                                        Kiện
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="voucher-action">
                                                                <button className="voucher-button">
                                                                    Dùng ngay
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="voucher-card">
                                                            <div className="voucher-left">
                                                                <img
                                                                    className="voucher-logo"
                                                                    src="https://down-vn.img.susercontent.com/file/vn-11134004-7r98o-lrr36gtsbogpf6"
                                                                    alt="Logo"
                                                                />
                                                                <a
                                                                    className="voucher-logo-text"
                                                                    href="a"
                                                                >
                                                                    VIDEO X HÀNG
                                                                    MỚI VỀ
                                                                </a>
                                                            </div>
                                                            <div className="voucher-right">
                                                                <div className="voucher-header">
                                                                    <div className="voucher-title">
                                                                        Giảm 15%
                                                                        Giảm tối
                                                                        đa ₫200k
                                                                    </div>
                                                                    <div className="voucher-subtitle">
                                                                        Đơn Tối
                                                                        Thiểu
                                                                        ₫50k
                                                                    </div>
                                                                </div>
                                                                <div className="voucher-details">
                                                                    <div className="voucher-info">
                                                                        Chỉ có
                                                                        trên
                                                                        Video
                                                                    </div>
                                                                    <div className="voucher-expiry">
                                                                        Có hiệu
                                                                        lực sau:
                                                                        1 ngày
                                                                    </div>
                                                                    <a
                                                                        className="voucher-conditions"
                                                                        href="a"
                                                                    >
                                                                        Điều
                                                                        Kiện
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="voucher-action">
                                                                <button className="voucher-button">
                                                                    Dùng ngay
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                id="panel-id-shipping"
                                                className={`tab-content ${
                                                    activeTab ===
                                                    "tab-id-shipping"
                                                        ? "active"
                                                        : ""
                                                }`}
                                            >
                                                <div className="voucher-not-found">
                                                    <div className="voucher-content">
                                                        <div className="voucher-image-container">
                                                            <img
                                                                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/voucher/0e8c07c8449d8d509f72.png"
                                                                className="voucher-image"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="voucher-message">
                                                            <span className="no-voucher-text">
                                                                Không có voucher
                                                                phù hợp
                                                            </span>
                                                        </div>
                                                        <div className="voucher-suggestion">
                                                            <span className="suggestion-text">
                                                                Tìm thêm voucher
                                                                để lưu vào đây
                                                                nhé!
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <button className="find-voucher-button">
                                                        <span className="find-voucher-text">
                                                            Tìm thêm voucher
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div
                                                id="panel-id-awaiting"
                                                className={`tab-content ${
                                                    activeTab ===
                                                    "tab-id-awaiting"
                                                        ? "active"
                                                        : ""
                                                }`}
                                            >
                                                <div className="voucher-not-found">
                                                    <div className="voucher-content">
                                                        <div className="voucher-image-container">
                                                            <img
                                                                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/voucher/0e8c07c8449d8d509f72.png"
                                                                className="voucher-image"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="voucher-message">
                                                            <span className="no-voucher-text">
                                                                Không có voucher
                                                                phù hợp
                                                            </span>
                                                        </div>
                                                        <div className="voucher-suggestion">
                                                            <span className="suggestion-text">
                                                                Tìm thêm voucher
                                                                để lưu vào đây
                                                                nhé!
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <button className="find-voucher-button">
                                                        <span className="find-voucher-text">
                                                            Tìm thêm voucher
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div
                                                id="panel-id-completed"
                                                className={`tab-content ${
                                                    activeTab ===
                                                    "tab-id-completed"
                                                        ? "active"
                                                        : ""
                                                }`}
                                            >
                                                <div className="voucher-not-found">
                                                    <div className="voucher-content">
                                                        <div className="voucher-image-container">
                                                            <img
                                                                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/voucher/0e8c07c8449d8d509f72.png"
                                                                className="voucher-image"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="voucher-message">
                                                            <span className="no-voucher-text">
                                                                Không có voucher
                                                                phù hợp
                                                            </span>
                                                        </div>
                                                        <div className="voucher-suggestion">
                                                            <span className="suggestion-text">
                                                                Tìm thêm voucher
                                                                để lưu vào đây
                                                                nhé!
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <button className="find-voucher-button">
                                                        <span className="find-voucher-text">
                                                            Tìm thêm voucher
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div
                                                id="panel-id-canceled"
                                                className={`tab-content ${
                                                    activeTab ===
                                                    "tab-id-canceled"
                                                        ? "active"
                                                        : ""
                                                }`}
                                            >
                                                <div className="voucher-not-found">
                                                    <div className="voucher-content">
                                                        <div className="voucher-image-container">
                                                            <img
                                                                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/voucher/0e8c07c8449d8d509f72.png"
                                                                className="voucher-image"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="voucher-message">
                                                            <span className="no-voucher-text">
                                                                Không có voucher
                                                                phù hợp
                                                            </span>
                                                        </div>
                                                        <div className="voucher-suggestion">
                                                            <span className="suggestion-text">
                                                                Tìm thêm voucher
                                                                để lưu vào đây
                                                                nhé!
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <button className="find-voucher-button">
                                                        <span className="find-voucher-text">
                                                            Tìm thêm voucher
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div
                                                id="panel-id-returned"
                                                className={`tab-content ${
                                                    activeTab ===
                                                    "tab-id-returned"
                                                        ? "active"
                                                        : ""
                                                }`}
                                            >
                                                <div className="voucher-not-found">
                                                    <div className="voucher-content">
                                                        <div className="voucher-image-container">
                                                            <img
                                                                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/voucher/0e8c07c8449d8d509f72.png"
                                                                className="voucher-image"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="voucher-message">
                                                            <span className="no-voucher-text">
                                                                Không có voucher
                                                                phù hợp
                                                            </span>
                                                        </div>
                                                        <div className="voucher-suggestion">
                                                            <span className="suggestion-text">
                                                                Tìm thêm voucher
                                                                để lưu vào đây
                                                                nhé!
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <button className="find-voucher-button">
                                                        <span className="find-voucher-text">
                                                            Tìm thêm voucher
                                                        </span>
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
            </div>
        </div>
    );
}
