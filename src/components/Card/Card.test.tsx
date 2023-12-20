import Card from '@/components/Card/Card';
import { render, screen } from '@/test-utils';

describe('<Card />', () => {
  it('should render', () => {
    render(<Card>content</Card>);
    expect(screen.getByText('content')).toBeInTheDocument();
  });
});
