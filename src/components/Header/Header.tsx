import logo from '../../icons/logo.svg';
import burgerMenu from '../../icons/burgerMenu.svg'
import './Header.scss';
import { NavigationLink } from '../NavigationLink';
import { useState } from 'react';
import { MobileMenu } from '../MobileMenu';
import { DropDown } from '../DropDown';

type Props = {
  currency: string;
  onCurrencyChange: (curr: string) => void; 
}

export const Header: React.FC<Props> = ({ currency, onCurrencyChange }) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  }

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  }

  const pages = ['OSRS Gold', 'RS3 Gold', 'Sell RS Gold', 'OSRS Items', 'OSRS Accounts', 'Reward Chests'];
  
  return (
  <><header className='header'>
      <div className='container'>
        <button
          className='burgerButton'
          onClick={handleMenuToggle}
        >
          <img src={burgerMenu} alt="open menu" />
        </button>
        <nav className='nav'>
          <a href="/#">
            <img
              src={logo}
              alt="logo"
              className='logo' />
          </a>
          <ul className='navList'>
            {pages.map((page) => {
              const link = page.split(' ').join('').toLowerCase();
              return (
                <li key={page}>
                  <NavigationLink
                    to={link}
                    text={page} />
                </li>
              );
            })}
          </ul>
        </nav>
        <div className='rightBlock'>
          <div className='containerblock'>
         <DropDown currency={currency} onCurrencyChange={onCurrencyChange} />
          <a href="/#" className='signUp'>Sign Up</a>
          </div>
          <button className='logButton'>
            Log in
          </button>
        </div>
      </div>
    </header>
    <MobileMenu
      isOpen={isMenuOpen}
      onMenuClose={handleCloseMenu}
      currency={currency}
      onCurrencyChange={onCurrencyChange}
    />
    </>
)
}