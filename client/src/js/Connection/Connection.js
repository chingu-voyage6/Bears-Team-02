import React from "react";
import "./Connection.css";

const Connection = () => {
    return (
       
        // <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        //    <div className="navbar-brand">FC</div>
        //         <div className="navbar-menu">
        //             <div className="navbar-end">
        //                <a className="navbar-item ">Item One</a>
        //                <a className="navbar-item">Item Two</a>
        //                <a className="navbar-item">Item Three</a>
        //                <a className="navbar-item">Item Four</a> 
        //             </div>
        //         </div>
           
        // </nav>
    
        <nav>
            <ul className="flexbox-container" role="navigation">
                <li><a href="#">Home</a></li>
                <li><a href="#">My Profile</a></li>
                <li><a href="#">Messages</a></li>
                <li><a href="#">Notifications</a></li>
                <li className="search">
                <input type="text" className="search-input" placeholder="Search" />
                <button className="button" id="search-button">Search</button>
                </li>
                
                <li><a href="#">Logout</a></li>
            </ul>
        </nav>


    );

}

export default Connection;