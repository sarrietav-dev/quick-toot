import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { CharCounter } from '../CharCounter';
import App from '../../App';
import { testId as textBoxTestId } from '../TextBox';
import { testId as charCounterTestId } from '../CharCounter';

afterEach(cleanup);

test('Renders on the dom', () => render(<CharCounter />));

test('Decreases count', () => {
  const { getByTestId } = render(<App />);

  fireEvent.input(getByTestId(textBoxTestId), {
    target: { value: 'This is a test' },
  });

  expect(getByTestId(charCounterTestId)).toHaveTextContent(`${500 - 14}`);
  expect(getByTestId(charCounterTestId)).not.toHaveClass(
    'char-counter--negative',
  );
});

test('Decreases count to negative', () => {
  const { getByTestId } = render(<App />);

  fireEvent.input(getByTestId(textBoxTestId), {
    target: {
      value:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer iaculis elit sit amet massa molestie consequat ac non quam. In ut nisi sit amet dolor placerat iaculis. Quisque nec urna tempor, tempus nibh eu, ultrices turpis. Morbi tempus nisi at lobortis aliquet. In nec metus pellentesque, dapibus odio sed, dapibus urna. Sed imperdiet libero id ultrices aliquam. Integer at auctor sem. Aenean non libero eleifend, condimentum augue sed, gravida augue. Maecenas lobortis massa lectus, eget congue nibh bibendum id. Lorem ipsum dolor sed.',
    },
  });

  expect(getByTestId(charCounterTestId)).toHaveTextContent(`${500 - 540}`);
});

test('Negative becomes red', () => {
  const { getByTestId } = render(<App />);

  fireEvent.input(getByTestId(textBoxTestId), {
    target: {
      value:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer iaculis elit sit amet massa molestie consequat ac non quam. In ut nisi sit amet dolor placerat iaculis. Quisque nec urna tempor, tempus nibh eu, ultrices turpis. Morbi tempus nisi at lobortis aliquet. In nec metus pellentesque, dapibus odio sed, dapibus urna. Sed imperdiet libero id ultrices aliquam. Integer at auctor sem. Aenean non libero eleifend, condimentum augue sed, gravida augue. Maecenas lobortis massa lectus, eget congue nibh bibendum id. Lorem ipsum dolor sed.',
    },
  });

  expect(getByTestId(charCounterTestId)).toHaveClass('char-counter--negative');
});
