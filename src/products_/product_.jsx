import React from 'react';

const Product_ = ({ data_, cart_data, setCart_data }) => {

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

                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Access to 10 free tools</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Basic templates</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Community support</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>1 project per month</span>
                        </li>

                    </ul>
                    <div className="mt-6">
                        <button onClick={() => update_cart_data(data_)} className="btn btn-primary btn-block rounded-full">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product_;