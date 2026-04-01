
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
        </div>
    );
};

export default Banner;
