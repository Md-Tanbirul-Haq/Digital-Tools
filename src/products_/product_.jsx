import React from 'react';
import { AiOutlineCheck } from "react-icons/ai";
const Product_ = ({ data_, cart_data, setCart_data, total, setTotal }) => {

    const update_cart_data = (data) => {
        setCart_data([...cart_data, data])
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-sm">
                <div className="card-body">
                    <div className='flex flex-row-reverse'>
                        <div className='bg-green-200 px-3 py-1 rounded-4xl'>{data_.tag}</div>
                    </div>

                    <img className='w-[30px] h-[30px]' src={data_.icon} alt="" />
                    <h2 className="text-3xl font-bold">{data_.name}</h2>
                    <p>{data_.description}</p>
                    <span className="text-xl">${data_.price}/{data_.period}</span>

                    <ul>
                        {data_.features.map((item, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <AiOutlineCheck className="text-green-500" /> {item}
                            </li>
                        ))}
                    </ul>
                    <div className="mt-6">
                        <button onClick={() => {
                            update_cart_data(data_)
                            setTotal(total + data_.price)

                        }} className="btn btn-primary btn-block rounded-full">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product_;