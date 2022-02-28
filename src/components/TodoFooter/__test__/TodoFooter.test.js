import {render , screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TodoFooter from '../TodoFooter';

const MockTodoFooter = ({numberOfIncompleteTasks}) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  )
}

describe("TodoFooter" , () => {  
  it('should render the correct amount of incomplete task',() => {
    render(<MockTodoFooter numberOfIncompleteTasks={5}/>);
    const Element = screen.getByText(/5 tasks left/i);
    expect(Element).toBeInTheDocument();
  });

  it('should render "task" when the number of complete tasks is one',async () => {
    render(<MockTodoFooter 
      numberOfIncompleteTasks={1}
    />);
    const Element = screen.getByText(/1 task left/i);
    expect(Element).toBeVisible();
  });

  it('should render "task" when the number of complete tasks is one',async () => {
    render(<MockTodoFooter 
      numberOfIncompleteTasks={1}
    />);
    const Element = screen.getByText(/1 task left/i);
    expect(Element).toContainHTML("p");
  });

  it('should render "task" when the number of complete tasks is one',async () => {
    render(<MockTodoFooter 
      numberOfIncompleteTasks={1}
    />);
    const Element = screen.getByTestId('para');
    expect(Element).toHaveTextContent("1 task left")
  });

  it('should render "task" when the number of complete tasks is one',async () => {
    render(<MockTodoFooter 
      numberOfIncompleteTasks={1}
    />);
    const Element = screen.getByTestId('para');
    expect(Element).not.toBeFalsy();
  });

  it('should render "task" when the number of complete tasks is one',async () => {
    render(<MockTodoFooter 
      numberOfIncompleteTasks={1}
    />);
    const Element = screen.getByTestId('para');
    expect(Element.textContent).toBe("1 task left")
  });
})
