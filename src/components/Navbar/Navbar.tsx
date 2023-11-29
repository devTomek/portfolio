import HamburgerMenu from '@/components/HamburgerMenu/HamburgerMenu';

export default function Navbar() {
  return (
    <nav className="h-20 flex items-center sm:px-5">
      <p className="text-4xl pr-14">Tomasz Chybziński</p>
      <HamburgerMenu className="lg:hidden" />
    </nav>
  );
}
