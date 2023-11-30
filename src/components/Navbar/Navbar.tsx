'use client';

import HamburgerMenu from '@/components/HamburgerMenu/HamburgerMenu';
import { useScrolledDown } from '@/hooks/useScrolledDown';
import classnames from 'classnames';
import Link from 'next/link';

export default function Navbar() {
  const scrolledDown = useScrolledDown();

  return (
    <nav
      className={classnames(
        'h-20 flex items-center sm:px-5 transition-transform fixed top-0 w-full',
        scrolledDown ? '-translate-y-20' : 'translate-y-0',
      )}
    >
      <Link href="/" className="text-4xl pr-14">
        Tomasz Chybziński
      </Link>
      <HamburgerMenu />
    </nav>
  );
}
