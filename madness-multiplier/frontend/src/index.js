import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
<Auth0Provider
    domain="billymccune123.us.auth0.com"
    clientId="8MRcFSbImJa4il1E0zi3o9O8HRiDRji9"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>,
  </React.StrictMode>
);