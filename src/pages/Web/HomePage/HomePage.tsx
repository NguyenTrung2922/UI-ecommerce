import React from 'react';
import { Link } from 'react-router-dom';
import Slider from '../../../components/User/Slider/Slider';
import IconButton from '../../../components/User/IconButton/IconButton';
import ShipImg from '../../../assets/images/shipped.png'
import PhoneImg from '../../../assets/images/phone-call.png'
import InternetImg from '../../../assets/images/provider.png'
import VoucherImg from '../../../assets/images/voucher.png'
import SaleImg from '../../../assets/images/sale.png'
const HomePage = () => {
    const images = [
        'https://cf.shopee.vn/file/vn-50009109-508b1467131bfd7543a0d7fcdccaa88b_xxhdpi',
        'https://cf.shopee.vn/file/vn-50009109-77e126cb6193f5a137c5dede39f53626_xxhdpi',
        'https://cf.shopee.vn/file/vn-50009109-06e0e1a44edd1d87585a0e7bf66b48da_xxhdpi'
    ]

    const categories = [
        { id: 1, name: 'Thời Trang Nam', image: 'https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn' },
        { id: 2, name: 'Điện Thoại & Phụ Kiện', image: 'https://down-vn.img.susercontent.com/file/31234a27876fb89cd522d7e3db1ba5ca_tn' },
        { id: 3, name: 'Thiết Bị Điện Tử', image: 'https://down-vn.img.susercontent.com/file/978b9e4cb61c611aaaf58664fae133c5_tn' },
        { id: 4, name: 'Máy Tính & Laptop', image: 'https://down-vn.img.susercontent.com/file/c3f3edfaa9f6dafc4825b77d8449999d_tn' },
        { id: 5, name: 'Máy Ảnh & Máy Quay Phim', image: 'https://down-vn.img.susercontent.com/file/ec14dd4fc238e676e43be2a911414d4d_tn' },
        { id: 6, name: 'Đồng Hồ', image: 'https://down-vn.img.susercontent.com/file/86c294aae72ca1db5f541790f7796260_tn' },
        { id: 7, name: 'Giày Dép Nam', image: 'https://down-vn.img.susercontent.com/file/74ca517e1fa74dc4d974e5d03c3139de_tn' },
        { id: 9, name: 'Mẹ & Bé', image: 'https://down-vn.img.susercontent.com/file/099edde1ab31df35bc255912bab54a5e_tn' },
        { id: 10, name: 'Thời Trang Nam', image: 'https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn' },
        { id: 11, name: 'Điện Thoại & Phụ Kiện', image: 'https://down-vn.img.susercontent.com/file/31234a27876fb89cd522d7e3db1ba5ca_tn' },
        { id: 12, name: 'Thiết Bị Điện Tử', image: 'https://down-vn.img.susercontent.com/file/978b9e4cb61c611aaaf58664fae133c5_tn' },
        { id: 13, name: 'Máy Tính & Laptop', image: 'https://down-vn.img.susercontent.com/file/c3f3edfaa9f6dafc4825b77d8449999d_tn' },
        { id: 14, name: 'Máy Ảnh & Máy Quay Phim', image: 'https://down-vn.img.susercontent.com/file/ec14dd4fc238e676e43be2a911414d4d_tn' },
        { id: 15, name: 'Đồng Hồ', image: 'https://down-vn.img.susercontent.com/file/86c294aae72ca1db5f541790f7796260_tn' },
        { id: 16, name: 'Giày Dép Nam', image: 'https://down-vn.img.susercontent.com/file/74ca517e1fa74dc4d974e5d03c3139de_tn' },
        { id: 17, name: 'Mẹ & Bé', image: 'https://down-vn.img.susercontent.com/file/099edde1ab31df35bc255912bab54a5e_tn' },
    ];

    const productSale = [
        { id: 1, name: 'Thời Trang Nam', sale: 50, oldPrice: 3000000, sold: 200, image: 'https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn' },
        { id: 2, name: 'Điện Thoại & Phụ Kiện', sale: 100, oldPrice: 4500000, sold: 200, image: 'https://down-vn.img.susercontent.com/file/31234a27876fb89cd522d7e3db1ba5ca_tn' },
        { id: 3, name: 'Thiết Bị Điện Tử', sale: 20, oldPrice: 302000, sold: 200, image: 'https://down-vn.img.susercontent.com/file/978b9e4cb61c611aaaf58664fae133c5_tn' },
        { id: 4, name: 'Máy Tính & Laptop', sale: 17, oldPrice: 120000, sold: 200, image: 'https://down-vn.img.susercontent.com/file/c3f3edfaa9f6dafc4825b77d8449999d_tn' },
        { id: 5, name: 'Máy Ảnh & Máy Quay Phim', sale: 80, oldPrice: 100000, sold: 200, image: 'https://down-vn.img.susercontent.com/file/ec14dd4fc238e676e43be2a911414d4d_tn' },
        { id: 6, name: 'Đồng Hồ', sale: 90, oldPrice: 200000, sold: 200, image: 'https://down-vn.img.susercontent.com/file/86c294aae72ca1db5f541790f7796260_tn' },
        { id: 7, name: 'Giày Dép Nam', sale: 5, oldPrice: 1001000, sold: 200, image: 'https://down-vn.img.susercontent.com/file/74ca517e1fa74dc4d974e5d03c3139de_tn' },
    ];

    const products = [
        { id: 1, name: 'Tws Tai Nghe Chụp Tai bluetooth 5.2 Âm Thanh hifi Kiểu Dáng Thể Thao', price: 100000, image: 'https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lq45havxersl23' },
        { id: 2, name: '👟Giày Nam👟Giày Thể Thao Nam Thoáng Khí Thời Trang Mùa', price: 100000, image: 'https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lq0e3tlqgchha0' },
        { id: 3, name: 'Tws Tai Nghe Chụp Tai bluetooth 5.2 Âm Thanh hifi Kiểu Dáng Thể Thao', price: 100000, image: 'https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lq45havxersl23' },
        { id: 4, name: '👟Giày Nam👟Giày Thể Thao Nam Thoáng Khí Thời Trang Mùa', price: 100000, image: 'https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lq0e3tlqgchha0' },
        { id: 5, name: 'Tws Tai Nghe Chụp Tai bluetooth 5.2 Âm Thanh hifi Kiểu Dáng Thể Thao', price: 100000, image: 'https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lq45havxersl23' },
        { id: 6, name: '👟Giày Nam👟Giày Thể Thao Nam Thoáng Khí Thời Trang Mùa', price: 100000, image: 'https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lq0e3tlqgchha0' },
        { id: 7, name: 'Tws Tai Nghe Chụp Tai bluetooth 5.2 Âm Thanh hifi Kiểu Dáng Thể Thao', price: 100000, image: 'https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lq45havxersl23' },
        { id: 8, name: '👟Giày Nam👟Giày Thể Thao Nam Thoáng Khí Thời Trang Mùa', price: 100000, image: 'https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lq0e3tlqgchha0' },
        { id: 9, name: 'Tws Tai Nghe Chụp Tai bluetooth 5.2 Âm Thanh hifi Kiểu Dáng Thể Thao', price: 100000, image: 'https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lq45havxersl23' },
        { id: 10, name: '👟Giày Nam👟Giày Thể Thao Nam Thoáng Khí Thời Trang Mùa', price: 100000, image: 'https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lq0e3tlqgchha0' },
        { id: 11, name: 'Tws Tai Nghe Chụp Tai bluetooth 5.2 Âm Thanh hifi Kiểu Dáng Thể Thao', price: 100000, image: 'https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lq45havxersl23' },
        { id: 12, name: '👟Giày Nam👟Giày Thể Thao Nam Thoáng Khí Thời Trang Mùa', price: 100000, image: 'https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lq0e3tlqgchha0' },
        { id: 13, name: 'Tws Tai Nghe Chụp Tai bluetooth 5.2 Âm Thanh hifi Kiểu Dáng Thể Thao', price: 100000, image: 'https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lq45havxersl23' },
        { id: 14, name: '👟Giày Nam👟Giày Thể Thao Nam Thoáng Khí Thời Trang Mùa', price: 100000, image: 'https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lq0e3tlqgchha0' },
        { id: 15, name: 'Tws Tai Nghe Chụp Tai bluetooth 5.2 Âm Thanh hifi Kiểu Dáng Thể Thao', price: 100000, image: 'https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lq45havxersl23' },
        { id: 16, name: '👟Giày Nam👟Giày Thể Thao Nam Thoáng Khí Thời Trang Mùa', price: 100000, image: 'https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lq0e3tlqgchha0' },
        { id: 17, name: 'Tws Tai Nghe Chụp Tai bluetooth 5.2 Âm Thanh hifi Kiểu Dáng Thể Thao', price: 100000, image: 'https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lq45havxersl23' },
        { id: 18, name: '👟Giày Nam👟Giày Thể Thao Nam Thoáng Khí Thời Trang Mùa', price: 100000, image: 'https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lq0e3tlqgchha0' },
        { id: 19, name: 'Tws Tai Nghe Chụp Tai bluetooth 5.2 Âm Thanh hifi Kiểu Dáng Thể Thao', price: 100000, image: 'https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lq45havxersl23' },
        { id: 20, name: '👟Giày Nam👟Giày Thể Thao Nam Thoáng Khí Thời Trang Mùa', price: 100000, image: 'https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lq0e3tlqgchha0' },
        { id: 21, name: 'Tws Tai Nghe Chụp Tai bluetooth 5.2 Âm Thanh hifi Kiểu Dáng Thể Thao', price: 100000, image: 'https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lq45havxersl23' },
        { id: 22, name: '👟Giày Nam👟Giày Thể Thao Nam Thoáng Khí Thời Trang Mùa', price: 100000, image: 'https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lq0e3tlqgchha0' },
        { id: 23, name: 'Tws Tai Nghe Chụp Tai bluetooth 5.2 Âm Thanh hifi Kiểu Dáng Thể Thao', price: 100000, image: 'https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lq45havxersl23' },
        { id: 24, name: '👟Giày Nam👟Giày Thể Thao Nam Thoáng Khí Thời Trang Mùa', price: 100000, image: 'https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lq0e3tlqgchha0' },
    ];

    const categoryGrid = (
        <div className="grid grid-cols-8">
            {categories.map(category => (
                <div key={category.id} className="category-item cursor-pointer border border-gray-100 hover:shadow-lg">
                    <img src={category.image} alt={category.name} className=" object-cover" />
                    <p className="text-center my-2 text-sm">{category.name}</p>
                </div>
            ))}
        </div>
    );

    const formatPrice = (price: number) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    const truncateName = (name: string, maxLength: number) => {
        if (name.length <= maxLength) {
            return name;
        } else {
            return name.substring(0, maxLength) + "...";
        }
    };


    const productGrid = (
        <div className="grid grid-cols-7">
            {productSale.map(productSale => (
                <div key={productSale.id} className="category-item cursor-pointer p-4 border border-gray-100">
                    <p className='text-red-600 text-center font-bold'>Giảm giá: {productSale.sale}%</p>
                    <img src={productSale.image} alt={productSale.name} className="w-24 h-24" />
                    <div>
                        <p className="text-start my-2 text-xs line-through">{formatPrice(productSale.oldPrice)} đ</p>

                        <p className="text-md text-red-600">{formatPrice(productSale.oldPrice - ((productSale.oldPrice * productSale.sale) / 100))} đ</p>
                    </div>

                </div>
            ))}
        </div>
    );

    const listProductGrid = (
        <div className="grid grid-cols-6 gap-2">
            {products.map(products => (
                <div key={products.id} className="category-item p-4 cursor-pointer border border-gray-200 hover:-translate-y-1 hover:shadow-lg">
                    <img src={products.image} alt={products.name} className=" object-cover" />
                    <p className="text-start my-2 text-sm">{truncateName(products.name, 40)}</p>
                    <div>
                        <p className="text-md text-red-600">{formatPrice(products.price)} đ</p>

                    </div>

                </div>
            ))}
        </div>
    );

    return (
        <div className='w-full '>
            <div className='flex h-72 px-14 mt-8 '>
                <Slider images={images} width="w-8/12" height="h-full" />
                <div className='w-4/12 ml-1'>
                    <img className='h-2/4 pb-0.5 w-full' src="https://cf.shopee.vn/file/vn-50009109-d7a9ffc3046eacae1304fa2af583ecde_xhdpi" alt="" />
                    <img className='h-2/4 pt-0.5 w-full' src="https://cf.shopee.vn/file/vn-50009109-ab44684992bb5b6103101d204feb62da_xhdpi" alt="" />
                </div>
            </div>

            <div className='flex justify-between items-center my-8 px-14'>
                <IconButton
                    imageUrl={VoucherImg}
                    title='Voucher Giảm Đến 500.000Đ'
                    url='/product'
                />
                <IconButton
                    imageUrl={ShipImg}
                    title='Miễn Phí Ship- Có Shopee'
                    url='/product'
                />
                <IconButton
                    imageUrl={InternetImg}
                    title='Shopee Siêu Rẻ'
                    url='/product'
                />
                <IconButton
                    imageUrl={PhoneImg}
                    title='Mã Giảm Giá'
                    url='/product'
                />
                <IconButton
                    imageUrl={SaleImg}
                    title='Hàng Hiệu Outlet Giảm 50%'
                    url='/product'
                />

                <IconButton
                    imageUrl={InternetImg}
                    title='Shopee Siêu Rẻ'
                    url='/product'
                />

                <IconButton
                    imageUrl={VoucherImg}
                    title='Voucher Giảm Đến 500.000Đ'
                    url='/product'
                />
            </div>

            <div className='bg-gray-100 w-full py-8 px-14'>
                <div className='bg-white'>
                    <p className='text-xl font-medium p-4'>Danh mục</p>
                    {categoryGrid}
                </div>

            </div>

            <div className='bg-gray-100 w-full px-14'>
                <div className='bg-white'>
                    <p className='text-xl font-medium p-4'>Giảm giá SỐC</p>
                    {productGrid}
                </div>
            </div>

            <div className='bg-gray-100 w-full py-8 px-14 '>
                <img className='w-full' src="https://cf.shopee.vn/file/sg-50009109-ab3eabaf0a31c5381002e33707bee9c7" alt="" />
            </div>

            <div className='bg-gray-100 w-full px-14'>
                <div className='bg-white'>
                    <p className='text-xl font-medium p-4'>Tìm kiếm nhiều nhất</p>
                    {productGrid}
                </div>
            </div>

            <div className='bg-gray-100 w-full py-8 px-14'>
                <div className='bg-white'>
                    <p className='text-xl font-medium p-4 text-center mb-1 border-b-4 border-red-600 text-red-600'>Gợi ý hôm nay</p>
                    {listProductGrid}
                </div>
            </div>

        </div>

    )
}

export default HomePage