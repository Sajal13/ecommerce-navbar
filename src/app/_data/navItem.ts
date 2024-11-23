import { IconType } from 'react-icons';
import { FaChevronUp } from 'react-icons/fa';

export interface NavItem {
  id: number;
  title: string;
  parent_id: number | null;
  category_id: number;
  icon?: string;
  link: string;
  childrens?: NavItem[];
}

interface SubMenu {
  id: number;
  label: string;
  url: string;
  icon?: IconType;
  className?: string;
}

export const leftSideMenu: SubMenu[] = [
  {
    id: 1,
    label: 'english',
    url: '#',
    icon: FaChevronUp,
    className: 'mr-6 md:mr-8 lg:mr-[47px]'
  },
  {
    id: 2,
    label: 'help center',
    url: '#',
    className: 'mr-6 md:mr-7 lg:mr-8'
  },
  {
    id: 3,
    label: 'Helpline: 0964781656',
    url: 'tel:0964781656'
  }
];

export const rightSighMenu: SubMenu[] = [
  {
    id: 4,
    label: 'Become a Seller',
    url: '#',
    className: 'mr-5 md:mr-6 lg:mr-[30px]'
  },
  {
    id: 5,
    label: 'Order Track',
    url: '#',
    className: 'mr-5 md: mr-6 lg:mr-[38px]'
  },
  {
    id: 6,
    label: 'Sign up / Login',
    url: '#'
  }
];
