
import React from 'react';
import { CiYoutube } from 'react-icons/ci';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-black text-white'>
            <div className='grid grid-cols-2 md:grid-cols-5 justify-items-center  py-10 px-5'>
                <div>
                    <h1 className='text-4xl font-bold'>DigitalTools</h1>
                    <p>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                </div>
                <div>
                    <h2 className='text-2xl font-bold'>Product</h2>
                    <ul>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Templates</li>
                        <li>Integrations</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-2xl font-bold'>Company</h2>
                    <ul>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Careers</li>
                        <li>Press</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-2xl font-bold'>Resources</h2>
                    <ul>
                        <li>Documentation</li>
                        <li>Help Center</li>
                        <li>Community</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-2xl font-bold'>Social Links</h2>
                    <div className='flex gap-2'>
                        <div><FaFacebook></FaFacebook></div>
                        <div><CiYoutube></CiYoutube></div>
                        <div><FaLinkedin></FaLinkedin></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;