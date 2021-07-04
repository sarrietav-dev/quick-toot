import React from 'react';
import { ContentWarningBox } from '../ContentWarningBox';
import { cleanup, fireEvent } from '@testing-library/react';
import App, { testIds as appTestIds } from '../../App';
import { testIds as formButtonsTestIds } from '../FormButtons';
import { render } from '../../test-utils';

afterEach(cleanup);

it('Renders without crashing', () => {
  render(<ContentWarningBox />);
});

it('Renders hidden', () => {
  const { getByTestId } = render(<App />);

  expect(getByTestId(appTestIds.contentWarningBoxWrapper)).not.toHaveClass(
    'compose-form__content-warning-wrapper--visible',
  );
});

it('Get shown when button is clicked', () => {
  const { getByTestId } = render(<App />);
  fireEvent.click(getByTestId(formButtonsTestIds.contentWarningButton));

  expect(getByTestId(appTestIds.contentWarningBoxWrapper)).toHaveClass(
    'compose-form__content-warning-wrapper--visible',
  );
});
