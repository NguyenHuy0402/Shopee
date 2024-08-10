import React from "react";
import AppUrl from "../../api/AppURL";

export default function Footer() {
    return (
        <div className="row sm-gutter main-footer-info">
            {/* import Footer Box */}
            <div className="col l-2-4 m-4 c-6">
                <h3 className="footer__heading">VỀ SHOPEE</h3>
                <ul className="footer-list">
                    <li>
                        <a
                            href="https://example.com"
                            className="footer-item-link"
                        >
                            Giới Thiệu Về Shopee Việt Nam
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://example.com"
                            className="footer-item-link"
                        >
                            Tuyển Dụng
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://example.com"
                            className="footer-item-link"
                        >
                            Điều Khoản Shopee
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://example.com"
                            className="footer-item-link"
                        >
                            Chính Sách Bảo Mật
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://example.com"
                            className="footer-item-link"
                        >
                            Chính Hãng
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://example.com"
                            className="footer-item-link"
                        >
                            Kênh Người Bán
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://example.com"
                            className="footer-item-link"
                        >
                            Flash Sales
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://example.com"
                            className="footer-item-link"
                        >
                            Chương Trình Tiếp Thị Liên Kết Shopee
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://example.com"
                            className="footer-item-link"
                        >
                            Liên Hệ Với Truyền Thông
                        </a>
                    </li>
                </ul>
            </div>
            <div className="col l-2-4 m-4 c-12 pay-and-ship">
                <div>
                    <h3 className="footer__heading">THANH TOÁN</h3>
                    <div className="footer-sale-ship">
                        <img
                            alt=""
                            src={`${AppUrl.ImageFE}/assets/img/pay/1.PNG`}
                            className="footer-item-sale-ship"
                        />
                        <img
                            alt=""
                            src={`${AppUrl.ImageFE}/assets/img/pay/2.PNG`}
                            className="footer-item-sale-ship"
                        />
                        <img
                            alt=""
                            src={`${AppUrl.ImageFE}/assets/img/pay/3.PNG`}
                            className="footer-item-sale-ship"
                        />
                        <img
                            alt=""
                            src={`${AppUrl.ImageFE}/assets/img/pay/4.PNG`}
                            className="footer-item-sale-ship"
                        />
                        <img
                            alt=""
                            src={`${AppUrl.ImageFE}/assets/img/pay/5.PNG`}
                            className="footer-item-sale-ship"
                        />
                    </div>
                </div>
                <div>
                    <h3 className="footer__heading">ĐƠN VỊ VẬN CHUYỂN</h3>
                    <div className="footer-sale-ship">
                        <img
                            alt=""
                            src={`${AppUrl.ImageFE}/assets/img/ship/1.PNG`}
                            className="footer-item-sale-ship"
                        />
                        <img
                            alt=""
                            src={`${AppUrl.ImageFE}/assets/img/ship/2.PNG`}
                            className="footer-item-sale-ship"
                        />
                        <img
                            alt=""
                            src={`${AppUrl.ImageFE}/assets/img/ship/3.PNG`}
                            className="footer-item-sale-ship"
                        />
                        <img
                            alt=""
                            src={`${AppUrl.ImageFE}/assets/img/ship/4.PNG`}
                            className="footer-item-sale-ship"
                        />
                        <img
                            alt=""
                            src={`${AppUrl.ImageFE}/assets/img/ship/5.PNG`}
                            className="footer-item-sale-ship"
                        />
                        <img
                            alt=""
                            src={`${AppUrl.ImageFE}/assets/img/ship/6.PNG`}
                            className="footer-item-sale-ship"
                        />
                        <img
                            alt=""
                            src={`${AppUrl.ImageFE}/assets/img/ship/7.PNG`}
                            className="footer-item-sale-ship"
                        />
                        <img
                            alt=""
                            src={`${AppUrl.ImageFE}/assets/img/ship/8.PNG`}
                            className="footer-item-sale-ship"
                        />
                        <img
                            alt=""
                            src={`${AppUrl.ImageFE}/assets/img/ship/9.PNG`}
                            className="footer-item-sale-ship"
                        />
                    </div>
                </div>
            </div>
            <div className="col l-2-4 m-4 c-6">
                <h3 className="footer__heading">THEO DÕI CHÚNG TÔI</h3>
                <ul className="footer-list">
                    <li>
                        <a
                            href="https://example.com"
                            className="footer-item-link footer-item-link-fb"
                        >
                            <i className="footer-item-icon fab fa-facebook-square" />
                            Facebook
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://example.com"
                            className="footer-item-link footer-item-link-is"
                        >
                            <i className="footer-item-icon fab fa-instagram-square" />
                            Instagram
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://example.com"
                            className="footer-item-link footer-item-link-li"
                        >
                            <i className="footer-item-icon fab fa-linkedin" />
                            LinkedIn
                        </a>
                    </li>
                </ul>
            </div>
            <div className="col l-2-4 m-8 c-6">
                <h3 className="footer__heading">TẢI ỨNG DỤNG SHOPEE</h3>
                <div className="footer-download">
                    <a
                        href="https://example.com"
                        className="footer-download-link"
                    >
                        <img
                            alt=""
                            src={`${AppUrl.ImageFE}/assets/img/qr/qr-code.png`}
                            className="footer-download-qr"
                        />
                    </a>
                    <div className="footer-download-app">
                        <a
                            href="https://example.com"
                            className="footer-download-link"
                        >
                            <img
                                alt=""
                                src={`${AppUrl.ImageFE}/assets/img/qr/gg-play.png`}
                                className="footer-download-app-img"
                            />
                        </a>
                        <a
                            href="https://example.com"
                            className="footer-download-link"
                        >
                            <img
                                alt=""
                                src={`${AppUrl.ImageFE}/assets/img/qr/app-store.png`}
                                className="footer-download-app-img"
                            />
                        </a>
                        <a
                            href="https://example.com"
                            className="footer-download-link"
                        >
                            <img
                                alt=""
                                src={`${AppUrl.ImageFE}/assets/img/qr/app-gallery.png`}
                                className="footer-download-app-img"
                            />
                        </a>
                        <a
                            href="https://example.com"
                            className="footer-download-link"
                        >
                            <img
                                alt=""
                                src={`${AppUrl.ImageFE}/assets/img/qr/ltp-img.png`}
                                className="footer-download-app-img"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
