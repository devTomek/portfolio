'use client';

import Link from 'next/link';
import { ReactNode, useState } from 'react';
import classnames from 'classnames';
import { Squash as Hamburger } from 'hamburger-react';

interface HamburgerMenuProps {
  className?: string;
}

export default function HamburgerMenu({ className }: HamburgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <div className={className}>
      <div className="fixed right-0 sm:right-5 top-3 z-10">
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
          'bg-black text-white text-2xl h-full transition-all fixed top-0 right-0 w-80',
          !isOpen ? 'translate-x-80 ' : '',
        )}
      >
        <Li>
          <Link href="#about">About</Link>
        </Li>
        <Li>
          <Link href="#experience">Experience</Link>
        </Li>
        <Li>
          <Link href="#contact">Contact</Link>
        </Li>
      </ul>
    </div>
  );
}

interface LiProps {
  children: ReactNode;
}
function Li({ children }: LiProps) {
  return <li className="p-5">{children}</li>;
}
