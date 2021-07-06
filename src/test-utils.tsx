// test-utils.jsx
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store as appStore } from './store/store';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const render = (ui: JSX.Element, { store = appStore } = {}) => {
  return {
    ...rtlRender(
      <Provider store={store}>
        <ThemeProvider theme={theme}>{ui}</ThemeProvider>{' '}
      </Provider>,
    ),
  };
};

// override render method
export { render };
