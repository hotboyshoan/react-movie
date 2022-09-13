import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <header className="header flex items-center justify-center gap-x-5 mb-5">
        <NavLink to="/" className={({isActive}) => (isActive ? "text-primary border-none rounded-md bg-blue-700 p-2" : "")}>Home</NavLink>
        <NavLink to="/movies" className={({isActive}) => (isActive ? "text-primary border-none rounded-md bg-blue-700 p-2" : "")}>Movies</NavLink>
    </header>
  );
};

export default Header;