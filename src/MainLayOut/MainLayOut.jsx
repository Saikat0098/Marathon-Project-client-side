import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayOut = () => {
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
           <div>
           <Outlet></Outlet>
           </div>
        </div>
    );
};

export default MainLayOut;