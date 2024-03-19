import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-red-600 w-full px-14 py-3 fixed top-0 z-10">
            <div className='w-full flex items-center justify-between mb-3'>
                <div className='flex items-center'>
                    <div className="text-white font-light text-sm pr-4 cursor-pointer">
                        Kênh người bán
                    </div>
                    <div className='text-white font-light'>
                        |
                    </div>
                    <div className="text-white font-light text-sm px-4 cursor-pointer">
                        Tải ứng dụng
                    </div>
                    <div className='text-white font-light'>
                        |
                    </div>
                    <div className="text-white font-light text-sm px-4 cursor-pointer">
                        <div className='flex'>
                            <FacebookIcon />
                            <InstagramIcon style={{ marginLeft: '5px' }} />

                        </div>

                    </div>
                </div>
                <div className='flex items-center'>
                    <div className="text-white font-light text-sm px-4 cursor-pointer">
                        <Link to='/login'>Đăng nhập</Link>
                    </div>

                    <div className='text-white font-light'>
                        |
                    </div>
                    <div className="text-white font-light text-sm px-4 cursor-pointer">
                        Đăng ký
                    </div>
                </div>
            </div>
            
            <div className="w-full flex justify-between items-center">
                <div className='flex items-center w-1/12'>
                    {/* <MenuIcon className="h-6 w-6 text-white cursor-pointer" /> */}
                    <div className="text-white font-medium text-3xl text-center cursor-pointer">
                    <Link to='/'>HTShops</Link>
                    </div>
                </div>

                <div className="flex justify-between items-center w-9/12 bg-white pr-2">
                    <input type="text" placeholder="Tìm kiếm sản phẩm..." className="w-full py-2 px-4 focus:outline-none" />
                    <SearchIcon className="text-white bg-red-600 p-1 cursor-pointer" style={{ width: '50px', height: '30px', marginLeft: '10px' }} />
                </div>

                <div className="flex justify-center items-center w-1/12">
                    <ShoppingCartIcon className="text-white cursor-pointer" style={{ width: '32px', height: '32px' }} />
                </div>
            </div>

            <ul className="flex space-x-10 w-full justify-center text-white font-light text-sm mt-3">
                <li className="list-none cursor-pointer"><Link to='/product'>Đồ Taobao</Link></li>
                <li className="list-none cursor-pointer"><Link to='/product'>Dép nữ</Link></li>
                <li className="list-none cursor-pointer">Săn Sale Iphone</li>
                <li className="list-none cursor-pointer">Áo phông</li>
                <li className="list-none cursor-pointer">Đơn hàng 0 Đồng</li>
                <li className="list-none cursor-pointer">Vòng cổ</li>
                <li className="list-none cursor-pointer">Vợt cầu lông</li>
                <li className="list-none cursor-pointer">Quần ngắn</li>
            </ul>
        </header>
    );
};

export default Header;
