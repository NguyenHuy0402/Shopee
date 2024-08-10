import React from "react";
export default function Register() {
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
                        <div className="S9AO00">Đăng ký</div>
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
                                        <div className="Vw8EiR">Đăng ký</div>
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
                                                    placeholder="Số điện thoại"
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
                                        <button
                                            className="vvOL40 iesrPs AsFRg8 qCI4rz ZKayWA AnY7KS"
                                            disabled
                                            style={{ marginBottom: "20px" }}
                                        >
                                            Tiếp theo
                                        </button>
                                    </form>
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
                                    <div class="O2c4S9">
                                        <div class="FuAzcd">
                                            Bằng việc đăng kí, bạn đã đồng ý với
                                            Shopee về
                                            <a
                                                href="https://help.shopee.vn/portal/article/77243"
                                                class="U61kXm"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{ marginLeft: "3px" }}
                                            >
                                                Điều khoản dịch vụ
                                            </a>
                                            &
                                            <a
                                                href="https://help.shopee.vn/portal/article/77244"
                                                class="U61kXm"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Chính sách bảo mật
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="UbljBq">
                                    <div className="P9drEz HYzyIh">
                                        Bạn đã có tài khoản?
                                        <a
                                            className="VmgVc8"
                                            href="/buyer/signup?next=https%3A%2F%2Fshopee.vn%2F"
                                        >
                                            Đăng nhập
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
