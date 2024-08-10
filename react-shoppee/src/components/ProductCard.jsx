import React from "react";
import AppUrl from "../api/AppURL";

const Product = ({ product }) => {
    if (!product) {
        return <p>Không có thông tin sản phẩm</p>;
    }

    return (
        <div className="col l-2 m-3 c-6 home-product-item">
            <a
                className="home-product-item-link"
                href={`product/${product.product_id}`}
            >
                <div
                    className="home-product-item__img"
                    style={{
                        backgroundImage: `url(${AppUrl.ImageUrl}/images/products/${product.image})`,
                    }}
                />
                <div className="home-product-item__info">
                    <h4 className="home-product-item__name">
                        {product.product_name}
                    </h4>
                    <div className="home-product-item__price">
                        <p className="home-product-item__price-old">
                            {product.price}đ
                        </p>
                        <p className="home-product-item__price-new">
                            {(product.price - product.discount).toFixed(2)}đ
                        </p>
                        <i className="home-product-item__ship fas fa-shipping-fast" />
                    </div>
                    <div className="home-product-item__footer">
                        <div className="home-product-item__save">
                            <input
                                type="checkbox"
                                name="save-check"
                                id={`heart-save-${product.product_id}`}
                            />
                            <label
                                htmlFor={`heart-save-${product.product_id}`}
                                className="far fa-heart"
                            />
                        </div>
                        <div className="home-product-item__rating-star">
                            {[...Array(5)].map((_, index) => (
                                <i
                                    key={index}
                                    className={`star-checked far fa-star ${
                                        index < Math.round(product.rating)
                                            ? "checked"
                                            : ""
                                    }`}
                                />
                            ))}
                        </div>
                        <div className="home-product-item__saled">
                            Đã bán {product.product_stock}
                        </div>
                    </div>
                    <div className="home-product-item__origin">
                        {product.product_origin}
                    </div>
                    <div className="home-product-item__favourite">
                        Yêu thích
                    </div>
                    <div className="home-product-item__sale-off">
                        <div className="home-product-item__sale-off-value">
                            {product.discount}%
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
    );
};

export default Product;
