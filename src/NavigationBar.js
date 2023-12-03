import React from "react";
import "./App.css";

const NavigationBar = () => {
    return (
        <header>
            <nav className="navbar">
                <div className="nav-content">
                    <ul className="nav-items">
                        <li>
                            <a href="#"><ion-icon name="logo-apple"></ion-icon></a>
                        </li>

                        <li><a href="#">Store</a></li>
                        <li><a href="#">Mac</a></li>
                        <li><a href="#">iPad</a></li>
                        <li><a href="#">iPhone</a></li>
                        <li><a href="#">Watch</a></li>
                        <li><a href="#">AirPods</a></li>
                        <li><a href="#">TV & Home</a></li>
                        <li><a href="#">Only on Apple</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default NavigationBar;