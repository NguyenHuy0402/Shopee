import React, { useEffect, useState } from "react";

export default function FlashSale({ duration = 12 * 10 * 60 }) {
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
    // Thay 10 * 60 bằng thời gian mặc định
    const [timeLeft, setTimeLeft] = useState(duration * 1000);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 1000) {
                    clearInterval(intervalId);
                    return 0;
                }
                return prevTime - 1000;
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, [duration]);

    const formatTime = (time) => {
        const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((time % (1000 * 60)) / 1000);

        return {
            hours: String(hours).padStart(2, "0"),
            minutes: String(minutes).padStart(2, "0"),
            seconds: String(seconds).padStart(2, "0"),
        };
    };

    const { hours, minutes, seconds } = formatTime(timeLeft);

    return (
        <div className="thunghiem">
            <div className="ckthby vvLXhP">
                <div className="HmKLZN D4AtDt">
                    <div className="ea0tDj" aria-label="title Flash Sales">
                        Flash Sales
                    </div>

                    <div className="Y2LfUy sxIvTA" data-time={1723039199}>
                        <i className="far fa-clock"></i>
                        Kết thúc trong
                    </div>
                    <div className="countdown-flashsale">
                        <div className="time-flashsale" id="hours">
                            {hours}
                        </div>
                        <div className="time-flashsale" id="minutes">
                            {minutes}
                        </div>
                        <div className="time-flashsale" id="seconds">
                            {seconds}
                        </div>
                    </div>
                </div>
                <div class="container w_NNLa"></div>
                <div className="Z_qECr container">
                    <div className="image-carousel">
                        <div className="image-carousel__item-list-wrapper">
                            <ul
                                className="image-carousel__item-list"
                                style={{
                                    width: "100%",
                                    transform: "translate(0px, 0px)",
                                }}
                            >
                                <li
                                    className="image-carousel__item"
                                    style={{ padding: 0, width: "18%" }}
                                >
                                    <div data-promotionid={32859310587905}>
                                        <a
                                            className="o4H6Ui zhcDy_"
                                            href="/flash_sale?promotionId=32859310587905"
                                        >
                                            <div
                                                className="my4eAL"
                                                data-promotionid={
                                                    32859310587905
                                                }
                                            >
                                                21:00
                                            </div>
                                            <div
                                                className="D0ox6e"
                                                data-promotionid={
                                                    32859310587905
                                                }
                                            >
                                                Đang diễn ra
                                            </div>
                                        </a>
                                    </div>
                                </li>
                                <li
                                    className="image-carousel__item-"
                                    style={{ padding: 0, width: "18%" }}
                                >
                                    <div data-promotionid={32184765841411}>
                                        <a
                                            className="o4H6Ui"
                                            href="/flash_sale?promotionId=32184765841411"
                                        >
                                            <div
                                                className="my4eAL"
                                                data-promotionid={
                                                    32184765841411
                                                }
                                            >
                                                00:00
                                            </div>
                                            <div
                                                className="D0ox6e"
                                                data-promotionid={
                                                    32184765841411
                                                }
                                            >
                                                tomorrow
                                            </div>
                                        </a>
                                    </div>
                                </li>
                                <li
                                    className="image-carousel__item-"
                                    style={{ padding: 0, width: "18%" }}
                                >
                                    <div data-promotionid={32184925224960}>
                                        <a
                                            className="o4H6Ui"
                                            href="/flash_sale?promotionId=32184925224960"
                                        >
                                            <div
                                                className="my4eAL"
                                                data-promotionid={
                                                    32184925224960
                                                }
                                            >
                                                00:30
                                            </div>
                                            <div
                                                className="D0ox6e"
                                                data-promotionid={
                                                    32184925224960
                                                }
                                            >
                                                tomorrow
                                            </div>
                                        </a>
                                    </div>
                                </li>
                                <li
                                    className="image-carousel__item-"
                                    style={{ padding: 0, width: "18%" }}
                                >
                                    <div data-promotionid={32185088806913}>
                                        <a
                                            className="o4H6Ui"
                                            href="/flash_sale?promotionId=32185088806913"
                                        >
                                            <div
                                                className="my4eAL"
                                                data-promotionid={
                                                    32185088806913
                                                }
                                            >
                                                01:00
                                            </div>
                                            <div
                                                className="D0ox6e"
                                                data-promotionid={
                                                    32185088806913
                                                }
                                            >
                                                tomorrow
                                            </div>
                                        </a>
                                    </div>
                                </li>
                                <li
                                    className="image-carousel__item-"
                                    style={{ padding: 0, width: "18%" }}
                                >
                                    <div data-promotionid={32185235607556}>
                                        <a
                                            className="o4H6Ui"
                                            href="/flash_sale?promotionId=32185235607556"
                                        >
                                            <div
                                                className="my4eAL"
                                                data-promotionid={
                                                    32185235607556
                                                }
                                            >
                                                01:30
                                            </div>
                                            <div
                                                className="D0ox6e"
                                                data-promotionid={
                                                    32185235607556
                                                }
                                            >
                                                tomorrow
                                            </div>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div
                            className="carousel-arrow carousel-arrow--prev carousel-arrow--hidden"
                            role="button"
                            tabIndex={0}
                            style={{ opacity: 1, visibility: "hidden" }}
                        >
                            <svg
                                viewBox="0 0 13 20"
                                width={13}
                                height={22}
                                className="shopee-svg-icon icon-arrow-left-bold-round"
                            >
                                <path
                                    d="M11 2l-9.2832 9L11 20"
                                    strokeWidth={3}
                                    fill="none"
                                    fillRule="evenodd"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        <div
                            className="carousel-arrow carousel-arrow--next carousel-arrow--hidden"
                            role="button"
                            tabIndex={0}
                            style={{ opacity: 1, visibility: "hidden" }}
                        >
                            <svg
                                viewBox="0 0 13 20"
                                width={13}
                                height={22}
                                className="shopee-svg-icon icon-arrow-right-bold-round"
                            >
                                <path
                                    d="M2 2l9.2832 9L2 20"
                                    strokeWidth={3}
                                    fill="none"
                                    fillRule="evenodd"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flashsale-wallet-code-">
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
                        href="#panel-id-all"
                        onClick={(e) => handleTabClick(e, "tab-id-all")}
                    >
                        <span className="tab-label">Tóp sản phẩm nổi bật</span>
                    </a>
                    <a
                        className={`tab-item ${
                            activeTab === "tab-id-pending" ? "active" : ""
                        }`}
                        title="Chờ thanh toán"
                        role="tab"
                        aria-selected={activeTab === "tab-id-pending"}
                        aria-controls="panel-id-pending"
                        id="tab-id-pending"
                        href="#panel-id-pending"
                        onClick={(e) => handleTabClick(e, "tab-id-pending")}
                    >
                        <span className="tab-label">SHOPEE SIÊU RẺ</span>
                    </a>
                    <a
                        className={`tab-item ${
                            activeTab === "tab-id-shipping" ? "active" : ""
                        }`}
                        title="Vận chuyển"
                        role="tab"
                        aria-selected={activeTab === "tab-id-shipping"}
                        aria-controls="panel-id-shipping"
                        id="tab-id-shipping"
                        href="#panel-id-shipping"
                        onClick={(e) => handleTabClick(e, "tab-id-shipping")}
                    >
                        <span className="tab-label">SHOPEE CHOICE</span>
                    </a>
                    <a
                        className={`tab-item ${
                            activeTab === "tab-id-awaiting" ? "active" : ""
                        }`}
                        title="Chờ giao hàng"
                        role="tab"
                        aria-selected={activeTab === "tab-id-awaiting"}
                        aria-controls="panel-id-awaiting"
                        id="tab-id-awaiting"
                        href="#panel-id-awaiting"
                        onClick={(e) => handleTabClick(e, "tab-id-awaiting")}
                    >
                        <span className="tab-label">QUẦN ÁO THỜI TRANG</span>
                    </a>
                    <a
                        className={`tab-item ${
                            activeTab === "tab-id-completed" ? "active" : ""
                        }`}
                        title="Hoàn thành"
                        role="tab"
                        aria-selected={activeTab === "tab-id-completed"}
                        aria-controls="panel-id-completed"
                        id="tab-id-completed"
                        href="#panel-id-completed"
                        onClick={(e) => handleTabClick(e, "tab-id-completed")}
                    >
                        <span className="tab-label">DEAL GIÁ SỐC</span>
                    </a>
                    <a
                        className={`tab-item ${
                            activeTab === "tab-id-canceled" ? "active" : ""
                        }`}
                        title="Đã hủy"
                        role="tab"
                        aria-selected={activeTab === "tab-id-canceled"}
                        aria-controls="panel-id-canceled"
                        id="tab-id-canceled"
                        href="#panel-id-canceled"
                        onClick={(e) => handleTabClick(e, "tab-id-canceled")}
                    >
                        <span className="tab-label">SHOPEE STYLE</span>
                    </a>
                    <a
                        className={`tab-item ${
                            activeTab === "tab-id-returned" ? "active" : ""
                        }`}
                        title="Trả hàng/Hoàn tiền"
                        role="tab"
                        aria-selected={activeTab === "tab-id-returned"}
                        aria-controls="panel-id-returned"
                        id="tab-id-returned"
                        href="#panel-id-returned"
                        onClick={(e) => handleTabClick(e, "tab-id-returned")}
                    >
                        <span className="tab-label">THÊM *</span>
                    </a>
                </section>

                <div id="tab-content">
                    <div
                        id="panel-id-all"
                        className={`tab-content ${
                            activeTab === "tab-id-all" ? "active" : ""
                        }`}
                        role="tabpanel"
                        aria-labelledby="tab-id-all"
                    >
                        <div className="row product-top-newww">
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="row product-top-newww">
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="row product-top-newww">
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        id="panel-id-pending"
                        className={`tab-content ${
                            activeTab === "tab-id-pending" ? "active" : ""
                        }`}
                        role="tabpanel"
                        aria-labelledby="tab-id-pending"
                    >
                        <div className="row product-top-newww">
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="row product-top-newww">
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="row product-top-newww">
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        id="panel-id-shipping"
                        className={`tab-content ${
                            activeTab === "tab-id-shipping" ? "active" : ""
                        }`}
                        role="tabpanel"
                        aria-labelledby="tab-id-shipping"
                    >
                        <div className="row product-top-newww">
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="row product-top-newww">
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="row product-top-newww">
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        id="panel-id-awaiting"
                        className={`tab-content ${
                            activeTab === "tab-id-awaiting" ? "active" : ""
                        }`}
                        role="tabpanel"
                        aria-labelledby="tab-id-awaiting"
                    >
                        <div className="row product-top-newww">
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="row product-top-newww">
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="row product-top-newww">
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        id="panel-id-completed"
                        className={`tab-content ${
                            activeTab === "tab-id-completed" ? "active" : ""
                        }`}
                        role="tabpanel"
                        aria-labelledby="tab-id-completed"
                    >
                        <div className="row product-top-newww">
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="row product-top-newww">
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="row product-top-newww">
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        id="panel-id-canceled"
                        className={`tab-content ${
                            activeTab === "tab-id-canceled" ? "active" : ""
                        }`}
                        role="tabpanel"
                        aria-labelledby="tab-id-canceled"
                    >
                        <div className="row product-top-newww">
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="row product-top-newww">
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="row product-top-newww">
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        id="panel-id-returned"
                        className={`tab-content ${
                            activeTab === "tab-id-returned" ? "active" : ""
                        }`}
                        role="tabpanel"
                        aria-labelledby="tab-id-returned"
                    >
                        <div className="row product-top-newww">
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="row product-top-newww">
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="row product-top-newww">
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                            <div className="col l-2-4 m-3 c-6 home-product-item">
                                <a className="home-product-item-link" href="a">
                                    <div
                                        className="home-product-item__img"
                                        style={{
                                            backgroundImage:
                                                "url(./assets/img/home/1.PNG)",
                                        }}
                                    />
                                    <div className="home-product-item__info">
                                        <h4 className="home-product-item__name">
                                            Ổ đĩa flash USB2.0 2TB Hp kim loại
                                            chống thấm nước
                                        </h4>
                                        <div className="home-product-item__price">
                                            <p className="home-product-item__price-old">
                                                180.000đ
                                            </p>
                                            <p className="home-product-item__price-new">
                                                200.000đ
                                            </p>
                                            <i className="home-product-item__ship fas fa-shipping-fast" />
                                        </div>
                                        <div className="home-product-item__footer">
                                            <div className="home-product-item__save">
                                                <input
                                                    type="checkbox"
                                                    name="save-check"
                                                    id="heart-save"
                                                />
                                                <label
                                                    htmlFor="heart-save"
                                                    className="far fa-heart"
                                                />
                                            </div>
                                            <div className="home-product-item__rating-star">
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                                <i className="star-checked far fa-star" />
                                            </div>
                                            <div className="home-product-item__saled">
                                                Đã bán 3,8k
                                            </div>
                                        </div>
                                        <div className="home-product-item__origin">
                                            Hà Nội
                                        </div>
                                        <div className="home-product-item__favourite">
                                            Yêu thích
                                        </div>
                                        <div className="home-product-item__sale-off">
                                            <div className="home-product-item__sale-off-value">
                                                40%
                                            </div>
                                            <div className="home-product-item__sale-off-label">
                                                GIẢM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-product-item-footer">
                                        Tìm sản phẩm tương tự
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
