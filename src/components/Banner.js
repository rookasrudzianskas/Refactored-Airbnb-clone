import React, {useState} from "react";
import "./styles/Banner.css";
import {Button} from "@material-ui/core";


const Banner = () => {
    const [showSearch, setShowSearch] = useState(false);

    return(
        <div className="banner">
            <div className="banner__search">
                {showSearch && <h1>SHOW DATA PICKER</h1>}
                <Button onClick={() => setShowSearch(!showSearch)} variant="outlined" className="banner__searchButton">Search Dates</Button>
            </div>
            <div className="banner__info">
                <h1>Get out and stretch your imagination</h1>

                <h5>
                    Plan a different kind of getaway to uncover the hidden gems near you.
                </h5>
                <Button variant="outlined">Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner;