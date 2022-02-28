import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe("Header" , () => {
  it('should render same text passed into title props by getByText', () => {
    render(<Header title="My Header"/>);
    const linkElement = screen.getByText(/my header/i);
    expect(linkElement).toBeInTheDocument();
  });

  // it('should render same text passed into title props', () => {
  //   render(<Header title="My Header"/>);
  //   const linkElement = screen.getByRole("heading");
  //   expect(linkElement).toBeInTheDocument();
  // });

  it('should render same text passed into title props by getByRole', () => {
    render(<Header title="My Header"/>);
    const linkElement = screen.getByRole("heading",{name: /my header/i});
    expect(linkElement).toBeInTheDocument();
  });

  it('should render same text passed into title props by getByTitle', () => {
    render(<Header title="My Header"/>);
    const linkElement = screen.getByTitle("Header");
    expect(linkElement).toBeInTheDocument();
  });

  it('should render same text passed into title props by getByTestId', () => {
    render(<Header title="My Header"/>);
    const linkElement = screen.getByTestId("header-1");
    expect(linkElement).toBeInTheDocument();
  });

  // FIND BY

  it('should render same text passed into title props by findByText',async () => {
    render(<Header title="My Header"/>);
    const linkElement = await screen.findByText(/my header/i);
    expect(linkElement).toBeInTheDocument();
  });

  // Query By

  it('should render same text passed into title props by queryByText',() => {
    render(<Header title="My Header"/>);
    const headingElement = screen.queryByText(/dogs/i);
    expect(headingElement).not.toBeInTheDocument();
  });

  it('should render same text passed into title props by getAllByRole',() => {
    render(<Header title="My Header"/>);
    const headingElement = screen.getAllByRole("heading");
    expect(headingElement.length).toBe(2);
  });
})
