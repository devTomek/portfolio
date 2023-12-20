import Heading from '@/components/Heading/Heading';
import { render, screen } from '@/test-utils';

describe('<Heading />', () => {
  it('should render h1', () => {
    render(<Heading>content</Heading>);
    expect(screen.getByText('content', { selector: 'h1' })).toBeInTheDocument();
    expect(screen.getByText('content', { selector: 'h1' })).toHaveClass(
      'text-3xl lg:text-4xl',
    );
  });

  it('should render h2', () => {
    render(<Heading as="h2">content</Heading>);
    expect(screen.getByText('content', { selector: 'h2' })).toBeInTheDocument();
    expect(screen.getByText('content', { selector: 'h2' })).toHaveClass(
      'text-3xl lg:text-4xl',
    );
  });

  it('should render h3', () => {
    render(<Heading as="h3">content</Heading>);
    expect(screen.getByText('content', { selector: 'h3' })).toBeInTheDocument();
    expect(screen.getByText('content', { selector: 'h3' })).not.toHaveClass(
      'text-3xl lg:text-4xl',
    );
  });
});
