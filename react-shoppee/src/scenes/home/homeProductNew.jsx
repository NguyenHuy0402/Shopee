import React, { useEffect, useState } from "react";
import Product from "../../components/ProductCard";
import { productApi } from "../../api/productApi";
import Loading from "../../components/Loading"; // Import Loading component

export default function HomeProductNew() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true); // Thêm state loading

    useEffect(() => {
        const fetchNewProducts = async () => {
            try {
                const response = await productApi.getNewProducts();
                setProducts(response.data);
            } catch (error) {
                setError("Lỗi khi tải sản phẩm");
            } finally {
                setLoading(false); // Khi kết thúc quá trình lấy dữ liệu, set loading = false
            }
        };

        fetchNewProducts();
    }, []);

    return (
        <div
            className="container"
            style={{
                backgroundColor: "white",
                marginTop: "25px",
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
                        margin: "0",
                        padding: "0 15px",
                        borderBottom: "1px solid #DDD",
                    }}
                >
                    <h1
                        style={{
                            marginLeft: "15px",
                            color: "var(--light-btn-primary-color)",
                            padding: "0",
                            fontWeight: 500,
                        }}
                    >
                        TÌM KIẾM HÀNG ĐẦU
                    </h1>
                    <a
                        href="/top-product"
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
                    {loading && <Loading />}{" "}
                    {/* Hiển thị component Loading khi đang tải */}
                    {error && !loading && <p>{error}</p>}
                    {!loading && products.length === 0 && (
                        <p>Không có sản phẩm nào.</p>
                    )}
                    {!loading &&
                        products.length > 0 &&
                        products.map((product) => (
                            <Product key={product.id} product={product} />
                        ))}
                </div>
            </div>
        </div>
    );
}
