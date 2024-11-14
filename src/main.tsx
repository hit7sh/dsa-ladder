import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Auth0Provider } from "@auth0/auth0-react"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-jr8a7yjfh0drqj2w.us.auth0.com"
      clientId="0Cga6kVMPhP7aY2iAr6RtRVwllvD9F63"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>,
)
