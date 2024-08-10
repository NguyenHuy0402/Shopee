import "./App.css";
import React from "react";
import AppBar from "./scenes/global/AppBar";
import Banner from "./scenes/global/Banner";
import Navbar from "./scenes/global/Navbar";
import CoppyRight from "./scenes/global/CoppyRight";
import Footer from "./scenes/global/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./state/store";
import OtherFooter from "./scenes/global/OtherFooter";
export default function App() {
    const location = useLocation();

    // Các route không muốn hiển thị header
    const noHeaderRoutes = [
        "/checkout",
        "/confirmation",
        "/login",
        ,
        "/register",
    ]; // Bạn có thể thêm các route khác tại đây
    return (
        <div>
            <Provider store={store}>
                <div className="app">
                    {/* header */}
                    {!noHeaderRoutes.includes(location.pathname) && (
                        <header className="header">
                            <div className="grid wide">
                                <AppBar />
                                <Banner />
                                <Navbar />
                            </div>
                        </header>
                    )}
                    <Outlet />
                    <footer className="footer">
                        <div className="main-footer">
                            <div className="grid wide">
                                <Footer />
                                <CoppyRight />
                            </div>
                        </div>
                        <OtherFooter />
                    </footer>
                </div>
            </Provider>
        </div>
    );
}
