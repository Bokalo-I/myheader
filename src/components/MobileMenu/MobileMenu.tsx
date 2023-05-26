import React from 'react';
import classNames from 'classnames';
import closeMenu from '../../icons/closeMenu.svg'
import './MobileMenu.scss';
import { NavigationLink } from '../NavigationLink';
import { DropDown } from '../DropDown';

type Props = {
  isOpen: boolean;
  onMenuClose: () => void;
  currency: string;
  onCurrencyChange: (curr: string) => void;
}

export const MobileMenu: React.FC<Props> = ({ isOpen, onMenuClose, currency, onCurrencyChange }) => {
  const pages = ['OSRS Gold', 'RS3 Gold', 'Sell RS Gold', 'OSRS Items', 'OSRS Accounts', 'Reward Chests'];

  return (
    <div
      className={classNames('menuContainer', {
      'menuContainerClose': !isOpen,
    })}
    >
        <button
          className='burgerButtonClose'
          onClick={onMenuClose}
        >
          <img src={closeMenu} alt="open menu" />
        </button>
        <nav className='mobileNav'>
          <ul className='mobileNavList'>
            {pages.map((page) => {
              const link = page.split(' ').join('').toLowerCase();
              return (
                <li key={page} onClick={onMenuClose}>
                  <NavigationLink
                    to={link}
                    text={page} />
                </li>
              );
            })}
          </ul>
        </nav>
          <DropDown
            currency={currency}
            onCurrencyChange={onCurrencyChange}
            onMenuClose={onMenuClose}
          />
        <div className='mobileButtons'>
        <button className='singUpButton'>
            Sign Up
        </button>
        <button className='logButton'>
            Log in
        </button>
        </div>
   </div>
  )
};