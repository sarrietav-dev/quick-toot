// test-utils.jsx
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store as appStore } from './store/store';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const render = (ui: JSX.Element, { store = appStore } = {}) => {
  return { ...rtlRender(<Provider store={store}>{ui}</Provider>) };
};

// override render method
export { render };
