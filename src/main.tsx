import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Auth0Provider
    domain="dev-5lnfbck0axa5rkdw.us.auth0.com"
    clientId="9zt6IZVQ8rtQtNa2T9XIcIs6lctxUP0V"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Auth0Provider>
)
