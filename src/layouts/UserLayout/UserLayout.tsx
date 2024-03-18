import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Header from '../../components/User/Header/Header';
import Footer from '../../components/User/Footer/Footer';

const UserLayout = () => {
    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        // After your components mount, you check the height of the header
        const header: any = document.querySelector('header'); // Adjust if your header has a different tag or class
        if (header) {
            setHeaderHeight(header.offsetHeight);
        }
        // Update the padding if the window resizes
        const handleResize = () => {
            setHeaderHeight(header.offsetHeight);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <div>
            <Header />
            <div style={{ paddingTop: `${headerHeight}px` }}>
                <Outlet />
            </div>
            <Footer />
        </div>

    )
}

export default UserLayout