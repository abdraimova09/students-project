import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { authContext } from "../../contexts/authContext";
import { ADMIN_EMAIL } from "../../helpers/consts";

import "./Navbar.css";

const Navbar = () => {
    const NAV_ITEMS = [
        {
            title: "ROLEX",
            link: "/rolex",
            id: 10
        },
        {
            title: "BRANDS A-Z",
            link: "/brands",
            id: 1,
        },
        {
            title: "WATCHES",
            link: "/products",
            id: 2,
        },
        {
            title: "STORES",
            link: "/stores",
            id: 3,
        },
        {
            title: "NEWS",
            link: "/news",
            id: 4,
        },
        {
            title: "CONTACTS",
            link: "*",
            id: 5,
        },
    ];
    const location = useLocation();
    const { currentUser } = useContext(authContext)
    return (
        <div className="navbar">
            {NAV_ITEMS.map((item) => (
                <Link
                    className={
                        location.pathname === item.link
                            ? "navbar-item-active"
                            : "navbar-item"
                    }
                    key={item.id}
                    to={item.link}
                >
                    {item.title}
                </Link>
            ))}
            {currentUser === ADMIN_EMAIL ? <Link
                to="/admin"
                className={
                    location.pathname === "/admin" ? "navbar-item-active" : "navbar-item"
                }
            >
                ADMIN
            </Link> : null}
        </div>
    );
};

export default Navbar;
