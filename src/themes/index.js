import React from 'react';
import { ThemeProvider } from 'styled-components';

import mainTheme from './main';

const Theme = ({ children }) => (
  <ThemeProvider theme={mainTheme}>
    {children}
  </ThemeProvider>
);

export default Theme;
