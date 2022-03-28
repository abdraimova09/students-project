import React, { useState, useEffect, useContext } from 'react';
import { List, message, Avatar } from 'antd';
import VirtualList from 'rc-virtual-list';
import { productsContext } from '../../contexts/productsContext';
const AdminProducts = () => {
    const { products, getProducts } = useContext(productsContext)
    useEffect(() => {
        getProducts()
    }, [])
    console.log(products)
    return (
        <List>
            <VirtualList
                data={products}
                itemHeight={47}
                itemKey="email"
            >
                {item => (
                    <List.Item key={item.id}>
                        <List.Item.Meta
                            avatar={<Avatar src={item.image1} />}
                            title={<a href='#'>{item.brand},{item.model}</a>}
                        />
                        <div>Content</div>
                    </List.Item>
                )}
            </VirtualList>
        </List>
    );
};

export default AdminProducts;