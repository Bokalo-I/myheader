import React from 'react';
import classNames from 'classnames';
import './NavigationLink.scss';
import { NavLink } from 'react-router-dom';

interface Props {
  to: string
  text: string
};

export const NavigationLink: React.FC<Props> = ({ to, text }) => {
  return (
    <NavLink
      className={({ isActive }) => classNames('navLink', {
        'isActive': isActive
      })}
      to={to}
    >
      {text}
    </NavLink>
  );
};
