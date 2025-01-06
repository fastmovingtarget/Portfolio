import { render, screen } from '@testing-library/react';
import ProjectsPage from './ProjectsPage';

test('renders About Me section', () => {
  render(<ProjectsPage />);
  const projectElement = screen.getByText(/Projects/i);
  expect(projectElement).toBeInTheDocument();
});
