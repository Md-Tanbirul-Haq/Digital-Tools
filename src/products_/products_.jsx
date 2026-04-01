import React, { use, useState } from 'react';
import Product_ from './product_';
import Cart_ from './cart_';

const Products_ = ({ products_data, cart_data, setCart_data }) => {
    let data = use(products_data)
    const [product_, setProduct] = useState("product")
    return (
        <div>
            <div className='flex flex-col items-center'>
                <h2 className='text-4xl font-bold'>Premium Digital Tools</h2>
                <p>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
                <div className='flex gap-2 my-5'>
                    <button onClick={() => setProduct("product")} className={`btn rounded-full ${product_ == "product" && 'btn-primary'}`}>Products</button>
                    <button onClick={() => setProduct("cart")} className={`btn rounded-full ${product_ == "cart" && 'btn-primary'}`}>Cart ({cart_data.length})</button>
                </div>
            </div>

            {
                product_ == "product" ? <div className='grid grid-cols-1 md:grid-cols-3 gap-5 w-11/12 md:w-8/12 mx-auto  mb-20'>
                    {
                        data.map((data_, i) => (<Product_ key={i} data_={data_} cart_data={cart_data} setCart_data={setCart_data}></Product_>))

                    }
                </div> : <div className='grid grid-cols-1  gap-5 w-11/12  mx-auto border p-5 mb-20'>

                    <h2 className='text-4xl font-bold'>Your Cart :</h2>
                    {
                        cart_data.map((data_, i) => (<Cart_ key={i} data_={data_} ></Cart_>))

                    }


                </div>
            }


        </div>
    );
};

export default Products_;