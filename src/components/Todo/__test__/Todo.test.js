import { render , screen , fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo';

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo/>
    </BrowserRouter>
  )
}

const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole("button", {name: /Add/i });
  tasks.forEach(task => {
    fireEvent.change(inputElement, { target : {value:task}})
    fireEvent.click(buttonElement);
  });
}

describe('Todo', () => {
  it('should render same text passed into title props' , async () => {
    render(<MockTodo />);
    addTask(['Go to the store']);
    const divElement = screen.getByText(/Go to the store/i);
    expect(divElement).toBeInTheDocument();
  })

  it('should render multiple items' , async () => {
    render(<MockTodo />);
    addTask(['Go to the store', 'Go to the gym']);

    const divElement = screen.getAllByTestId("task-container");
    expect(divElement.length).toBe(2);
  })

  it('task should not have completed class when init rendered' , async () => {
    render(<MockTodo />);
    addTask(['Go to the store']);

    const divElement = screen.getByText(/Go to the store/i);
    expect(divElement).not.toHaveClass('todo-item-active');
  })

  it('task should have completed class when clicked' , async () => {
    render(<MockTodo />);
    addTask(['Go to the store']);
    const divElement = screen.getByText(/Go to the store/i);
    fireEvent.click(divElement);
    expect(divElement).toHaveClass('todo-item-active');
  })
})