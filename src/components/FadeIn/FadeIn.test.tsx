import FadeIn from '@/components/FadeIn/FadeIn';
import { render, screen, waitFor } from '@/test-utils';
import { useInView } from 'framer-motion';

jest.mock('framer-motion', () => ({
  ...jest.requireActual('framer-motion'),
  useInView: jest.fn(() => false),
}));

describe('<FadeIn />', () => {
  it('should render invisible', async () => {
    render(<FadeIn>content</FadeIn>);

    expect(screen.getByText('content')).toBeInTheDocument();
    expect(screen.getByTestId('fadeIn')).toHaveStyle({
      opacity: '0',
      transform: 'translateY(50px)',
    });
  });

  it('should render visible', async () => {
    (useInView as jest.Mock).mockImplementationOnce(() => true);
    render(<FadeIn>content</FadeIn>);

    expect(screen.getByText('content')).toBeInTheDocument();
    await waitFor(
      () =>
        expect(screen.getByTestId('fadeIn')).toHaveStyle({
          opacity: '1',
          transform: 'translateY(0px)',
        }),
      { timeout: 2000 },
    );
  });
});
