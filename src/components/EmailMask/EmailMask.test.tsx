import EmailMask from '@/components/EmailMask/EmailMask';
import { render, screen, userEvent } from '@/test-utils';

describe('<EmailMask />', () => {
  it('should render masked', () => {
    render(<EmailMask email="email@domain.com" />);
    expect(screen.getByText('ema**@domain.com')).toBeInTheDocument();
  });

  it('should render with masked domain', () => {
    render(<EmailMask email="email@domain.com" maskDomain />);
    expect(screen.getByText('ema**@do****.com')).toBeInTheDocument();
  });

  it('should render with masked character', () => {
    render(<EmailMask email="email@domain.com" maskCharacter="#" />);
    expect(screen.getByText('ema##@domain.com')).toBeInTheDocument();
  });

  it('should show unmasked on click', async () => {
    const user = userEvent.setup();

    render(<EmailMask email="email@domain.com" />);
    expect(screen.getByText('ema**@domain.com')).toBeInTheDocument();

    await user.click(screen.getByText('ema**@domain.com'));
    expect(screen.getByText('email@domain.com')).toBeInTheDocument();
  });
});
