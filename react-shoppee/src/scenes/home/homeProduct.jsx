import React, { useEffect, useState } from "react";
import Product from "../../components/ProductCard";
import { productApi } from "../../api/productApi";
import Loading from "../../components/Loading";

export default function HomeProduct() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSuggestedProducts = async () => {
            try {
                const response = await productApi.getSuggestedProducts({
                    suggested: true,
                });
                setProducts(response.data);
            } catch (error) {
                setError("Lỗi khi tải sản phẩm gợi ý");
            } finally {
                setLoading(false);
            }
        };

        fetchSuggestedProducts();
    }, []);

    return (
        <div>
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
                            margin: "0",
                            padding: "0 15px",
                            borderBottom:
                                "3px solid var(--light-btn-primary-color)",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <h1
                            style={{
                                color: "var(--light-btn-primary-color)",
                                padding: "0",
                                fontWeight: 500,
                            }}
                        >
                            GỢI Ý HÔM NAY
                        </h1>
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
            <div
                className="fppaNP"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "10px",
                }}
            >
                <div
                    className="fppaNP"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        padding: "10px",
                    }}
                >
                    <a href="/daily_discover" className="custom-button">
                        Xem thêm
                    </a>
                </div>
            </div>
        </div>
    );
}
