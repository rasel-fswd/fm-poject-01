'use client';

import Image from 'next/image';
import logo from '../public/logo.svg';
import logoLight from '../public/logo-light.svg';
import sunIcon from '../public/icon-sun.svg';
import moonIcon from '../public/icon-moon.svg';
import { useTheme } from 'next-themes';

function NavBar() {
  const { setTheme, resolvedTheme } = useTheme();

  function Button() {
    if (resolvedTheme === 'dark')
      return (
        <button
          className=" bg-neutral-100 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600 transition-colors p-2 rounded-lg cursor-pointer"
          onClick={() => setTheme('light')}
        >
          <Image src={sunIcon} alt="Sun Icon" />
        </button>
      );
    if (resolvedTheme === 'light')
      return (
        <button
          className=" bg-neutral-100 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600 transition-colors p-2 rounded-lg cursor-pointer"
          onClick={() => setTheme('dark')}
        >
          <Image
            src={moonIcon}
            alt="Mon Icon"
            onClick={() => setTheme('dark')}
          />
        </button>
      );
  }

  return (
    <nav className="bg-neutral-50 dark:bg-neutral-800 flex justify-between items-center p-4 rounded-2xl">
      <a href="#">
        {resolvedTheme === 'dark' ? (
          <Image src={logoLight} alt="Brand Logo" />
        ) : resolvedTheme === 'light' ? (
          <Image src={logo} alt="Brand Logo" />
        ) : (
          ''
        )}
      </a>
      <Button />
    </nav>
  );
}

export default NavBar;
