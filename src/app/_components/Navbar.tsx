'use client';

import IconButton from './IconButton';
import { FaRegUser, FaRegHeart, FaTimes } from 'react-icons/fa';
import { FaBarsStaggered } from 'react-icons/fa6';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { FiSearch } from 'react-icons/fi';

import { getData } from '@/utils/api';
import { useEffect, useState } from 'react';
import NavbarItem from './NavItem';
import type { NavItem } from '@/app/_data/navItem';
import NavItemOffCanvas from './NavItemOffCanvas';
import classNames from 'classnames';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navItems, setNavItems] = useState<NavItem[]>([]);

  useEffect(() => {
    getData('hero-categories').then(res => setNavItems(res));
  }, []);
  return (
    <header className="bg-white">
      <nav className="container mx-auto block xl:flex justify-between flex-wrap py-3 md:py-4 gap-7 relative">
        <div className="flex xl:justify-center items-center mb-3 xl:mb-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/images/logo.png" alt="" />
        </div>
        <ul
          className={classNames(
            'xl:hidden bg-white fixed z-10 w-64 py-[12.44px] px-2.5 top-0 left-0 h-screen shadow-sm',
            {
              'w-64 md:w-[25rem] lg:w-[30rem] block': isOpen,
              'w-0 hidden': !isOpen
            }
          )}
        >
          <li className="py-2 my-[11px] flex justify-between items-center">
            <h4 className="text-xl md:text-2xl lg:text-2xl text-tertiary font-bold">
              Categories
            </h4>
            <IconButton
              iconType={<FaTimes />}
              iconClass="w-[18px] h-[18px] text-[#707070] fw-bold"
              buttonClickHandler={() => setIsOpen(false)}
              buttonClass="transition-all ease-linear duration-500"
            />
          </li>
          {navItems.map(navItem => (
            <NavItemOffCanvas key={navItem.id} navItem={navItem} />
          ))}
        </ul>

        <ul className="hidden xl:block bg-white absolute z-10 w-[14.375rem] py-[12.44px] px-2.5 top-[4.5rem] shadow-sm">
          {navItems.map(navItem => (
            <NavbarItem key={navItem.id} navItem={navItem} />
          ))}
        </ul>
        <div className="md:flex justify-between flex-1 items-center gap-[31px]">
          <div className="md:w-2/3 mb-2 xl:mb-0 relative">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search Product"
              className="w-full bg-info rounded-[10px] h-full border border-transparent p-[13px] text-[#707070] text-sm outline-none focus:border-blue-400"
            />
            <IconButton
              iconType={<FiSearch />}
              buttonType="submit"
              buttonClickHandler={() => console.log('search clicked')}
              buttonClass="bg-primary absolute top-0 right-0 z-1"
              buttonSize="lg"
              iconClass="w-6 h-6 text-white"
            />
          </div>
          <div className="flex md:justify-between items-center md:w-1/3 mb-3 xl:mb-0">
            <IconButton
              iconType={<FaRegUser />}
              iconClass="w-[18px] h-[18px] text-[#707070] fw-bold"
              buttonClass="bg-[#F5F5F5] mr-3"
              buttonClickHandler={() => console.log('button clicked')}
            />
            <IconButton
              iconType={<FaRegHeart />}
              iconClass="w-[18px] h-[18px] text-[#707070] fw-bold"
              buttonClass="bg-[#F5F5F5] mr-3"
              buttonClickHandler={() => console.log('button clicked')}
            />
            <IconButton
              iconType={<HiOutlineShoppingCart />}
              iconClass="w-[18px] h-[18px] text-[#707070] fw-bold"
              buttonClass="bg-[#F5F5F5] mr-[25px]"
              buttonClickHandler={() => console.log('button clicked')}
            />
            <button
              className=""
              type="button"
              onClick={() => console.log('cloud button clicked')}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/images/cloud.png" alt="" className="w-full" />
            </button>
          </div>
        </div>
        <div className="absolute top-2 right-5 xl:hidden">
          <IconButton
            iconType={<FaBarsStaggered />}
            iconClass="w-[18px] h-[18px] text-[#707070] font-bold"
            buttonClickHandler={() => setIsOpen(true)}
            buttonClass="transition-all ease-linear duration-500"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
