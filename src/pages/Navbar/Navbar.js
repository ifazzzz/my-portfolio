import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const menuItems = <>
        <Link><li className="px-2" to='/'>Home</li></Link>
        <Link><li className="px-2" to='/projects'>Projects</li></Link>
        <Link><li className="px-2" to='/about'>About</li></Link>
    </>
    
    return (
        <div className="navbar bg-base-100 px-4 py-8 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 mr-4 p-2 shadow bg-base-100 rounded-box w-52">
                    {menuItems}
                </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <div className="flex justify-between items-center">
                        <div>
                        <img className="w-12" src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Eo_circle_light-blue_white_letter-s.svg" alt=""/>
                        </div>
                        <div>
                         <h1 className="text-xl font-semi-bold text-white ml-2">
                            Shoaib Ahmed
                         </h1>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/contact' className="btn bg-sky-400 text-black">Contact Me</Link>
            </div>
        </div>
    );
};

export default Navbar;