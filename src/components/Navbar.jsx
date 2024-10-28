import { useState } from 'react';

import burgerMenu from '../assets/images/icon-menu.svg';
import closeBtn from '../assets/images/icon-menu-close.svg';

const Navbar = () => {
    const [menuClicked, setMenuClicked] = useState(false);

    const handleClick = () => {
        setMenuClicked(prevState => !prevState);
    };

    const handleLinkClick = () => {
        setMenuClicked(false);
    };

    return (
        <>
            <ul className={`${menuClicked ? 'translate-x-0' : 'translate-x-full'} fixed bg-gray-50 top-0 right-0 w-[256px] p-[24px] h-full text-[18px] transition-transform duration-300 sm:flex sm:items-center sm:w-[438px] sm:place-content-around sm:p-0 sm:h-auto sm:relative sm:text-[16px] sm:translate-x-0 sm:transition-none`}>
                <li className="cursor-pointer sm:hidden flex justify-end mb-[87px]">
                    <img className='w-8 h-8' src={closeBtn} onClick={handleClick} alt="Close Menu" />
                </li>
                <li className='mb-8 sm:mb-0'>
                    <a className='hover:text-soft-orange' href="#1" onClick={handleLinkClick}>Home</a>
                </li>
                <li className='mb-8 sm:mb-0'>
                    <a className='hover:text-soft-orange' href="#2" onClick={handleLinkClick}>New</a>
                </li>
                <li className='mb-8 sm:mb-0'>
                    <a className='hover:text-soft-orange' href="#3" onClick={handleLinkClick}>Popular</a>
                </li>
                <li className='mb-8 sm:mb-0'>
                    <a className='hover:text-soft-orange' href="#4" onClick={handleLinkClick}>Trending</a>
                </li>
                <li className='mb-8 sm:mb-0'>
                    <a className='hover:text-soft-orange' href="#5" onClick={handleLinkClick}>Categories</a>
                </li>
            </ul>
            <img className={`w-10 h-6 cursor-pointer sm:hidden ${menuClicked ? 'hidden' : ''}`} src={burgerMenu} onClick={handleClick} alt="Open Menu" />
        </>
    );
};

export default Navbar;