'use client';

import Image from 'next/image';
import logo from '../public/logo.svg';
import logoLight from '../public/logo-light.svg';
import sunIcon from '../public/icon-sun.svg';
import moonIcon from '../public/icon-moon.svg';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Link from 'next/link';

function NavBar() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  function Button() {
    if (resolvedTheme === 'dark')
      return (
        <button
          className=" bg-neutral-100 hover:bg-neutral-300 focus:bg-neutral-300  transition-colors p-2 rounded-lg cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-100 focus:ring-[var(--color-acent-400)] outline-none"
          onClick={() => setTheme('light')}
        >
          <Image src={sunIcon} alt="Sun Icon" />
        </button>
      );
    if (resolvedTheme === 'light')
      return (
        <button
          className=" bg-neutral-100 hover:bg-neutral-300 focus:bg-neutral-300 transition-colors p-2 rounded-lg cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-100 focus:ring-[var(--color-acent-400)] outline-none"
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
    <nav className=" bg-neutral-100 flex justify-between items-center p-4 rounded-2xl">
      <Link href="/">
        {resolvedTheme === 'dark' ? (
          <Image src={logoLight} alt="Brand Logo" />
        ) : resolvedTheme === 'light' ? (
          <Image src={logo} alt="Brand Logo" />
        ) : (
          ''
        )}
      </Link>
      <Button />
    </nav>
  );
}

export default NavBar;
