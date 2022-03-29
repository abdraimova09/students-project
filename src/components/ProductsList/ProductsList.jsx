import { Empty, Input } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { productsContext } from '../../contexts/productsContext';
import Filters from '../Filters/Filters';
import ProductCard from './ProductCard';

const ProductsList = () => {
    const { getProducts, products } = useContext(productsContext)
    const [searchParams, setSearchParams] = useSearchParams()
    const [showFilters, setShowFilters] = useState(false)
    const [searchValue, setSearchValue] = useState("")
    useEffect(() => {
        getProducts()
    }, [])
    useEffect(() => {
        setSearchParams({
            q: searchValue
        })
    }, [searchValue])
    useEffect(() => {
        getProducts()
    }, [searchParams])
    // console.log(products)
    return (
        <div className='container'>
            <div className='products-search'>
                <div style={{ cursor: "pointer" }} onClick={() => setShowFilters(!showFilters)}>{showFilters ? "HIDE FILTERS" : "SHOW FILTERS"}</div>
                <Input.Search placeholder='Search...' style={{ width: "25vw" }} value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
            </div>
            {showFilters ? <Filters /> : null}
            <div className='products-list'>{
                products.length > 0 ?
                    products.map((item) => <ProductCard key={item.id} item={item} />) : <Empty />}</div>
        </div>
    );
};

export default ProductsList;