import React from 'react';
import Header from "../header";
import Footer from "../footer";
import s from './styles.module.css'
const Layout = ({children}) => {
    return (
        <div className={s.layout}>
            <Header/>
            {children}
           <Footer/>
        </div>
    );
};

export default Layout;