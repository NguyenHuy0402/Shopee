import React, { useEffect, useState } from "react";
import Product from "../../components/ProductCard";
import { productApi } from "../../api/productApi";
import Loading from "../../components/Loading";

const FlashSale = () => {
    const [products, setFlashSaleProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFlashSaleProducts = async () => {
            try {
                const response = await productApi.FlashSale();
                const products = Array.isArray(response.data)
                    ? response.data
                    : [];
                setFlashSaleProducts(products);
            } catch (error) {
                setError("Lỗi khi tải sản phẩm flash sale");
            } finally {
                setLoading(false);
            }
        };

        fetchFlashSaleProducts();
    }, []);

    return (
        <div
            className="container"
            style={{
                backgroundColor: "white",
                marginTop: "20px",
                paddingTop: "15px",
            }}
        >
            <div className="grid wide">
                <div
                    className="row sm-gutter"
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "0 15px",
                        borderBottom: "1px solid #DDD",
                    }}
                >
                    <h1
                        style={{
                            marginLeft: "15px",
                            color: "var(--light-btn-primary-color)",
                            padding: "0",
                        }}
                    >
                        FLASH SALE
                    </h1>
                    <a
                        href="/flashsale"
                        style={{
                            textDecoration: "none",
                        }}
                    >
                        <h3
                            style={{
                                fontWeight: 400,
                            }}
                            className="spanall"
                        >
                            Xem tất cả
                            <i
                                style={{
                                    marginLeft: "5px",
                                }}
                                className="fas fa-chevron-right"
                            ></i>
                        </h3>
                    </a>
                </div>
                <div
                    style={{
                        padding: "10px",
                    }}
                    id="list-product"
                    className="row sm-gutter"
                >
                    {loading && <Loading />}
                    {error && !loading && <p>{error}</p>}
                    {!loading && products.length === 0 && (
                        <p>Không có sản phẩm flash sale nào.</p>
                    )}
                    {!loading &&
                        products.slice(0, 6).map((product) => (
                            <Product
                                key={product.id} // Sửa từ product.product_id thành product.id
                                product={product}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default FlashSale;
