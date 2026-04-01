import React from 'react';
import user from '../assets/user.png'
import package_ from '../assets/package.png'
import rocket from '../assets/rocket.png'

const Get_started = () => {
    return (
        <div className='mb-10'>
            <div className='text-center mb-10'> <h1 className='text-4xl font-bold'>Get Started in 3 Steps</h1>
                <p>Start using premium digital tools in minutes, not hours.</p></div>
            <div className='flex gap-5 items-center justify-center'>
                <div className="card bg-base-100 w-96 shadow-sm">
                    <div className='flex flex-row-reverse card-body text-white'>
                        <div className='bg-blue-700 w-[30px] h-[30px] border rounded-full flex items-center justify-center'>01</div>
                    </div>
                    <figure className="px-10 pt-10">
                        <img
                            src={user}

                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Create Account</h2>
                        <p>Sign up for free in seconds. No credit card required to get started.</p>

                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-sm">
                    <div className='flex flex-row-reverse card-body text-white'>
                        <div className='bg-blue-700 w-[30px] h-[30px] border rounded-full flex items-center justify-center'>02</div>
                    </div>
                    <figure className="px-10 pt-10">
                        <img
                            src={package_}

                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Choose Products</h2>
                        <p>Browse our catalog and select the tools that fit your needs.</p>

                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-sm">
                    <div className='flex flex-row-reverse card-body text-white'>
                        <div className='bg-blue-700 w-[30px] h-[30px] border rounded-full flex items-center justify-center'>03</div>
                    </div>
                    <figure className="px-10 pt-10">
                        <img
                            src={rocket}

                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Start Creating</h2>
                        <p>Download and start using your premium tools immediately.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Get_started;
