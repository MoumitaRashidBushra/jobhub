import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const { error, status } = useRouteError();
    return (
        <div className='text-center mt-10 pt-6'>
            <p>{error.message}</p>
            <p className='text-5xl font-semibold'>404</p>
            <p className='text-5xl font-semibold'>Page not found</p>
        </div>
    );
};

export default ErrorPage;