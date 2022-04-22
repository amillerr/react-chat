import React from "react";
import UserInfo from "../UserInfo/UserInfo";
import HeaderTheme from "../HeaderTheme/HeaderTheme";

import "./styles.css";


const Header = () => {
    return (
        <div className="header">
            <UserInfo />
            <HeaderTheme/>
        </div>
    );
};

export default Header;