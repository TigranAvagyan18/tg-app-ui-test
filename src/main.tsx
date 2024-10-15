import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppKitProvider } from './App.tsx'
import { ConnectButton } from './components/connect.tsx'
import { Account } from './components/account.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppKitProvider>
      <div className='w-screen h-screen flex flex-col items-center justify-center gap-3'>
        <Account />
        <ConnectButton />
      </div>
    </AppKitProvider>
  </React.StrictMode>
)
