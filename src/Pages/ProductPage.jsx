import React, { useEffect, useState } from 'react';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

import Main from '../components/Main/Main';
import Details from '../components/Details/Details';
import Loading from '../components/Loading/Loading';

const Product = () => {

    const [product, setProduct] = useState({});

    // https://cors-anywhere.herokuapp.com/

    useEffect(() => {
        fetch('https://api-test.innoloft.com/product/6781/')
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            })
    }, [])


    const { name, picture, type, description, user, company, categories, businessModels, trl, investmentEffort } = product;

    const main = {name, picture, type, description, user, company}
    const details = {categories, businessModels, trl, investmentEffort}

    if (!product.id) {
        return (
            <Loading />
        )
    }

    return (
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <Main main={main} />
            <Details details={details} />
        </div>
    );
};

export default Product;