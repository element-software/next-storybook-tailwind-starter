import React from 'react';

import { Button } from '../Button/Button';
import './header.css';
import Image from 'next/image';
import Link from 'next/link';

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
  <header className='w-full fixed bg-white z-10'>
    <div className="storybook-header bg-white" style={{ background: '#FFFFFF'}}>
      <div>
        <Link href="/">
          <Image src='/es-logo.png' alt={'Logo'} width={100} height={60} />
        </Link>
      </div>
      <div>
        {user ? (
          <>
            <span className="welcome">
              Welcome, <b>{user.name}</b>!
            </span>
            <Button size="small" onClick={onLogout} label="Log out" />
          </>
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
          </>
        )}
      </div>
    </div>
  </header>
);
