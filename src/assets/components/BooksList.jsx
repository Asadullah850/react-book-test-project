import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Book from './Book';
import Loader from './Loader';

const BooksList = () => {
    // const bookLoaderData = useLoaderData();
    const {books} = useLoaderData();
    const navigation =   useNavigation();
    if (navigation.state === 'loading') {
        return<Loader/>
    }
    // console.log(books);
    return (
        <div className='my-container'>
            <div className="grid gap-4 mb-8 lg:grid-cols-4 md:grid-cols-2">
                {
                    books.map(book => <Book book={book} key={book.isbn13}></Book>)
                }
            </div>
        </div>
    );
};

export default BooksList;