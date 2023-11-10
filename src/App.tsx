import { ToastContainer } from './commons/components/modules';
import { BagContextProvider } from './commons/contexts/BagContext';
import { GlobalStyle } from './commons/styles/GlobalStyles';
import { Theme } from './commons/styles/theme';
import { AppRoutes } from './routes';

export const App = () => (
  <Theme>
    <GlobalStyle />
    <BagContextProvider>
      <AppRoutes />
    </BagContextProvider>
    <ToastContainer />
  </Theme>
);
