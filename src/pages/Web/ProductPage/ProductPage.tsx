import React from 'react';
import SearchFilter from '../../../components/User/SearchFilter/SearchFilter';
import { Outlet } from 'react-router-dom';
const ProductPage = () => {
    return (
        <div className='w-full px-14 py-3 flex bg-gray-100'>
            <div className='w-2/12 h-42'>
                <SearchFilter />
            </div>
            <div className='w-10/12 h-42 ml-5'>
                <Outlet />
            </div>
        </div>

    )
}

export default ProductPage