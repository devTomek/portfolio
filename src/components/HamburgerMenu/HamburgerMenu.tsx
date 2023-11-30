'use client';

import Link from 'next/link';
import { useState } from 'react';
import classnames from 'classnames';
import { Squash as Hamburger } from 'hamburger-react';
import { navbarLinks } from '@/components/Navbar/Navbar';

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
        />
      </div>

      <ul
        className={classnames(
          'bg-black text-white text-2xl h-screen transition-all fixed top-0 right-0 w-80',
          !isOpen ? 'translate-x-80' : '',
        )}
      >
        {navbarLinks.map(({ href, label }) => (
          <li key={label} className="p-5">
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
