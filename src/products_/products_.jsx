import React, { use } from 'react';
import Product_ from './product_';

const Products_ = ({ products_data }) => {
    let data = use(products_data)
    console.log(data)
    return (
        <div>
            <div className='flex flex-col items-center'>
                <h2 className='text-4xl font-bold'>Premium Digital Tools</h2>
                <p>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
                <div className='flex gap-2 my-5'>
                    <button className='btn rounded-full'>Products</button>
                    <button className='btn rounded-full'>Cart (0)</button>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 w-11/12 md:w-8/12 mx-auto  mb-20'>
                {
                    data.map((data_, i) => (<Product_ key={i} data_={data_}></Product_>))

                }
            </div>

        </div>
    );
};

export default Products_;