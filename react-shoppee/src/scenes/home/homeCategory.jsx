import React, { useEffect, useState } from "react";
import AppUrl from "../../api/AppURL";
import { categoryApi } from "../../api/categoryApi";
import Loading from "../../components/Loading";

const HomeCategory = () => {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await categoryApi.getAll();
                setCategories(response.data);
                setLoading(false);
            } catch (error) {
                setError("Lỗi khi tải danh mục");
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    if (loading) {
        return <Loading />;
    }

    const firstRowCategories = categories.slice(0, 10);
    const secondRowCategories = categories.slice(10, 20);

    return (
        <div
            className="container"
            style={{
                backgroundColor: "white",
                marginTop: "20px",
            }}
        >
            <div className="grid wide">
                <div className="row sm-gutter">
                    <div className="homeCategoryList">
                        <div className="headerSection homeCategoryListHeader headerSectionSimple">
                            <div className="headerSectionHeader">
                                <div className="headerSectionTitle">
                                    DANH MỤC
                                </div>
                            </div>
                            <div className="headerSectionContent">
                                {/* Dòng đầu tiên */}
                                <div className="imageCarousel">
                                    <div className="imageCarouselItemListWrapper">
                                        <ul
                                            className="imageCarouselItemList"
                                            style={{
                                                display: "flex",
                                                width: "100%",
                                                overflowX: "auto",
                                                padding: 0,
                                                margin: 0,
                                                listStyle: "none",
                                            }}
                                        >
                                            {error && <p>{error}</p>}
                                            {firstRowCategories.map(
                                                (category) => (
                                                    <li
                                                        key={category.id}
                                                        className="imageCarouselItem"
                                                        style={{
                                                            padding: "0 5px",
                                                            width: "10%", // Adjust width as needed
                                                        }}
                                                    >
                                                        <a
                                                            className="homeCategoryGrid"
                                                            href={`/categories/${category.id}`}
                                                        >
                                                            <div className="categoryItem">
                                                                <div className="categoryImageContainer">
                                                                    <div className="categoryImage">
                                                                        <div
                                                                            className="categoryImage"
                                                                            style={{
                                                                                backgroundImage: `url(${AppUrl.ImageUrl}/images/categorys/${category.image})`,
                                                                                backgroundSize:
                                                                                    "cover",
                                                                                backgroundPosition:
                                                                                    "center",
                                                                            }}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="categoryName">
                                                                    {
                                                                        category.name
                                                                    }
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>

                                {/* Dòng thứ hai */}
                                <div className="imageCarousel">
                                    <div className="imageCarouselItemListWrapper">
                                        <ul
                                            className="imageCarouselItemList"
                                            style={{
                                                display: "flex",
                                                width: "100%",
                                                overflowX: "auto",
                                                padding: 0,
                                                margin: 0,
                                                listStyle: "none",
                                            }}
                                        >
                                            {error && <p>{error}</p>}
                                            {secondRowCategories.map(
                                                (category) => (
                                                    <li
                                                        key={category.id}
                                                        className="imageCarouselItem"
                                                        style={{
                                                            padding: "0 5px",
                                                            width: "10%", // Adjust width as needed
                                                        }}
                                                    >
                                                        <a
                                                            className="homeCategoryGrid"
                                                            href={`/categories/${category.id}`}
                                                        >
                                                            <div className="categoryItem">
                                                                <div className="categoryImageContainer">
                                                                    <div className="categoryImage">
                                                                        <div
                                                                            className="categoryImage"
                                                                            style={{
                                                                                backgroundImage: `url(${AppUrl.ImageUrl}/images/categorys/${category.image})`,
                                                                                backgroundSize:
                                                                                    "cover",
                                                                                backgroundPosition:
                                                                                    "center",
                                                                            }}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="categoryName">
                                                                    {
                                                                        category.name
                                                                    }
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCategory;
