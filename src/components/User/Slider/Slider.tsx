import React, { useState, useEffect } from 'react';
import { SliderProps } from './type';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
const Slider: React.FC<SliderProps> = ({ images, width, height }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((currentImageIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(timer);
    }, [currentImageIndex, images.length]);

    const goToPrevious = () => {
        setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
    };

    const goToNext = () => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
    };

    return (
        <div className={`relative ${width} ${height}`}>
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Slide ${index}`}
                    className={`${index === currentImageIndex ? 'block' : 'hidden'} max-w-full max-h-full absolute inset-0 w-full h-full object-cover`}
                />
            ))}
            <button
                className="absolute top-1/2 left-10 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white p-1 rounded-full"
                onClick={goToPrevious}
            >
                <ChevronLeftIcon className="h-6 w-6" />
            </button>
            <button
                className="absolute top-1/2 right-10 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white p-1 rounded-full"
                onClick={goToNext}
            >
                <ChevronRightIcon className="h-6 w-6" />
            </button>
        </div>
    );
};

export default Slider;
