import { GlobalStyle } from './commons/styles/GlobalStyles';
import { Theme } from './commons/styles/theme';

import { AppRoutes } from './routes';

export const App = () => (
  <Theme>
    <GlobalStyle />
    <AppRoutes />
  </Theme>
);
