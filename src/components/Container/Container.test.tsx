import Container from '@/components/Container/Container';
import { render, screen } from '@/test-utils';

describe('<Container />', () => {
  it('should render', () => {
    render(<Container>content</Container>);
    expect(screen.getByText('content')).toBeInTheDocument();
  });
});
