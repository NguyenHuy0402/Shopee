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
        <div className="BVyP2Ke container">
            <div className="ciPWrW">
                <hr className="PM144o" />
                <h1 className="JmXfms">GỢI Ý HÔM NAY</h1>
            </div>
            <div className="row product-top-newww PM5234a">
                <div className="col l-2-4 m-3 c-6 home-product-item">
                    <a className="home-product-item-link" href="a">
                        <div
                            className="home-product-item__img"
                            style={{
                                backgroundImage: "url(./assets/img/home/1.PNG)",
                            }}
                        />
                        <div className="home-product-item__info">
                            <h4 className="home-product-item__name">
                                Ổ đĩa flash USB2.0 2TB Hp kim loại chống thấm
                                nước
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
                                backgroundImage: "url(./assets/img/home/1.PNG)",
                            }}
                        />
                        <div className="home-product-item__info">
                            <h4 className="home-product-item__name">
                                Ổ đĩa flash USB2.0 2TB Hp kim loại chống thấm
                                nước
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
                                backgroundImage: "url(./assets/img/home/1.PNG)",
                            }}
                        />
                        <div className="home-product-item__info">
                            <h4 className="home-product-item__name">
                                Ổ đĩa flash USB2.0 2TB Hp kim loại chống thấm
                                nước
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
                                backgroundImage: "url(./assets/img/home/1.PNG)",
                            }}
                        />
                        <div className="home-product-item__info">
                            <h4 className="home-product-item__name">
                                Ổ đĩa flash USB2.0 2TB Hp kim loại chống thấm
                                nước
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
                                backgroundImage: "url(./assets/img/home/1.PNG)",
                            }}
                        />
                        <div className="home-product-item__info">
                            <h4 className="home-product-item__name">
                                Ổ đĩa flash USB2.0 2TB Hp kim loại chống thấm
                                nước
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
                                backgroundImage: "url(./assets/img/home/1.PNG)",
                            }}
                        />
                        <div className="home-product-item__info">
                            <h4 className="home-product-item__name">
                                Ổ đĩa flash USB2.0 2TB Hp kim loại chống thấm
                                nước
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
            <div className="row product-top-newww PM5234a">
                <div className="col l-2-4 m-3 c-6 home-product-item">
                    <a className="home-product-item-link" href="a">
                        <div
                            className="home-product-item__img"
                            style={{
                                backgroundImage: "url(./assets/img/home/1.PNG)",
                            }}
                        />
                        <div className="home-product-item__info">
                            <h4 className="home-product-item__name">
                                Ổ đĩa flash USB2.0 2TB Hp kim loại chống thấm
                                nước
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
                                backgroundImage: "url(./assets/img/home/1.PNG)",
                            }}
                        />
                        <div className="home-product-item__info">
                            <h4 className="home-product-item__name">
                                Ổ đĩa flash USB2.0 2TB Hp kim loại chống thấm
                                nước
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
                                backgroundImage: "url(./assets/img/home/1.PNG)",
                            }}
                        />
                        <div className="home-product-item__info">
                            <h4 className="home-product-item__name">
                                Ổ đĩa flash USB2.0 2TB Hp kim loại chống thấm
                                nước
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
                                backgroundImage: "url(./assets/img/home/1.PNG)",
                            }}
                        />
                        <div className="home-product-item__info">
                            <h4 className="home-product-item__name">
                                Ổ đĩa flash USB2.0 2TB Hp kim loại chống thấm
                                nước
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
                                backgroundImage: "url(./assets/img/home/1.PNG)",
                            }}
                        />
                        <div className="home-product-item__info">
                            <h4 className="home-product-item__name">
                                Ổ đĩa flash USB2.0 2TB Hp kim loại chống thấm
                                nước
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
                                backgroundImage: "url(./assets/img/home/1.PNG)",
                            }}
                        />
                        <div className="home-product-item__info">
                            <h4 className="home-product-item__name">
                                Ổ đĩa flash USB2.0 2TB Hp kim loại chống thấm
                                nước
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
            <div className="row product-top-newww PM5234a">
                <div className="col l-2-4 m-3 c-6 home-product-item">
                    <a className="home-product-item-link" href="a">
                        <div
                            className="home-product-item__img"
                            style={{
                                backgroundImage: "url(./assets/img/home/1.PNG)",
                            }}
                        />
                        <div className="home-product-item__info">
                            <h4 className="home-product-item__name">
                                Ổ đĩa flash USB2.0 2TB Hp kim loại chống thấm
                                nước
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
                                backgroundImage: "url(./assets/img/home/1.PNG)",
                            }}
                        />
                        <div className="home-product-item__info">
                            <h4 className="home-product-item__name">
                                Ổ đĩa flash USB2.0 2TB Hp kim loại chống thấm
                                nước
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
                                backgroundImage: "url(./assets/img/home/1.PNG)",
                            }}
                        />
                        <div className="home-product-item__info">
                            <h4 className="home-product-item__name">
                                Ổ đĩa flash USB2.0 2TB Hp kim loại chống thấm
                                nước
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
                                backgroundImage: "url(./assets/img/home/1.PNG)",
                            }}
                        />
                        <div className="home-product-item__info">
                            <h4 className="home-product-item__name">
                                Ổ đĩa flash USB2.0 2TB Hp kim loại chống thấm
                                nước
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
                                backgroundImage: "url(./assets/img/home/1.PNG)",
                            }}
                        />
                        <div className="home-product-item__info">
                            <h4 className="home-product-item__name">
                                Ổ đĩa flash USB2.0 2TB Hp kim loại chống thấm
                                nước
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
                                backgroundImage: "url(./assets/img/home/1.PNG)",
                            }}
                        />
                        <div className="home-product-item__info">
                            <h4 className="home-product-item__name">
                                Ổ đĩa flash USB2.0 2TB Hp kim loại chống thấm
                                nước
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
            <div className="row product-top-newww PM5234a">
                <div className="col l-2-4 m-3 c-6 home-product-item">
                    <a className="home-product-item-link" href="a">
                        <div
                            className="home-product-item__img"
                            style={{
                                backgroundImage: "url(./assets/img/home/1.PNG)",
                            }}
                        />
                        <div className="home-product-item__info">
                            <h4 className="home-product-item__name">
                                Ổ đĩa flash USB2.0 2TB Hp kim loại chống thấm
                                nước
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
                                backgroundImage: "url(./assets/img/home/1.PNG)",
                            }}
                        />
                        <div className="home-product-item__info">
                            <h4 className="home-product-item__name">
                                Ổ đĩa flash USB2.0 2TB Hp kim loại chống thấm
                                nước
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
                                backgroundImage: "url(./assets/img/home/1.PNG)",
                            }}
                        />
                        <div className="home-product-item__info">
                            <h4 className="home-product-item__name">
                                Ổ đĩa flash USB2.0 2TB Hp kim loại chống thấm
                                nước
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
                                backgroundImage: "url(./assets/img/home/1.PNG)",
                            }}
                        />
                        <div className="home-product-item__info">
                            <h4 className="home-product-item__name">
                                Ổ đĩa flash USB2.0 2TB Hp kim loại chống thấm
                                nước
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
                                backgroundImage: "url(./assets/img/home/1.PNG)",
                            }}
                        />
                        <div className="home-product-item__info">
                            <h4 className="home-product-item__name">
                                Ổ đĩa flash USB2.0 2TB Hp kim loại chống thấm
                                nước
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
                                backgroundImage: "url(./assets/img/home/1.PNG)",
                            }}
                        />
                        <div className="home-product-item__info">
                            <h4 className="home-product-item__name">
                                Ổ đĩa flash USB2.0 2TB Hp kim loại chống thấm
                                nước
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
    );
}
