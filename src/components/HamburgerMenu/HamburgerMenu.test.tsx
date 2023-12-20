import HamburgerMenu from '@/components/HamburgerMenu/HamburgerMenu';
import { render, screen, userEvent } from '@/test-utils';
import { navbarLinks } from '../Navbar/navbarUtils';

describe('<HamburgerMenu />', () => {
  it('should render hidden', () => {
    render(<HamburgerMenu />);
    expect(screen.getByTestId('menu')).toHaveClass('translate-x-80');
    expect(screen.getByText(navbarLinks.aboutMe.label)).toBeInTheDocument();
    expect(screen.getByText(navbarLinks.contactMe.label)).toBeInTheDocument();
    expect(screen.getByText(navbarLinks.techStack.label)).toBeInTheDocument();
  });

  it('should show on click', async () => {
    const user = userEvent.setup();
    render(<HamburgerMenu />);

    await user.click(screen.getByRole('button'));

    expect(screen.getByTestId('menu')).not.toHaveClass('translate-x-80');
  });
});
