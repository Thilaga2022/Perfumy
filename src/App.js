import React from 'react'
import NavBar from './components/NavBar';
import Search from './components/Search';
import Products from './components/Products';
import About from './components/About';
import Footer from './components/Footer';

const App = () => {
    return (
        <>
            <NavBar></NavBar>
            <Search></Search>
            <Products></Products>
            <About></About>
            <Footer></Footer>
        </>
    )
}

export default App
