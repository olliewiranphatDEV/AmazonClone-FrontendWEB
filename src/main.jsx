import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { ClerkProvider } from '@clerk/clerk-react'

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env.local file')
}

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}
      signInFallbackRedirectUrl='/'
    >
      {/* Components under ClerkProvider : can use Hook Clerk */}
      <App />
    </ClerkProvider>
  </BrowserRouter>
)
