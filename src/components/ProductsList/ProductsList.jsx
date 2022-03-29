import React, { useContext, useEffect } from 'react';
import { productsContext } from '../../contexts/productsContext';
import ProductCard from './ProductCard';

const ProductsList = () => {
    const { getProducts, products } = useContext(productsContext)
    useEffect(() => {
        getProducts()
    }, [])
    console.log(products)
    return (
        <div className='container'>
            <div className='products-list'>{products.map((item) => <ProductCard key={item.id} item={item} />)}</div>
        </div>
    );
};

export default ProductsList;