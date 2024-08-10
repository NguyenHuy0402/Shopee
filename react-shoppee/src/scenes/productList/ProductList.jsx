import React, { useEffect, useState } from "react";
import ProductBox from "../../components/ProductBox";
import CategoryMenu from "./CategoryMenu";
import Filter from "./Filter";
import Paginate from "../../components/Paginate";
import { productApi } from "../../api/productApi";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [pageNum, setPageNum] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const params = { page: pageNum };
                const response = await productApi.getAll(params);
                if (Array.isArray(response.data)) {
                    setProducts(response.data);
                } else {
                    setProducts([]);
                    setError("Dữ liệu trả về không đúng định dạng.");
                }
            } catch (error) {
                setError("Lỗi khi tải sản phẩm");
            }
        };
        fetchData();
    }, [pageNum]);

    return (
        <div className="container">
            <div className="grid wide">
                <div className="row sm-gutter">
                    <div className="col l-2 m-0 c-0">
                        <CategoryMenu />
                    </div>
                    <div className="col l-10 m-12 c-12">
                        <Filter />
                        <div className="home-product">
                            <ProductBox />
                        </div>
                        <Paginate />
                        <div>
                            <h1>Danh Sách Sản Phẩm</h1>
                            {error && <p>{error}</p>}
                            {products.length === 0 ? (
                                <p>Đang tải sản phẩm...</p>
                            ) : (
                                <ul>
                                    {products.map((product) => (
                                        <li key={product.product_id}>
                                            <h2>{product.product_name}</h2>
                                            <p>Giá: {product.price} VNĐ</p>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
