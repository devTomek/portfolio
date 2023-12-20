'use client';

import { containerClassName } from '@/components/Container/Container';
import HamburgerMenu from '@/components/HamburgerMenu/HamburgerMenu';
import { navbarLinks } from '@/components/Navbar/navbarUtils';
import { useScrolledDown } from '@/hooks/useScrolledDown';
import classNames from 'classnames';
import Link from 'next/link';

export default function Navbar() {
  const scrolledDown = useScrolledDown();

  return (
    <>
      <div
        className={classNames('h-20 invisible z-10', scrolledDown && 'visible')}
      />

      <nav
        data-testid="navbar"
        className={classNames(
          containerClassName,
          'h-20 flex items-center justify-between transition-transform fixed top-0 left-0 right-0 bg-white z-10',
          scrolledDown ? '-translate-y-20' : 'translate-y-0',
        )}
      >
        <Link href="#body" className="text-4xl pr-14">
          Tomasz Chybziński
        </Link>

        <ul className="invisible lg:visible flex">
          {Object.entries(navbarLinks).map(([key, link]) => (
            <li
              key={key}
              className="ml-10 text-3xl whitespace-nowrap hover:underline"
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>

        <HamburgerMenu />
      </nav>
    </>
  );
}
