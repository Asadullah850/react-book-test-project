import React, { useState } from 'react';
import { BoltIcon, Bars3BottomRightIcon,XMarkIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
    const [isManue, setIsmanue]= useState(false);
    return (
        
        <div className='w-[95%] py-2'>
            <div className=" max-sm:hidden max-md:hidden">
            <div className="flex py-3 justify-between mx-auto ">
                <div className="flex mx-3">
                    <BoltIcon className=" text-blue-600 w-12 "></BoltIcon>
                    <Link to="/" className=' font-semibold py-2 tracking-wide text-blue-800 text-3xl mx-2 uppercase'>book-house</Link>
                </div>
                <div className="flex list-none ">
                    <NavLink to='/'     className={({isActive}) =>(isActive ? 'my-activeNav-li' : 'my-defaultNav-li')}>Home</NavLink>
                    <NavLink to='books' className={({isActive}) =>(isActive ? 'my-activeNav-li' : 'my-defaultNav-li')}>Books</NavLink>
                    <NavLink to='about' className={({isActive}) =>(isActive ? 'my-activeNav-li' : 'my-defaultNav-li')}>About</NavLink>
                </div>
            </div>
            </div>
            {/* mobile */}
          
            <div className="flex py-3 justify-between lg:hidden mx-auto">
              
                <div className="flex">
                        <BoltIcon className="text-blue-600 h-8"></BoltIcon>
                        <Link to="/" className=' font-semibold tracking-wide text-blue-800 mx-2 uppercase'>book-house</Link>
                </div>
                <div className='w-40 ' onClick={()=>setIsmanue(!isManue)} >
                    <span>{isManue === true ? <XMarkIcon  className='text-blue-600 w-8 ml-36'></XMarkIcon> 
                     :      
                    <Bars3BottomRightIcon className='text-blue-600 w-8 ml-36'></Bars3BottomRightIcon>}
                    </span>
                </div>
              {isManue && (
                <>
                <div className="flex flex-col absolute right-4 mt-10 bg-blue-100  ">

                    <div className="flex flex-col transform transition delay-150 duration-100 ">
                        <NavLink to='/'    className={({isActive}) =>(isActive ? 'my-activeNav-li' : 'my-defaultNav-li')}>Home</NavLink>
                        <NavLink to='books' className={({isActive}) =>(isActive ? 'my-activeNav-li' : 'my-defaultNav-li')}>Books</NavLink>
                        <NavLink to='about' className={({isActive}) =>(isActive ? 'my-activeNav-li' : 'my-defaultNav-li')}>About</NavLink>
                    </div>
                </div>

                </>
              )}
                
            </div>

        </div>
    );
};

export default Header;