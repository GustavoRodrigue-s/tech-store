import { ToastContainer } from './commons/components/modules';
import { CartContextProvider } from './commons/contexts/CartContext';
import { GlobalStyle } from './commons/styles/GlobalStyles';
import { Theme } from './commons/styles/theme';
import { AppRoutes } from './routes';

export const App = () => (
  <Theme>
    <GlobalStyle />
    <CartContextProvider>
      <AppRoutes />
    </CartContextProvider>
    <ToastContainer />
  </Theme>
);
