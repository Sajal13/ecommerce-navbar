import classNames from 'classnames';
import React from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonType = 'submit' | 'button';
type ButtonSize = 'sm' | 'base' | 'lg';

interface IconButtonProps {
  iconType: React.ReactElement;
  buttonClickHandler: () => void;
  buttonClass?: string;
  iconClass?: string;
  buttonType?: ButtonType;
  buttonSize?: ButtonSize;
}

const IconButton = ({
  iconType,
  buttonClickHandler,
  buttonClass,
  iconClass,
  buttonType = 'button',
  buttonSize = 'base',
  ...rest
}: IconButtonProps) => {
  const buttonClasses = twMerge(
    'flex',
    'justify-center',
    'items-center',
    'rounded-[10px]',
    buttonClass,
    classNames({
      'p-1': buttonSize === 'sm',
      'p-[7px]': buttonSize === 'base',
      'py-2.5 ps-[11px] pe-[12px]': buttonSize === 'lg'
    })
  );
  return (
    <button
      className={buttonClasses}
      type={buttonType}
      onClick={buttonClickHandler}
      {...rest}
    >
      {React.cloneElement(iconType, {
        className: classNames(iconClass)
      })}
    </button>
  );
};

export default IconButton;
