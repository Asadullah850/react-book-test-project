import React from 'react';
import Lottie from "lottie-react";
import readerHomeImg from '../reading1.json'
import { Link } from 'react-router-dom';
import { BuildingLibraryIcon, BuildingStorefrontIcon } from '@heroicons/react/24/solid';
const Home = () => {
    return (
        <div className="my-container flex  flex-col-reverse md:flex lg:flex lg:justify-between md:justify-between pt-4">
            <div className="lg:mt-10 lg:p-20 p-6 lg:w-1/2">
                <h1 className=" text-xl font-bold ">More read More Solution</h1>
                <p className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptatibus maxime culpa tempore porro adipisci nisi vel est reprehenderit explicabporro adipisci nisi vel est reprehenderit explicabo.</p>
                <button className='button-blue p-3'><Link to='/books'>buy now <BuildingLibraryIcon className='py-1 inline-block w-6'></BuildingLibraryIcon> </Link></button> 
                <button className='button-white'>button</button>
            </div>
            <div className="lg:w-1/2 w-full">
            <Lottie animationData={readerHomeImg} loop={true} />
            </div>
        </div>
    );
};

export default Home;