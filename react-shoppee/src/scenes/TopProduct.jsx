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

    return (
        <div className="BVyP2K">
            <h1 class="yQDAhw">Tìm kiếm hàng đầu</h1>
            <div className="thunghiem-">
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
                            <span className="tab-label">Nước Giặt Lix</span>
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
                            <span className="tab-label">Nước Giặt Ariel</span>
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
                            onClick={(e) =>
                                handleTabClick(e, "tab-id-shipping")
                            }
                        >
                            <span className="tab-label">Bàn Phím Giả Cơ</span>
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
                            onClick={(e) =>
                                handleTabClick(e, "tab-id-awaiting")
                            }
                        >
                            <span className="tab-label">Keycap</span>
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
                            onClick={(e) =>
                                handleTabClick(e, "tab-id-completed")
                            }
                        >
                            <span className="tab-label">Đồng Hồ Nam</span>
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
                            onClick={(e) =>
                                handleTabClick(e, "tab-id-canceled")
                            }
                        >
                            <span className="tab-label">Ổ Cắm Điện</span>
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
                            onClick={(e) =>
                                handleTabClick(e, "tab-id-returned")
                            }
                        >
                            <span className="tab-label">Xem Thêm *</span>
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
                                    <a
                                        className="home-product-item-link"
                                        href="a"
                                    >
                                        <div
                                            className="home-product-item__img"
                                            style={{
                                                backgroundImage:
                                                    "url(./assets/img/home/1.PNG)",
                                            }}
                                        />
                                        <div className="home-product-item__info">
                                            <h4 className="home-product-item__name">
                                                Ổ đĩa flash USB2.0 2TB Hp kim
                                                loại chống thấm nước
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
        </div>
    );
}
