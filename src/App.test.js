import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render, waitForElement, fireEvent} from '@testing-library/react';

it('renders and adds an item', () => {
  const { getByTestId } = render(<App/>);
  const changeToDoEvent = {
    target: {
      value: 'sweet'
    }
  }

  const addButton = getByTestId('add-item');

  fireEvent.click(addButton)

  const toDoItem = getByTestId('to-do-text-');

  fireEvent.change(toDoItem, changeToDoEvent)

  const updatedItem = waitForElement(() => getByTestId('to-do-item-sweet'))

  expect(updatedItem).not.toBeNull();
});
