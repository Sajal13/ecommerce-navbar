import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { leftSideMenu, rightSighMenu } from '../_data/navItem';

const SubMenu = () => {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto flex lg:flex-wrap gap-3 justify-between pt-[5px] pb-1">
        <div className="md:flex flex-wrap gap-2">
          {leftSideMenu.map(menu => (
            <Link
              href={menu.url}
              key={menu.id}
              className={classNames(
                'mb-2 md:mb-0 text-muted hover:text-primary text-sm capitalize',
                menu.className,
                {
                  'flex gap-1 items-center': menu.icon,
                  block: !menu.icon
                }
              )}
            >
              {menu.label}
              {menu.icon && <menu.icon className="text-xs" />}
            </Link>
          ))}
        </div>
        <div className="md:flex flex-wrap gap-2">
          {rightSighMenu.map(menu => (
            <Link
              href={menu.url}
              key={menu.id}
              className={classNames(
                'mb-2 md:mb-0 block text-muted hover:text-primary text-sm capitalize',
                menu.className
              )}
            >
              {menu.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubMenu;
