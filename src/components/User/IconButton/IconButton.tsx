import React from 'react';
import { Link } from 'react-router-dom'; // or use <a> if not using react-router
import { IconLinkProps } from './type';

const IconButton: React.FC<IconLinkProps> = ({ imageUrl, title, url }) => {
    return (
        <Link
            to={url}
            className="flex flex-col items-center text-center no-underline max-w-32 transition duration-150 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
        >
            <div className="p-2 border rounded-lg transition duration-150 ease-in-out">
                <img src={imageUrl} alt={title} className="w-10 h-10" />
            </div>
            <div className="mt-2 text-sm font-medium">{title}</div>
        </Link>

    );
};

export default IconButton;
