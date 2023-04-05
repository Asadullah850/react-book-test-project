import React from 'react';
import { Link,useNavigation } from 'react-router-dom';

const Book = ({book}) => {
    const navigation =   useNavigation();
    if (navigation.state === 'loading') {
        return<Loader/>
    }
    // console.log(book);
    const {image,subtitle, price,title,isbn13} = book;
 
    
    return (
        <div>
          <Link to={`../bookId/${isbn13}`}>
             <div className=" overflow-hidden relative rounded-lg transition duration-500 transform hover:-translate-y-2 shadow-lg hover:shadow-2xl">
                <img className=' object-cover h-56 md:h-64 xl:h-80 w-full' src={image} />
                <div className="bg-black bg-opacity-70 font-semibold p-4 text-white inset-0 absolute opacity-0 hover:opacity-100 transition-opacity duration-200 flex flex-col ">
                    <p>{title}</p>
                    <br />
                    <p>{subtitle.substring(0,30)}.....</p>
                    <p className='mt-auto'>Price: ${price}</p>
                </div>
            </div>
          </Link>
        </div>
    );
};

export default Book;