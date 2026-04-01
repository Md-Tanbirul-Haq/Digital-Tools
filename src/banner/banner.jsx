
import React from 'react';
import { CiPlay1 } from 'react-icons/ci';
import banner from '../assets/banner.png'

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={banner}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <button className='btn btn-soft btn-primary rounded-full'>New: AI-Powered Tools Available</button>
                        <h1 className="text-5xl font-bold">Supercharge Your Digital Workflow</h1>
                        <p className="py-6">
                            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.Explore Products
                        </p>
                        <div className='flex gap-2'>
                            <button className="btn btn-primary rounded-full">Explore Products</button>
                            <button className="btn btn-outline btn-primary rounded-full"> <CiPlay1></CiPlay1> Watch Demo</button>
                        </div>

                    </div>
                </div>
            </div>

            <div className='bg-blue-500 grid grid-cols-3  justify-items-center text-white py-10 mb-10'>
                <div>
                    <h2 className='text-6xl font-bold'>50K+</h2>
                    <p>Active Users</p>
                </div>
                <div>
                    <h2 className='text-6xl font-bold'>200+</h2>
                    <p>Premium Tools</p>
                </div>
                <div>
                    <h2 className='text-6xl font-bold'>4.9</h2>
                    <p>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
