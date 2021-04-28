import React from "react";
import './styles/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from "@material-ui/core";
import {Link} from "react-router-dom";

const Header = () => {
    return (

        // Header component

        <div className="header">

            {/* THe section left lohgo*/}
                <Link to="/">
                    <img src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" className="header__icon" alt=""/>
                </Link>

            {/*endof logo*/}

            {/* the center section of header    */}

            <div className="header__center">
                <input type="text"/>
                <SearchIcon />
            </div>

            {/* the end of center section of header */}

            {/* the section right   */}

            <div className="header__right">
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>

        {/*    the end of the section right     */}
        </div>
    )
}

export default Header;