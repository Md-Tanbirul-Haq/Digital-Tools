
import React from 'react';

const Cart_ = ({ data_ }) => {
    return (
        <div >
            <div className='flex justify-between'>
                <div className='flex gap-2'>

                    <img className='w-[30px]' src={data_.icon} alt="" />
                    <div>
                        <div>{data_.name}</div>
                        <div>${data_.price}</div>
                    </div>
                </div>
                <div>
                    <button className='btn btn-error'>Remove</button>
                </div>
            </div>
        </div >
    );
};

export default Cart_;