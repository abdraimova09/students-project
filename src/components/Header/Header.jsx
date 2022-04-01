import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingOutlined } from '@ant-design/icons';

import Navbar from '../Navbar/Navbar';

import './Header.css';
import { Badge, Button } from 'antd';
import { cartContext } from '../../contexts/cartContext';
import { authContext } from '../../contexts/authContext';

const Header = () => {
    const { getCart, cartLength } = useContext(cartContext);
    const { currentUser, handleLogout } = useContext(authContext)
    const navigate = useNavigate()
    useEffect(() => {
        getCart()
    }, [])
    return (
        <>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                {currentUser ? <span>{currentUser}<Button onClick={handleLogout}>Logout</Button></span> : <Button onClick={() => navigate("/auth")}>Login/ Sign up</Button>}
            </div>
            <div className='header'>
                <div></div>
                <Link to='/'>
                    <img width="200px" src="https://content.thewosgroup.com/wosus/logo/wos_since_1924_uk_blk_notag.svg" alt="" />
                </Link>
                <Link to='/cart'>
                    <Badge count={+cartLength} >
                        <ShoppingOutlined style={{
                            fontSize: "30px",
                            color: "black"
                        }} />
                    </Badge>
                </Link>
            </div>
            <Navbar />
        </>
    );
};

export default Header;