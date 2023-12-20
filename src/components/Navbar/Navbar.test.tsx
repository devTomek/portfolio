import Navbar from '@/components/Navbar/Navbar';
import * as hooks from '@/hooks/useScrolledDown';
import { render, screen } from '@/test-utils';
import { navbarLinks } from './navbarUtils';

jest.mock('portfolio/src/hooks/useScrolledDown.ts', () => ({
  useScrolledDown: jest.fn(() => false),
}));

describe('<Navbar />', () => {
  it('should render', () => {
    render(<Navbar />);

    expect(screen.getByText('Tomasz Chybziński')).toBeInTheDocument();
    expect(screen.getAllByText(navbarLinks.aboutMe.label)).toHaveLength(2);
    expect(screen.getAllByText(navbarLinks.contactMe.label)).toHaveLength(2);
    expect(screen.getAllByText(navbarLinks.techStack.label)).toHaveLength(2);
  });

  it('should hide on scroll down', () => {
    jest.spyOn(hooks, 'useScrolledDown').mockImplementationOnce(() => true);
    render(<Navbar />);

    expect(screen.getByTestId('navbar')).toHaveClass('-translate-y-20');
  });
});
