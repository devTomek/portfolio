import Section from '@/components/Section/Section';
import { render, screen } from '@/test-utils';

describe('<Section />', () => {
  it('should render', () => {
    render(<Section>content</Section>);
    expect(
      screen.getByText('content', { selector: 'section' }),
    ).toBeInTheDocument();
  });
});
