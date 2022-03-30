import React, { useContext } from 'react';
import { Card } from 'antd';
import { EllipsisOutlined, HeartOutlined, ShoppingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { cartContext } from '../../contexts/cartContext';

const { Meta } = Card;

const ProductCard = ({ item }) => {
    const { addProductToCart } = useContext(cartContext)
    return (
        <Card
            style={{ width: "280px", margin: "10px" }}
            cover={
                <img
                    alt="example"
                    src={item.image1}
                />
            }
            actions={[
                <HeartOutlined style={{ fontSize: "25px", color: "black" }} />,
                <ShoppingOutlined onClick={() => addProductToCart(item)} style={{ fontSize: "25px", color: "black" }} />,
                <Link to={`/products/${item.id}`}><EllipsisOutlined style={{ fontSize: "25px", color: "black" }} key="ellipsis" /></Link>
                ,
            ]}
        >
            <Meta
                title={item.brand}
                description={
                    <>
                        <h3>{item.model}</h3>
                        <h2>{"$" + item.price}</h2>
                    </>
                }
            />
        </Card>
    );
};

export default ProductCard;