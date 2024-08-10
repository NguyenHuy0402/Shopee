import React, { useEffect, useState } from "react";

export default function Purchase() {
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
                                                src="../assets/img/user.png"
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
                                    <div
                                        className="dropdown-header"
                                        onClick={toggleDropdown}
                                    >
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
                                    <div
                                        className={`dropdown-body ${
                                            isOpen ? "dropdown-body--open" : ""
                                        }`}
                                    >
                                        <div className="dropdown-menu">
                                            <a
                                                className="dropdown-item"
                                                href="/profile"
                                            >
                                                <span className="dropdown-item-text">
                                                    Hồ sơ
                                                </span>
                                            </a>
                                            <a
                                                className="dropdown-item"
                                                href="/payment"
                                            >
                                                <span className="dropdown-item-text">
                                                    Ngân hàng
                                                </span>
                                            </a>
                                            <a
                                                className="dropdown-item"
                                                href="/address"
                                            >
                                                <span className="dropdown-item-text">
                                                    Địa chỉ
                                                </span>
                                            </a>
                                            <a
                                                className="dropdown-item"
                                                href="/password"
                                            >
                                                <span className="dropdown-item-text">
                                                    Đổi mật khẩu
                                                </span>
                                            </a>
                                            <a
                                                className="dropdown-item"
                                                href="/notification/"
                                            >
                                                <span className="dropdown-item-text">
                                                    Cài đặt thông báo
                                                </span>
                                            </a>
                                            <a
                                                className="dropdown-item"
                                                href="/privacy"
                                            >
                                                <span className="dropdown-item-text">
                                                    Những thiết lập riêng tư
                                                </span>
                                            </a>
                                        </div>
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
                                                <span className="dropdown-label-3">
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
                                            href="/user/voucher-wallet"
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
                        <section className="tabs-container" role="tablist">
                            <h2 className="sr-only">Tabs</h2>
                            <a
                                className={`tab-item ${
                                    activeTab === "tab-id-all" ? "active" : ""
                                }`}
                                title="Tất cả"
                                role="tab"
                                aria-selected={activeTab === "tab-id-all"}
                                aria-controls="panel-id-all"
                                id="tab-id-all"
                                href="/user/purchase/?type=6"
                                onClick={(e) => handleTabClick(e, "tab-id-all")}
                            >
                                <span className="tab-label">Tất cả</span>
                            </a>
                            <a
                                className={`tab-item ${
                                    activeTab === "tab-id-pending"
                                        ? "active"
                                        : ""
                                }`}
                                title="Chờ thanh toán"
                                role="tab"
                                aria-selected={activeTab === "tab-id-pending"}
                                aria-controls="panel-id-pending"
                                id="tab-id-pending"
                                href="/user/purchase/?type=9"
                                onClick={(e) =>
                                    handleTabClick(e, "tab-id-pending")
                                }
                            >
                                <span className="tab-label">
                                    Chờ thanh toán
                                </span>
                            </a>
                            <a
                                className={`tab-item ${
                                    activeTab === "tab-id-shipping"
                                        ? "active"
                                        : ""
                                }`}
                                title="Vận chuyển"
                                role="tab"
                                aria-selected={activeTab === "tab-id-shipping"}
                                aria-controls="panel-id-shipping"
                                id="tab-id-shipping"
                                href="/user/purchase/?type=7"
                                onClick={(e) =>
                                    handleTabClick(e, "tab-id-shipping")
                                }
                            >
                                <span className="tab-label">Vận chuyển</span>
                            </a>
                            <a
                                className={`tab-item ${
                                    activeTab === "tab-id-awaiting"
                                        ? "active"
                                        : ""
                                }`}
                                title="Chờ giao hàng"
                                role="tab"
                                aria-selected={activeTab === "tab-id-awaiting"}
                                aria-controls="panel-id-awaiting"
                                id="tab-id-awaiting"
                                href="/user/purchase/?type=8"
                                onClick={(e) =>
                                    handleTabClick(e, "tab-id-awaiting")
                                }
                            >
                                <span className="tab-label">Chờ giao hàng</span>
                            </a>
                            <a
                                className={`tab-item ${
                                    activeTab === "tab-id-completed"
                                        ? "active"
                                        : ""
                                }`}
                                title="Hoàn thành"
                                role="tab"
                                aria-selected={activeTab === "tab-id-completed"}
                                aria-controls="panel-id-completed"
                                id="tab-id-completed"
                                href="/user/purchase/?type=3"
                                onClick={(e) =>
                                    handleTabClick(e, "tab-id-completed")
                                }
                            >
                                <span className="tab-label">Hoàn thành</span>
                            </a>
                            <a
                                className={`tab-item ${
                                    activeTab === "tab-id-canceled"
                                        ? "active"
                                        : ""
                                }`}
                                title="Đã hủy"
                                role="tab"
                                aria-selected={activeTab === "tab-id-canceled"}
                                aria-controls="panel-id-canceled"
                                id="tab-id-canceled"
                                href="/user/purchase/?type=4"
                                onClick={(e) =>
                                    handleTabClick(e, "tab-id-canceled")
                                }
                            >
                                <span className="tab-label">Đã hủy</span>
                            </a>
                            <a
                                className={`tab-item ${
                                    activeTab === "tab-id-returned"
                                        ? "active"
                                        : ""
                                }`}
                                title="Trả hàng/Hoàn tiền"
                                role="tab"
                                aria-selected={activeTab === "tab-id-returned"}
                                aria-controls="panel-id-returned"
                                id="tab-id-returned"
                                href="/user/purchase/?type=12"
                                onClick={(e) =>
                                    handleTabClick(e, "tab-id-returned")
                                }
                            >
                                <span className="tab-label">
                                    Trả hàng/Hoàn tiền
                                </span>
                            </a>
                        </section>

                        <div id="tab-content">
                            <div
                                id="panel-id-all"
                                className={`tab-content ${
                                    activeTab === "tab-id-all" ? "active" : ""
                                }`}
                            >
                                <section class="no-orders-section">
                                    <div class="no-orders-wrapper">
                                        <div class="no-orders-icon"></div>
                                        <h2 class="no-orders-message">
                                            Chưa có đơn hàng
                                        </h2>
                                    </div>
                                </section>
                            </div>
                            <div
                                id="panel-id-pending"
                                className={`tab-content ${
                                    activeTab === "tab-id-pending"
                                        ? "active"
                                        : ""
                                }`}
                            >
                                <section class="no-orders-section">
                                    <div class="no-orders-wrapper">
                                        <div class="no-orders-icon"></div>
                                        <h2 class="no-orders-message">
                                            Chưa có đơn hàng
                                        </h2>
                                    </div>
                                </section>
                            </div>
                            <div
                                id="panel-id-shipping"
                                className={`tab-content ${
                                    activeTab === "tab-id-shipping"
                                        ? "active"
                                        : ""
                                }`}
                            >
                                <section class="no-orders-section">
                                    <div class="no-orders-wrapper">
                                        <div class="no-orders-icon"></div>
                                        <h2 class="no-orders-message">
                                            Chưa có đơn hàng
                                        </h2>
                                    </div>
                                </section>
                            </div>
                            <div
                                id="panel-id-awaiting"
                                className={`tab-content ${
                                    activeTab === "tab-id-awaiting"
                                        ? "active"
                                        : ""
                                }`}
                            >
                                <section class="no-orders-section">
                                    <div class="no-orders-wrapper">
                                        <div class="no-orders-icon"></div>
                                        <h2 class="no-orders-message">
                                            Chưa có đơn hàng
                                        </h2>
                                    </div>
                                </section>
                            </div>
                            <div
                                id="panel-id-completed"
                                className={`tab-content ${
                                    activeTab === "tab-id-completed"
                                        ? "active"
                                        : ""
                                }`}
                            >
                                <section class="no-orders-section">
                                    <div class="no-orders-wrapper">
                                        <div class="no-orders-icon"></div>
                                        <h2 class="no-orders-message">
                                            Chưa có đơn hàng
                                        </h2>
                                    </div>
                                </section>
                            </div>
                            <div
                                id="panel-id-canceled"
                                className={`tab-content ${
                                    activeTab === "tab-id-canceled"
                                        ? "active"
                                        : ""
                                }`}
                            >
                                <section class="no-orders-section">
                                    <div class="no-orders-wrapper">
                                        <div class="no-orders-icon"></div>
                                        <h2 class="no-orders-message">
                                            Chưa có đơn hàng
                                        </h2>
                                    </div>
                                </section>
                            </div>
                            <div
                                id="panel-id-returned"
                                className={`tab-content ${
                                    activeTab === "tab-id-returned"
                                        ? "active"
                                        : ""
                                }`}
                            >
                                <section class="no-orders-section">
                                    <div class="no-orders-wrapper">
                                        <div class="no-orders-icon"></div>
                                        <h2 class="no-orders-message">
                                            Chưa có đơn hàng
                                        </h2>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
