import React, { createContext } from 'react';
import Navber from '../Navber/Navber';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import JobCategoryList from '../JobCategoryList/JobCategoryList';
import Footer from '../Footer/Footer';
export const JobContext = createContext({})


const Home = () => {
    const jobDatas = useLoaderData();
    return (
        <div>
            <JobContext.Provider value={jobDatas}>
                <Navber></Navber>

                <Outlet></Outlet>
            </JobContext.Provider>

        </div>
    );
};

export default Home;