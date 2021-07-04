import { createContext } from 'react';

export default createContext({
  shown: false,
  toggleWarning: (value: boolean) => {},
});
