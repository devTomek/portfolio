import Footer from '@/components/Footer/Footer';
import { render, screen } from '@/test-utils';

describe('<Footer />', () => {
  it('should render', () => {
    render(<Footer />);

    expect(
      screen.getByText(
        `Copyright ${new Date().getFullYear()} | Tomasz Chybziński`,
      ),
    ).toBeInTheDocument();
  });
});
