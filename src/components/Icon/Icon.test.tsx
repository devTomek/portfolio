import Icon from '@/components/Icon/Icon';
import { render, screen } from '@/test-utils';
import { IoCheckmarkOutline } from 'react-icons/io5';

describe('<Icon />', () => {
  it('should render', () => {
    render(<Icon as={IoCheckmarkOutline} />);
    expect(screen.getByTestId('icon')).toHaveClass('w-10 h-10');
  });
});
