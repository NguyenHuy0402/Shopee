import React from "react";
export default function slider() {
    return (
        <div
            className="col l-8 m-12 c12"
            style={{
                margin: "auto",
                display: "flex",
                marginTop: "10px",
            }}
        >
            <div
                className="w3-content w3-section col l-8 m-4 c-6"
                style={{ padding: "0" }}
            >
                <img
                    className="mySlides"
                    src="./assets/img/home/hinh2.png"
                    alt="a"
                    style={{ width: "100%" }}
                />
            </div>
            <div className="slider-right col l-4 m-4 c-6">
                <div className="slider-item">
                    <img
                        className="img-right"
                        src="./assets/img/home/hinh2.png"
                        alt="a"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="slider-item" style={{ marginTop: 5 }}>
                    <img
                        className="img-right"
                        src="./assets/img/home/hinh2.png"
                        alt="a"
                        style={{ width: "100%" }}
                    />
                </div>
            </div>
        </div>
    );
}
