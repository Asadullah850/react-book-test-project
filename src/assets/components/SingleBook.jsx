import React, { useState } from 'react';
import { useLoaderData} from 'react-router-dom';

const SingleBook = () => {
    
    const singleBook = useLoaderData();
    const [fold, setFold] = useState(false)
    // console.log(singleBook.subtitle);
    const {year, title, subtitle, publisher, price, pages, image, desc, authors} = singleBook;
    return (
        <div className='my-container pt-5'>
            <div className="lg:flex justify-between">
                <div className="lg:w-1/2">
                    <img className=' object-cover w-full' src={image} />
                </div>
                <div className="lg:w-1/2 lg:pt-16">
                    <h1 className=' text-3xl font-bold'>{title}</h1>
                    <p className='mt-2 font-semibold'>Authors: {authors}</p>
                    <p className=' font-semibold'>Publisher: {publisher}</p>
                    <p className=' font-semibold'>Year: {year}</p>
                    <p className=' font-semibold'>Pages: {pages}</p>
                    {fold ?(
                    <>
                    <p className='my-5'>{desc}
                    <span className='cursor-pointer text-blue-600' onClick={()=> setFold(!fold)}>Read Less</span>
                    </p>
                    </>
                    ) : (
                        <>
                        <p className='my-5 '>{desc.substring(0, 150)}....
                        <span className='inline-block cursor-pointer text-blue-600' onClick={()=> setFold(!fold )}>Read More</span>
                        </p>
                        </>
                    )}
                    <div className="">
                        <button className='button-blue py-5 px-6'>Buy Now</button>
                        <button className='mx-5 font-bold text-2xl border-[1px] p-5 shadow-lg'>Price: {price}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBook;