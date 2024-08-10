import React, { useState, useEffect } from "react";
import AppUrl from "../../api/AppURL";

export default function AppBar() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Lấy thông tin người dùng từ localStorage
        const storedUser = localStorage.getItem("user-info");
        if (storedUser) {
            try {
                const parsedUser = JSON.parse(storedUser);
                setUser(parsedUser);
            } catch (error) {
                console.error("Error parsing user data:", error);
            }
        }
    }, []);

    // Xử lý sự kiện đăng xuất
    const handleLogout = () => {
        localStorage.removeItem("user-info");
        setUser(null);
    };

    return (
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
                        alt="QR Code"
                        src={`${AppUrl.ImageFE}/assets/img/qr/qr-code.png`}
                        className="header__qr"
                    />
                    <div className="header__apps">
                        <a
                            href="https://example.com"
                            className="header__app-link"
                        >
                            <img
                                alt="App Store"
                                src={`${AppUrl.ImageFE}/assets/img/qr/app-store.png`}
                                className="header__app-img"
                            />
                        </a>
                        <a
                            href="https://example.com"
                            className="header__app-link"
                        >
                            <img
                                alt="Google Play"
                                src={`${AppUrl.ImageFE}/assets/img/qr/gg-play.png`}
                                className="header__app-img"
                            />
                        </a>
                        <a
                            href="https://example.com"
                            className="header__app-link"
                        >
                            <img
                                alt="App Gallery"
                                src={`${AppUrl.ImageFE}/assets/img/qr/app-gallery.png`}
                                className="header__app-img"
                            />
                        </a>
                        <a
                            href="https://example.com"
                            className="header__app-link"
                        >
                            <img
                                alt="LTPImage"
                                src={`${AppUrl.ImageFE}/assets/img/qr/ltp-img.png`}
                                className="header__app-img"
                            />
                        </a>
                    </div>
                </div>
                <li className="header__nav-item">
                    Kết nối
                    <a
                        href="https://example.com"
                        className="header__nav-icon-link"
                    >
                        <i className="header__nav-icon fab fa-facebook" />
                    </a>
                    <a
                        href="https://example.com"
                        className="header__nav-icon-link"
                    >
                        <i className="header__nav-icon fab fa-instagram" />
                    </a>
                </li>
            </ul>
            <ul className="header__nav-list">
                <li className="header__nav-item header__show-note">
                    <a
                        href="/NotificationOrder"
                        className="header__nav-item-link"
                    >
                        <i className="header__nav-icon far fa-bell" />
                        Thông báo
                    </a>
                    {/* thông báo */}
                    <div className="header__notifi">
                        <header className="header__notifi-header">
                            <h3>Thông Báo Mới Nhận</h3>
                        </header>
                        <ul className="header__notifi-list">
                            {/* Các mục thông báo */}
                        </ul>
                        <footer className="header__notifi-footer">
                            <a
                                href="https://example.com"
                                className="header__notifi-footer-btn"
                            >
                                Xem tất cả
                            </a>
                        </footer>
                    </div>
                </li>
                <li className="header__nav-item">
                    <a
                        href="https://example.com"
                        className="header__nav-item-link"
                    >
                        <i className="header__nav-icon far fa-question-circle" />
                        Hỗ trợ
                    </a>
                </li>

                {!user ? (
                    <>
                        <li className="header__nav-item header__nav-item--bold header__nav-item--separate">
                            <a
                                href="/register"
                                className="header__nav-item-link"
                            >
                                Đăng ký
                            </a>
                        </li>
                        <li className="header__nav-item header__nav-item--bold">
                            <a href="/login" className="header__nav-item-link">
                                Đăng nhập
                            </a>
                        </li>
                    </>
                ) : (
                    <li className="header__nav-item header__nav-user">
                        <img
                            alt="User"
                            src={`${AppUrl.ImageFE}/assets/img/user.png`}
                            className="header__nav-user-avt"
                        />
                        <a
                            href="/profile"
                            className="header__nav-item-link header__nav-item--bold"
                        >
                            PhanThanhBinh
                        </a>
                        <button
                            onClick={handleLogout}
                            className="header__nav-item-link header__nav-item--bold"
                        >
                            Đăng xuất
                        </button>
                    </li>
                )}
            </ul>
        </nav>
    );
}
