import React from "react";
export default function Paginate() {
    return (
        <ul className="pagination home-product-pagination">
            <li className="pagination-item">
                <a
                    href="https://example.com"
                    className="pagination-item-link pagination-item-link--disable"
                >
                    <i className="fas fa-chevron-left" />
                </a>
            </li>
            <li className="pagination-item pagination-item--active">
                <a href="https://example.com" className="pagination-item-link">
                    1
                </a>
            </li>
            <li className="pagination-item">
                <a href="https://example.com" className="pagination-item-link">
                    2
                </a>
            </li>
            <li className="pagination-item">
                <a href="https://example.com" className="pagination-item-link">
                    3
                </a>
            </li>
            <li className="pagination-item">
                <a
                    className="pagination-item-link pagination-item-link--disable"
                    href="https://example.com"
                    aria-label="Example Link"
                ></a>
            </li>
            <li className="pagination-item">
                <a href="https://example.com" className="pagination-item-link">
                    8
                </a>
            </li>
            <li className="pagination-item">
                <a href="https://example.com" className="pagination-item-link">
                    <i className="fas fa-chevron-right" />
                </a>
            </li>
        </ul>
    );
}
