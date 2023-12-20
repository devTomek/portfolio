import { experienceYears } from '@/lib/experienceYears';
import { render, screen } from '@/test-utils';
import HomePage from '@/views/HomePage/HomePage';

jest.mock('framer-motion', () => ({
  ...jest.requireActual('framer-motion'),
  useInView: () => true,
}));

describe('<HomePage />', () => {
  it('should render', () => {
    render(<HomePage />);

    expect(screen.getByText("Hello, I'm")).toBeInTheDocument();
    expect(screen.getByText('Tomasz Chybziński')).toBeInTheDocument();
    expect(screen.getAllByText('Frontend Developer')).toHaveLength(2);
    expect(screen.getByText('Preview CV')).toBeInTheDocument();
    expect(screen.getByText('Contact Info')).toBeInTheDocument();

    expect(screen.getByText('About Me')).toBeInTheDocument();
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText(`${experienceYears} years`)).toBeInTheDocument();
    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(screen.getByText('MSc Computer Science')).toBeInTheDocument();
    expect(screen.getByText('BE Computer Science')).toBeInTheDocument();

    expect(screen.getByText('Tech Stack')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Javascript')).toBeInTheDocument();
    expect(screen.getByText('SCSS')).toBeInTheDocument();
    expect(screen.getByText('REST')).toBeInTheDocument();
    expect(screen.getByText('NextJS')).toBeInTheDocument();
    expect(screen.getByText('React Context')).toBeInTheDocument();
    expect(screen.getByText('Styled Components')).toBeInTheDocument();
    expect(screen.getByText('GraphQL')).toBeInTheDocument();
    expect(screen.getByText('Typescript')).toBeInTheDocument();
    expect(screen.getByText('Redux')).toBeInTheDocument();
    expect(screen.getByText('SCRUM')).toBeInTheDocument();
    expect(screen.getByText('React Testing Library')).toBeInTheDocument();

    expect(screen.getByText('Contact Me')).toBeInTheDocument();
    expect(screen.getByText('tom**************@gm***.com')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
  });
});
