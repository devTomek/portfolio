'use client';

import HamburgerMenu from '@/components/HamburgerMenu/HamburgerMenu';
import { useScrolledDown } from '@/hooks/useScrolledDown';
import Link, { LinkProps } from 'next/link';
import { containerClassName } from '@/components/Container/Container';
import classNames from 'classnames';

export interface NavbarLink {
  label: string;
  href: LinkProps['href'];
}

export const navbarLinks: NavbarLink[] = [
  {
    label: 'About Me',
    href: '#about-me',
  },
  {
    label: 'Tech Stack',
    href: '#tech-stack',
  },
  {
    label: 'Contact me',
    href: '#contact-me',
  },
];

export default function Navbar() {
  const scrolledDown = useScrolledDown();

  return (
    <>
      <div
        className={classNames('h-20 invisible', scrolledDown && 'visible')}
      />

      <nav
        className={classNames(
          containerClassName,
          'h-20 flex items-center justify-between transition-transform fixed top-0 left-0 right-0 bg-white',
          scrolledDown ? '-translate-y-20' : 'translate-y-0',
        )}
      >
        <Link href="/" className="text-4xl pr-14">
          Tomasz Chybziński
        </Link>

        <ul className="invisible lg:visible flex">
          {navbarLinks.map(({ href, label }) => (
            <li key={label} className="ml-10 text-3xl hover:underline">
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>

        <HamburgerMenu />
      </nav>
    </>
  );
}
