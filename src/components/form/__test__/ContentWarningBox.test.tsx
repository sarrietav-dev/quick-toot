import React from 'react';
import { ContentWarningBox, testIds as cwbTestIds } from '../ContentWarningBox';
import { cleanup, fireEvent } from '@testing-library/react';
import App from '../../../App';
import { testIds as formButtonsTestIds } from '../FormButtons';
import { render } from '../../../test-utils';
import 'jest-styled-components';

afterEach(cleanup);

it('Renders without crashing', () => {
  render(<ContentWarningBox />);
});

it('Renders hidden', () => {
  const { getByTestId } = render(<App />);
  const cwbWrapper = getByTestId(cwbTestIds.contentWarningBoxWrapper);

  expect(cwbWrapper).toHaveStyleRule(
    'height',
    0,
  );
  expect(cwbWrapper).toHaveStyleRule(
    'opacity',
    0,
  );
  expect(cwbWrapper).toHaveStyleRule(
    'z-index',
    0,
  );
});

it('Get shown when button is clicked', () => {
  const { getByTestId } = render(<App />);
  fireEvent.click(getByTestId(formButtonsTestIds.contentWarningButton));

  const cwbWrapper = getByTestId(cwbTestIds.contentWarningBoxWrapper);

  expect(cwbWrapper).not.toHaveStyleRule(
    'height',
    0,
  );
  expect(cwbWrapper).not.toHaveStyleRule(
    'opacity',
    0,
  );
  expect(cwbWrapper).not.toHaveStyleRule(
    'z-index',
    0,
  );
});
