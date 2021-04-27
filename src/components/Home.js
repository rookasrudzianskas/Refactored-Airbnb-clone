import React from "react";
import './styles/Home.css';
import Banner from "./Banner";

const Home = () => {
    return (
        <div className="home">
            <h1>Home component</h1>
            <Banner />
        </div>
    )
}

export default Home;