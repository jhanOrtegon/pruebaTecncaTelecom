import React from 'react'
import { Route, Routes } from 'react-router-dom';
import LoginV from '../views/Login/index';
import NavbarV from '../views/Ui/Navbar/index';
import MarvelV from '../views/Marvel/index';
import SearchV from '../views/Search/index';
import HeroeV from '../common/components/Heroe/index';

const Dashboard = () => {
    return (
        <>
            <NavbarV />
            <div className='container'>
                <Routes>
                    <Route path='dashboard/' element={<MarvelV />} />
                    <Route path='dashboard/marvel' element={<MarvelV />} />
                    <Route path='dashboard/search' element={<SearchV />} />
                    <Route path='dashboard/heroe' element={<HeroeV />} />
                    <Route path='/*' element={<LoginV />} />
                </Routes>
            </div>
        </>
    )
}

export default Dashboard