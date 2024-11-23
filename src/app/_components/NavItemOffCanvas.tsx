import React, { useState } from 'react';
import { NavItem } from '../_data/navItem';
import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa6';
import classNames from 'classnames';

interface NavItemOffCanvasProps {
  navItem: NavItem;
}

const NavItemOffCanvas = ({ navItem }: NavItemOffCanvasProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className="mb-[11px]">
      <div
        className={classNames(
          'flex items-center justify-between w-full text-xs  transition',
          {
            'text-primary': isOpen,
            'text-tertiary': !isOpen
          }
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Link href={navItem.link}>{navItem.title}</Link>
        {navItem.childrens && navItem.childrens.length > 0 && (
          <FaChevronDown
            className={classNames('transition-all duration-300 ease-linear', {
              'rotate-180': isOpen
            })}
          />
        )}
      </div>
      {navItem.childrens && isOpen && (
        <ul className="mt-3 pl-[11px]">
          {navItem.childrens.map(item => (
            <NavItemOffCanvas key={item.id} navItem={item} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavItemOffCanvas;
