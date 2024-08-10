import React from "react";
import HomeProduct from "./homeProduct";
import HomeProductNew from "./homeProductNew";
import Slider from "./slider";
import HomeProgram from "./homeProgram";
import HomeCategory from "./homeCategory";
import Flashsale from "./flashsale";
import ProductList from "../productList/ProductList";
export default function Home() {
    return (
        <main className="main_content">
            <section className="slider container">
                <Slider />
                <HomeProgram />
            </section>
            <div className="main-contain-home">
                <div className="container">
                    <div className="grid wide">
                        <div className="row sm-gutter">
                            <img
                                style={{ width: "100%" }}
                                src="./assets/img/home/free.png"
                                alt="free"
                            />
                        </div>
                        <HomeCategory />
                        <Flashsale />
                        <HomeProductNew />
                        <HomeProduct />
                    </div>
                </div>
            </div>
        </main>
    );
}
