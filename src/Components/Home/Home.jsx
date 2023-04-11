import React from 'react';
import Navber from '../Navber/Navber';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import JobCategoryList from '../JobCategoryList/JobCategoryList';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navber></Navber>


            <Outlet></Outlet>
        </div>
    );
};

export default Home;