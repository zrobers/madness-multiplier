import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
<Auth0Provider
    domain="madnessmultiplier.us.auth0.com"
    clientId="QTa9g9LHlrPOygJYWgfgpTJxyLk8OaTD"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>,
  </React.StrictMode>
);