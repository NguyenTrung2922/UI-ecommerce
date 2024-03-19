import React from "react";

const ListProducts = () => {
    const products = [
        { id: 1, name: 'Tai nghe không dây', sale: 50, oldPrice: 3000000, sold: 200, image: 'https://down-vn.img.susercontent.com/file/sg-11134301-7rcee-ls6yb4nuwvmw63', location: 'Hà Nội' },
        { id: 2, name: 'Laptop hiệu suất cao', sale: 30, oldPrice: 15000000, sold: 150, image: 'https://down-vn.img.susercontent.com/file/sg-11134301-7rcee-ls6yb4nuwvmw63', location: 'TP Hồ Chí Minh' },
        { id: 3, name: 'Điện thoại thông minh màn hình lớn', sale: 20, oldPrice: 10000000, sold: 300, image: 'https://down-vn.img.susercontent.com/file/sg-11134301-7rcee-ls6yb4nuwvmw63', location: 'Đà Nẵng' },
        { id: 4, name: 'Máy ảnh kỹ thuật số chuyên nghiệp', sale: 15, oldPrice: 20000000, sold: 80, image: 'https://down-vn.img.susercontent.com/file/sg-11134301-7rcee-ls6yb4nuwvmw63', location: 'Hải Phòng' },
        { id: 5, name: 'Đồng hồ thông minh tích hợp GPS', sale: 25, oldPrice: 5000000, sold: 120, image: 'https://down-vn.img.susercontent.com/file/sg-11134301-7rcee-ls6yb4nuwvmw63', location: 'Cần Thơ' },
        { id: 6, name: 'Máy tính bảng cỡ lớn', sale: 10, oldPrice: 8000000, sold: 90, image: 'https://down-vn.img.susercontent.com/file/sg-11134301-7rcee-ls6yb4nuwvmw63', location: 'Nha Trang' },
        { id: 7, name: 'Ổ cứng SSD dung lượng cao', sale: 40, oldPrice: 4000000, sold: 200, image: 'https://down-vn.img.susercontent.com/file/sg-11134301-7rcee-ls6yb4nuwvmw63', location: 'Bình Dương' },
        { id: 8, name: 'Loa Bluetooth di động', sale: 35, oldPrice: 2000000, sold: 250, image: 'https://down-vn.img.susercontent.com/file/sg-11134301-7rcee-ls6yb4nuwvmw63', location: 'Hưng Yên' },
        { id: 9, name: 'Bàn phím cơ chơi game', sale: 20, oldPrice: 1500000, sold: 180, image: 'https://down-vn.img.susercontent.com/file/sg-11134301-7rcee-ls6yb4nuwvmw63', location: 'Quảng Ninh' },
        { id: 10, name: 'Chuột không dây đa năng', sale: 45, oldPrice: 1000000, sold: 220, image: 'https://down-vn.img.susercontent.com/file/sg-11134301-7rcee-ls6yb4nuwvmw63', location: 'Vũng Tàu' },
        { id: 11, name: 'Màn hình máy tính độ phân giải cao', sale: 25, oldPrice: 5000000, sold: 130, image: 'https://down-vn.img.susercontent.com/file/sg-11134301-7rcee-ls6yb4nuwvmw63', location: 'Thanh Hóa' },
        { id: 12, name: 'Ghế gaming thoáng khí', sale: 30, oldPrice: 3000000, sold: 110, image: 'https://down-vn.img.susercontent.com/file/sg-11134301-7rcee-ls6yb4nuwvmw63', location: 'Nghệ An' },
        { id: 13, name: 'Webcam HD cho streaming', sale: 20, oldPrice: 2000000, sold: 140, image: 'https://down-vn.img.susercontent.com/file/sg-11134301-7rcee-ls6yb4nuwvmw63', location: 'Hà Tĩnh' },
        { id: 14, name: 'Router Wi-Fi tốc độ cao', sale: 35, oldPrice: 2500000, sold: 210, image: 'https://down-vn.img.susercontent.com/file/sg-11134301-7rcee-ls6yb4nuwvmw63', location: 'Lâm Đồng' },
        { id: 15, name: 'Đèn LED thông minh điều khiển từ xa', sale: 40, oldPrice: 1200000, sold: 300, image: 'https://down-vn.img.susercontent.com/file/sg-11134301-7rcee-ls6yb4nuwvmw63', location: 'Bắc Ninh' },
        { id: 16, name: 'Quạt làm mát không tiếng ồn', sale: 20, oldPrice: 1500000, sold: 160, image: 'https://down-vn.img.susercontent.com/file/sg-11134301-7rcee-ls6yb4nuwvmw63', location: 'Phú Thọ' },
        { id: 17, name: 'Máy lọc không khí thông minh', sale: 15, oldPrice: 6000000, sold: 70, image: 'https://down-vn.img.susercontent.com/file/sg-11134301-7rcee-ls6yb4nuwvmw63', location: 'Hải Dương' },
        { id: 18, name: 'Nồi cơm điện cao cấp', sale: 25, oldPrice: 2500000, sold: 200, image: 'https://down-vn.img.susercontent.com/file/sg-11134301-7rcee-ls6yb4nuwvmw63', location: 'Gia Lai' },
        { id: 19, name: 'Máy ép trái cây tự động', sale: 30, oldPrice: 3000000, sold: 100, image: 'https://down-vn.img.susercontent.com/file/sg-11134301-7rcee-ls6yb4nuwvmw63', location: 'Quảng Nam' },
        { id: 20, name: 'Robot hút bụi thông minh', sale: 50, oldPrice: 10000000, sold: 250, image: 'https://down-vn.img.susercontent.com/file/sg-11134301-7rcee-ls6yb4nuwvmw63', location: 'Bình Thuận' }
    ];


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
        <div className="grid grid-cols-5 gap-2">
            {products.map(product => (
                <div key={product.id} className="category-item cursor-pointer border border-gray-200 hover:-translate-y-1 hover:shadow-lg">
                    <img src={product.image} alt={product.name} className="w-full h-2/4" />
                    <p className="text-start my-2 mx-1 text-sm h-10">{truncateName(product.name, 40)}</p>
                    <div className="flex items-end justify-between mx-2">
                        <p className="text-start text-xs line-through">{formatPrice(product.oldPrice)}</p>
                        <p className="bg-red-500 text-white" style={{ fontSize:'10px' }}>{product.sale}%</p>
                    </div>

                    <div className="flex items-end my-2 mx-2">
                        <p style={{ fontSize: '10px' }} className="text-red-400">đ</p>
                        <p className="text-md text-red-600">{formatPrice(product.oldPrice - ((product.oldPrice * product.sale) / 100))}</p>
                    </div>

                    <div>
                    <p className="text-start text-end  mx-2" style={{ fontSize: '12px' }}>{product.location}</p>
                    </div>
                </div>
            ))}
        </div>
    );
    return productGrid;
}

export default ListProducts;
