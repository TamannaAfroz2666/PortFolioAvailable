import React from 'react';
import './Home.css';
import Header from '../../Layout/Header/Header';
import WelcomePage from '../WelcomePage/WelcomePage';
import BreakingNews from '../BreakingNews/BreakingNews';
import About from '../About/About';
// import Products from '../Products/Products';





const Home = () => {
    return (
        <div>
            <Header></Header> 
            <WelcomePage></WelcomePage>
            <BreakingNews></BreakingNews>
            <About></About>
           
          
        </div>
    );
};

export default Home;