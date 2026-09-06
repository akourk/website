import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import AppRoutes from './AppRoutes';
import './static/css/main.scss'; // All of our styles

const App = () => (
  <HelmetProvider>
    <BrowserRouter
      basename={import.meta.env.BASE_URL}
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <AppRoutes />
    </BrowserRouter>
  </HelmetProvider>
);

export default App;
