import React from "react";

export default function ProductDetail() {
    return (
        <div className="product-detail">
            <div className="product-header">
                <h1 className="product-title">Giày Nam Sneaker G2 Athena</h1>
                <button className="favorite-button">♡</button>
            </div>
            <div className="product-info">
                <div className="product-image-section">
                    <div className="main-image-container">
                        <img
                            src="../assets/img/sp/iphone.png"
                            alt="Sản phẩm"
                            className="main-image"
                        />
                    </div>
                    <div className="thumbnails">
                        <img
                            src="../assets/img/sp/iphone.png"
                            alt="Thumbnail 1"
                            className="thumbnail"
                        />
                        <img
                            src="../assets/img/sp/iphone.png"
                            alt="Thumbnail 2"
                            className="thumbnail"
                        />
                        <img
                            src="../assets/img/sp/iphone.png"
                            alt="Thumbnail 3"
                            className="thumbnail"
                        />
                    </div>
                    <div className="video-section">
                        <button className="play-button">
                            <span className="play-icon">▶</span> Xem Video
                        </button>
                    </div>
                </div>
                <div className="product-details">
                    <div className="rating">
                        <span className="rating-score">4.5/5</span>
                        <button className="report-button">Báo Cáo</button>
                    </div>
                    <div className="flash-sale">
                        <span className="flash-sale-icon">★</span>
                        <span className="flash-sale-text">
                            Giảm giá sốc 20%
                        </span>
                    </div>
                    <div className="price-section">
                        <span className="discounted-price">1,200,000 VNĐ</span>
                        <span className="original-price">1,500,000 VNĐ</span>
                        <span className="discount">-20%</span>
                    </div>
                    <div className="discount-coupons">
                        <div className="coupon">Coupon giảm giá 50K</div>
                        <div className="coupon">Coupon miễn phí vận chuyển</div>
                    </div>
                    <div className="return-policy">
                        <p>Đổi trả trong 7 ngày nếu sản phẩm bị lỗi.</p>
                    </div>
                    <div className="shipping-info">
                        <p>Giao hàng miễn phí trong vòng 3-5 ngày.</p>
                    </div>
                    <div className="product-variants">
                        <p>
                            <strong>Size:</strong> 39, 40, 41, 42
                        </p>
                        <p>
                            <strong>Màu sắc:</strong> Đen, Trắng
                        </p>
                    </div>
                    <div className="quantity-section">
                        <button>-</button>
                        <input type="text" defaultValue={1} />
                        <button>+</button>
                    </div>
                    <div className="product-actions">
                        <button>Thêm Vào Giỏ</button>
                        <button className="secondary">
                            <a href="/checkout">Mua Ngay</a>
                        </button>
                    </div>
                </div>
            </div>
            <div className="store-info">
                <h3>Thông Tin Cửa Hàng</h3>
                <p>Tên cửa hàng: Langtu Official Online Store</p>
                <p>Trạng thái: Online 5 phút trước</p>
                <a href="#" className="chat-button">
                    Chat ngay
                </a>
                <p>
                    <span className="shop-icon">🏠</span>
                    <a href="#" className="shop-link">
                        Xem Shop
                    </a>
                </p>
                <p>Đánh giá: 1,8k</p>
                <p>Tỉ lệ phản hồi: 99%</p>
                <p>Tham gia: 5 tháng trước</p>
                <p>Sản phẩm: 21</p>
                <p>Thời gian phản hồi: Trong vài phút</p>
                <p>Người theo dõi: 3,9k</p>
            </div>
            <div className="product-description">
                <h3>MÔ TẢ SẢN PHẨM</h3>
                <p>
                    Bàn phím cơ không dây hotswap LANGTU LT75 GASKET RGB Màn
                    hình điện tử núm xoay, bàn phím cơ cấp gaming, văn phòng.
                </p>
                <p>
                    Bàn phím cơ Langtu LT75 là bàn phím hotswap cao cấp, có kích
                    thước nhỏ gọn thiết kế đầy đủ phím; switch tinh tế, mang lại
                    trải nghiệm gõ tuyệt vời, phù hợp để sử dụng như một bàn
                    phím máy tính văn phòng, bàn phím gaming, bàn phím cá
                    nhân,...
                </p>
                <h4>THÔNG SỐ SẢN PHẨM:</h4>
                <table className="product-details-table">
                    <tbody>
                        <tr>
                            <th>Số lượng hàng khuyến mãi</th>
                            <td>20</td>
                        </tr>
                        <tr>
                            <th>Số sản phẩm còn lại</th>
                            <td>386</td>
                        </tr>
                        <tr>
                            <th>Thương hiệu</th>
                            <td>LANGTU</td>
                        </tr>
                        <tr>
                            <th>Bộ sản phẩm</th>
                            <td>Có</td>
                        </tr>
                        <tr>
                            <th>Loại bàn phím</th>
                            <td>Bàn phím cơ</td>
                        </tr>
                        <tr>
                            <th>Hạn bảo hành</th>
                            <td>12 tháng</td>
                        </tr>
                        <tr>
                            <th>Loại bảo hành</th>
                            <td>Bảo hành nhà sản xuất</td>
                        </tr>
                        <tr>
                            <th>Game chuyên dụng</th>
                            <td>Có</td>
                        </tr>
                        <tr>
                            <th>Model bàn phím &amp; chuột</th>
                            <td>Pro có logo led</td>
                        </tr>
                        <tr>
                            <th>Bàn phím tương thích</th>
                            <td>mọi hệ điều hành Window, Mac OS, Linux</td>
                        </tr>
                        <tr>
                            <th>Gửi từ</th>
                            <td>Hà Nội</td>
                        </tr>
                    </tbody>
                </table>
                <h4>ĐẶC ĐIỂM VÀ CÔNG DỤNG SẢN PHẨM:</h4>
                <ul>
                    <li>
                        Bàn phím cơ Langtu LT75 được thiết kế chống ồn thông
                        minh, phím nhạy, chắc chắn đầm tay, cho trải nghiệm bấm
                        thoải mái.
                    </li>
                    <li>
                        Bàn phím Bluetooth không dây Langtu LT75 thiết kế nhỏ
                        gọn tiện lợi, dễ dàng mang theo và sử dụng kết hợp với
                        chế độ kết nối triple mode.
                    </li>
                    <li>
                        Bàn phím máy tính cơ Langtu LT75 Hotswap có pin khỏe,
                        đảm bảo tuổi thọ cao.
                    </li>
                    <li>
                        Bàn phím cơ không dây/có dây Langtu LT75 thiết kế đèn
                        LED mix color nhiều chế độ hiệu ứng sinh động, có thể
                        ứng dụng làm đồ decor góc làm việc cực xinh.
                    </li>
                    <li>
                        Bàn phím hotswap LT75 có thể sử dụng cho máy tính PC,
                        laptop, điện thoại, Mac,...
                    </li>
                    <li>
                        Bàn phím cơ Langtu LT75 là dòng cao cấp không dây 3
                        mode.
                    </li>
                    <li>
                        75% sắp xếp tinh tế, di động và tiết kiệm không gian.
                    </li>
                    <li>
                        Bố cục hợp lý 80 phím, thuận tiện cho việc di chuyển và
                        du lịch, tinh tế và thân thiện với người dùng.
                    </li>
                    <li>
                        Cấu trúc lò xo lá GASKET với âm thanh HIFI lấp đầy âm
                        thanh cao cấp 7 lớp.
                    </li>
                    <li>
                        Phần thưởng âm thanh: giảm tiếng ồn và độ rung khi nhấn
                        các nút, mang lại hiệu ứng âm thanh tốt hơn.
                    </li>
                    <li>
                        Phần thưởng cảm ứng: cải thiện cảm ứng của bàn phím,
                        giúp các phím mềm và mượt mà hơn.
                    </li>
                    <li>
                        Phần thưởng về độ bền: ngăn bụi, hơi ẩm và các mảnh vụn
                        khác xâm nhập vào bên trong bàn phím.
                    </li>
                    <li>Khe bảng định vị PC với kết cấu mềm mại và đàn hồi.</li>
                    <li>
                        Sử dụng rãnh bảng định vị PC để giải quyết tác động của
                        hiện tượng lõm nút.
                    </li>
                    <li>
                        Cung cấp tính linh hoạt ngoài kim loại, mang lại cảm
                        giác gõ phím thoải mái hơn và truyền ánh sáng mạnh hơn.
                    </li>
                    <li>
                        Thiết kế có thể thay thế nóng, cho phép người chơi trải
                        nghiệm trục DIY một cách chuyên sâu.
                    </li>
                    <li>
                        Hơn 16 triệu màu RGB với hai mươi chế độ chiếu sáng RGB
                        để bạn lựa chọn, có thể điều chỉnh FN + /.
                    </li>
                </ul>
            </div>
            <div className="review-section">
                <div className="product-rating-overview">
                    <div className="product-rating-overview__briefing">
                        <div className="product-rating-overview__score-wrapper">
                            <span className="product-rating-overview__rating-score">
                                5
                            </span>
                            <span className="product-rating-overview__rating-score-out-of">
                                {" "}
                                trên 5{" "}
                            </span>
                        </div>
                        <div className="shopee-rating-stars product-rating-overview__stars">
                            <div className="shopee-rating-stars__stars">
                                {/* Hiển thị các ngôi sao đánh giá */}
                                <div className="shopee-rating-stars__star-wrapper">
                                    <div
                                        className="shopee-rating-stars__lit"
                                        style={{ width: "100%" }}
                                    >
                                        {/* Ngôi sao đầy */}
                                        <svg
                                            enableBackground="new 0 0 15 15"
                                            viewBox="0 0 15 15"
                                            className="shopee-svg-icon shopee-rating-stars__primary-star icon-rating-solid"
                                        >
                                            <polygon
                                                points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeMiterlimit={10}
                                            />
                                        </svg>
                                    </div>
                                    {/* Ngôi sao rỗng */}
                                    <svg
                                        enableBackground="new 0 0 15 15"
                                        viewBox="0 0 15 15"
                                        className="shopee-svg-icon shopee-rating-stars__hollow-star icon-rating"
                                    >
                                        <polygon
                                            fill="none"
                                            points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeMiterlimit={10}
                                        />
                                    </svg>
                                </div>
                                {/* Thêm các ngôi sao khác ở đây */}
                            </div>
                        </div>
                    </div>
                    <div className="product-rating-overview__filters">
                        <div className="product-rating-overview__filter product-rating-overview__filter--active">
                            tất cả
                        </div>
                        <div className="product-rating-overview__filter">
                            5 Sao (50)
                        </div>
                        <div className="product-rating-overview__filter">
                            4 Sao (0)
                        </div>
                        <div className="product-rating-overview__filter">
                            3 Sao (0)
                        </div>
                        <div className="product-rating-overview__filter">
                            2 Sao (0)
                        </div>
                        <div className="product-rating-overview__filter">
                            1 Sao (0)
                        </div>
                        <div className="product-rating-overview__filter">
                            Có Bình luận (28)
                        </div>
                        <div className="product-rating-overview__filter">
                            Có hình ảnh / video (16)
                        </div>
                    </div>
                </div>
                <h3>Đánh giá của khách hàng</h3>
                <div className="review">
                    <img
                        src="user1.jpg"
                        alt="Người đánh giá 1"
                        className="review-avatar"
                    />
                    <div className="review-content">
                        <h4>Nguyễn Văn A</h4>
                        <div className="rating">
                            <span className="rating-star">★★★★★</span>
                        </div>
                        <p>
                            Giày đẹp, chất lượng tốt. Tôi rất hài lòng với sản
                            phẩm này.
                        </p>
                        <div className="review-images">
                            <img
                                src="product-image1.jpg"
                                alt="Hình ảnh sản phẩm của Nguyễn Văn A"
                            />
                        </div>
                        <div className="review-actions">Xem thêm</div>
                    </div>
                </div>
                <div className="review">
                    <img
                        src="user2.jpg"
                        alt="Người đánh giá 2"
                        className="review-avatar"
                    />
                    <div className="review-content">
                        <h4>Trần Thị B</h4>
                        <div className="rating">
                            <span className="rating-star">★★★★☆</span>
                        </div>
                        <p>
                            Giày hơi nhỏ hơn so với kích thước bình thường,
                            nhưng vẫn rất đẹp và thoải mái.
                        </p>
                        <div className="review-images">
                            <img
                                src="product-image2.jpg"
                                alt="Hình ảnh sản phẩm của Trần Thị B"
                            />
                        </div>
                        <div className="review-actions">Xem thêm</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
