import React, { useState } from 'react';
import type { NavItem as NavItemType } from '../_data/navItem';
import { FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';

interface NavItemProps {
  navItem: NavItemType;
}

const NavbarItem: React.FC<NavItemProps> = ({ navItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <li
      className="relative mb-[11px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="group">
        <Link
          href={navItem.link}
          className="flex items-center justify-between w-full text-xs text-tertiary group-hover:text-primary transition"
        >
          {navItem.title}
          {navItem.childrens && (
            <span className="ml-auto">
              <FaChevronRight />
            </span>
          )}
        </Link>
      </div>
      {navItem.childrens && isOpen && (
        <ul className="absolute top-0 z-10 left-full py-[12.44px] px-2.5 w-56 min-h-56 bg-white border shadow-md">
          {navItem.childrens.map(child => (
            <NavbarItem key={child.id} navItem={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavbarItem;
