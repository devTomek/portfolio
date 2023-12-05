'use client';

import { navbarLinks } from '@/components/Navbar/navbarUtils';
import classNames from 'classnames';
import { Squash as Hamburger } from 'hamburger-react';
import Link from 'next/link';
import { useState } from 'react';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <div className="lg:hidden">
      <div className="fixed right-0 top-3 z-10">
        <Hamburger
          toggled={isOpen}
          toggle={toggle}
          size={40}
          rounded
          color={isOpen ? 'white' : 'black'}
          aria-label="hamburger menu button"
        />
      </div>

      <ul
        className={classNames(
          'bg-black text-white text-2xl h-screen transition-all fixed top-0 right-0 w-80',
          !isOpen ? 'translate-x-80' : '',
        )}
      >
        {Object.entries(navbarLinks).map(([key, link]) => (
          <li key={key} className="p-5" aria-label={`${link.label} list item`}>
            <Link
              href={link.href}
              onClick={toggle}
              aria-label={`${link.label} link`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
