import React from "react";
export default function Filter() {
    return (
        <div className="home-filter hide-on-mobile-tablet">
            <div className="home-filter-control">
                <p className="home-filter-title">Sắp xếp theo</p>
                <button className="btn btn--primary home-filter-btn">
                    Phổ biến
                </button>
                <button className="btn home-filter-btn">Mới nhất</button>
                <button className="btn home-filter-btn">Bán chạy</button>
                <div className="btn home-filter-sort">
                    <p className="home-filter-sort-btn">Giá</p>
                    <i className="fas fa-sort-amount-down-alt" />
                    <ul className="home-filter-sort-list">
                        <li>
                            <a
                                href="https://example.com"
                                className="home-filter-sort-item-link"
                            >
                                Giảm dần
                                <i className="fas fa-sort-amount-down-alt" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://example.com"
                                className="home-filter-sort-item-link"
                            >
                                Tăng dần
                                <i className="fas fa-sort-amount-up-alt" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="home-filter-page">
                <div className="home-filter-page-number">
                    <p className="home-filter-page-now">1</p>
                    /14
                </div>
                <div className="home-filter-page-control">
                    <a
                        href="https://example.com"
                        className="home-filter-page-btn home-filter-page-btn--disable"
                    >
                        <i className="fas fa-angle-left" />
                    </a>
                    <a
                        href="https://example.com"
                        className="home-filter-page-btn"
                    >
                        <i className="fas fa-angle-right" />
                    </a>
                </div>
            </div>
        </div>
    );
}
