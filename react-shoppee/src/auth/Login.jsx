import React from "react";
export default function Login() {
    return (
        <div>
            <nav className="DtnBvw">
                <div className="uJE9o2">
                    <div className="BUFbnV">
                        <a className="Gaujs8" href="/">
                            <img
                                className="logo-login-e"
                                src="assets/img/logo/shopee-logo1.png"
                                alt="a"
                            ></img>
                        </a>
                        <div className="S9AO00">Đăng nhập</div>
                    </div>
                    <a
                        href="https://help.shopee.vn/vn/s"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="aSJqEv"
                    >
                        Bạn cần giúp đỡ?
                    </a>
                </div>
            </nav>

            <div style={{ backgroundColor: "rgb(238, 78, 46)" }}>
                <div
                    className="IEKwEi wgttbH"
                    style={{
                        backgroundImage:
                            'url("https://down-vn.img.susercontent.com/file/sg-11134004-7rdyv-ly0k8p7r473d50")',
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                        // display: "flex",
                        // justifyContent: "flex-end", // Đặt nội dung vào bên phải
                        // alignItems: "center", // Canh giữa theo chiều dọc
                        // paddingRight: "400px",
                    }}
                >
                    <div className="YiuE0t">
                        <div className="WDla1u" />
                        <div>
                            <div className="AG8zPN scPSWV">
                                <div className="WYUsbN">
                                    <div className="Rcb5be">
                                        <div className="Vw8EiR">Đăng nhập</div>
                                        <div className="F71qL6">
                                            <div className="tTrrEC">
                                                Đăng nhập với mã QR
                                            </div>
                                            <a
                                                className="_t3qNI"
                                                href="/buyer/login/qr?next=https%3A%2F%2Fshopee.vn%2F"
                                            >
                                                <svg
                                                    width={40}
                                                    height={40}
                                                    fill="none"
                                                    className="eQpFX_"
                                                >
                                                    <g clipPath="url(#clip0)">
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M18 0H0v18h18V0zM3 15V3h12v12H3zM18 22H0v18h18V22zm-3 15H3V25h12v12zM40 0H22v18h18V0zm-3 15H25V3h12v12z"
                                                            fill="#EE4D2D"
                                                        />
                                                        <path
                                                            d="M37 37H22.5v3H40V22.5h-3V37z"
                                                            fill="#EE4D2D"
                                                        />
                                                        <path
                                                            d="M27.5 32v-8h-3v8h3zM33.5 32v-8h-3v8h3zM6 6h6v6H6zM6 28h6v6H6zM28 6h6v6h-6z"
                                                            fill="#EE4D2D"
                                                        />
                                                        <path
                                                            fill="#fff"
                                                            d="M-4.3 4l44 43.9-22.8 22.7-43.9-44z"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <path
                                                                fill="#fff"
                                                                d="M0 0h40v40H0z"
                                                            />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="GNOKX7">
                                    <div />
                                    <form>
                                        <div className="F8zDuW">
                                            <div className="gMTn3o">
                                                <input
                                                    className="Z7tNyT"
                                                    type="text"
                                                    placeholder="Email/Số điện thoại/Tên đăng nhập"
                                                    autoComplete="on"
                                                    name="loginKey"
                                                    maxLength={128}
                                                    aria-invalid="false"
                                                />
                                            </div>
                                            <div
                                                id="authentication-input-error_68492a73-05f3-4c0d-bb03-ee33590cd22a"
                                                className="HFEJRq"
                                                aria-live="polite"
                                            />
                                        </div>
                                        <div className="L2QI3a">
                                            <div className="gMTn3o">
                                                <input
                                                    className="Z7tNyT"
                                                    type="password"
                                                    placeholder="Mật khẩu"
                                                    autoComplete="current-password"
                                                    name="password"
                                                    maxLength={16}
                                                    aria-invalid="false"
                                                />
                                                <button className="oVeLwk">
                                                    <i className="far fa-eye"></i>
                                                </button>
                                            </div>
                                            <div
                                                id="authentication-input-error_93004ba1-8365-4db7-9920-6afa76994e48"
                                                className="HFEJRq"
                                                aria-live="polite"
                                            />
                                        </div>
                                        <button
                                            className="vvOL40 iesrPs AsFRg8 qCI4rz ZKayWA AnY7KS"
                                            disabled
                                        >
                                            <a className="akjsfsa" href="/">
                                                {" "}
                                                Đăng nhập
                                            </a>
                                        </button>
                                    </form>
                                    <div className="PJtD9H">
                                        <a
                                            className="FzyRNj"
                                            href="/buyer/reset"
                                        >
                                            Quên mật khẩu
                                        </a>
                                        <a
                                            className="FzyRNj"
                                            href="/buyer/login/otp?next=https%3A%2F%2Fshopee.vn%2F"
                                        >
                                            Đăng nhập với SMS
                                        </a>
                                    </div>
                                    <div className="utNPhR">
                                        <div className="TjJ33f">
                                            <div className="p__MPF" />
                                            <span className="mYzzJR">hoặc</span>
                                            <div className="p__MPF" />
                                        </div>
                                        <div className="fqRb47">
                                            <button className="HeiASJ Db3tXj YQU5bP">
                                                <div className="lApgO2">
                                                    <div className="vDmVU0 social-white-background social-white-fb-blue-png" />
                                                </div>
                                                <div className>Facebook</div>
                                            </button>
                                            <button className="HeiASJ Db3tXj YQU5bP">
                                                <div className="lApgO2">
                                                    <div className="vDmVU0 social-white-background social-white-google-png" />
                                                </div>
                                                <div className>Google</div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="UbljBq">
                                    <div className="P9drEz HYzyIh">
                                        Bạn mới biết đến Shopee?
                                        <a
                                            className="VmgVc8"
                                            href="/buyer/signup?next=https%3A%2F%2Fshopee.vn%2F"
                                        >
                                            Đăng ký
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
