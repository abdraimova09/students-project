import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productsContext } from '../../contexts/productsContext';
import Loading from '../Loading/Loading';

const Details = () => {
    const { getOneProduct, oneProduct } = useContext(productsContext)
    const params = useParams()
    useEffect(() => {
        getOneProduct(params.id)
    }, [])
    console.log(oneProduct)
    return oneProduct ? (
        <div>
            details
        </div>
    ) : <Loading />;
};

export default Details;