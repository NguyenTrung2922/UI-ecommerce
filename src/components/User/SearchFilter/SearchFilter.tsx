import React, { useState } from 'react';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import Checkbox from '@mui/material/Checkbox';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

const SearchFilter = () => {
    const [categories, setCategories] = useState([
        { name: 'Nhà Sách Online (130)', checked: false },
        { name: 'Đế giữ điện thoại (109)', checked: false },
        { name: 'Nhà Cửa & Đời Sống (86)', checked: false },
        { name: 'Nhà Sách Online (130)', checked: false },
        { name: 'Đế giữ điện thoại (109)', checked: false },
        { name: 'Nhà Cửa & Đời Sống (86)', checked: false },
        { name: 'Nhà Sách Online (130)', checked: false },
        { name: 'Đế giữ điện thoại (109)', checked: false },
        { name: 'Nhà Cửa & Đời Sống (86)', checked: false },
        { name: 'Nhà Sách Online (130)', checked: false },
        { name: 'Đế giữ điện thoại (109)', checked: false },
        { name: 'Nhà Cửa & Đời Sống (86)', checked: false }
    ]);
    const [locations, setLocations] = useState([
        { name: 'Hà Nội', checked: false },
        { name: 'TP. Hồ Chí Minh', checked: false },
        { name: 'Thái Nguyên', checked: false },
        { name: 'Vĩnh Phúc', checked: false },
        { name: 'Hà Nội', checked: false },
        { name: 'TP. Hồ Chí Minh', checked: false },
        { name: 'Thái Nguyên', checked: false },
        { name: 'Vĩnh Phúc', checked: false },
        { name: 'Hà Nội', checked: false },
        { name: 'TP. Hồ Chí Minh', checked: false },
        { name: 'Thái Nguyên', checked: false },
        { name: 'Vĩnh Phúc', checked: false },
        { name: 'Hà Nội', checked: false },
        { name: 'TP. Hồ Chí Minh', checked: false },
        { name: 'Thái Nguyên', checked: false },
        { name: 'Vĩnh Phúc', checked: false },
    ]);

    const [showAllCategories, setShowAllCategories] = useState(false);
    const [showAllLocations, setShowAllLocations] = useState(false);

    const handleCategoryChange = (index: number) => {
        const newCategories = [...categories];
        newCategories[index].checked = !newCategories[index].checked;
        setCategories(newCategories);
    };

    const handleLocationChange = (index: number) => {
        const newLocations = [...locations];
        newLocations[index].checked = !newLocations[index].checked;
        setLocations(newLocations);
    };

    return (
        <div className='bg-gray-100'>
            <div className='flex items-center py-4'>
                <FilterAltOutlinedIcon style={{ width: '20px', height: '20px' }} />
                <p className='text-sm font-bold'>BỘ LỌC TÌM KIẾM</p>
            </div>

            <div className='pb-4 border-b-2 border-gray-200'>
                <p className='font-light text-sm p-2'>Danh Mục</p>
                {categories.slice(0, showAllCategories ? categories.length : 3).map((category, index) => (
                    <div key={index} className='flex items-center'>
                        <Checkbox checked={category.checked} onChange={() => handleCategoryChange(index)} />
                        <p className='text-sm'>{category.name}</p>
                    </div>
                ))}
                {!showAllCategories && (
                    <button onClick={() => setShowAllCategories(true)}>
                        Thêm <ArrowDropDownOutlinedIcon />
                    </button>
                )}

            </div>
            <div className='py-4 border-b-2 border-gray-200'>

                <p className='font-light text-sm'>Nơi Bán</p>
                {locations.slice(0, showAllLocations ? locations.length : 3).map((location, index) => (
                    <div key={index} className='flex items-center'>
                        <Checkbox checked={location.checked} onChange={() => handleLocationChange(index)} />
                        <p className='text-sm'>{location.name}</p>
                    </div>
                ))}
                {!showAllLocations && (
                    <button onClick={() => setShowAllLocations(true)}>
                        <p className='text-sm'> Thêm <ArrowDropDownOutlinedIcon /></p>
                    </button>
                )}
            </div>
        </div>
    );
};

export default SearchFilter;
