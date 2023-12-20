import Image from '@/components/Image/Image';
import { render, screen } from '@/test-utils';

describe('<Image />', () => {
  it('should render', () => {
    render(<Image alt="test image" src="/" />);
    expect(screen.getByAltText('test image')).toBeInTheDocument();
  });
});
