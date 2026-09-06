import { BrowserRouter } from 'react-router';

import AppRoutes from './AppRoutes';
import './static/css/main.scss'; // All of our styles

const App = () => (
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <AppRoutes />
  </BrowserRouter>
);

export default App;
