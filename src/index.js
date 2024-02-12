import React from 'react';
import ReactDOM from 'react-dom/client';
import { theme } from 'constants/theme';
import { ThemeProvider } from '@emotion/react';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* <Provider store={store}> */}
        {/* <PersistGate loading={null} persistor={persistor}> */}
          <BrowserRouter>
            <App />
          </BrowserRouter>
        {/* </PersistGate> */}
      {/* </Provider> */}
    </ThemeProvider>
  </React.StrictMode>
);