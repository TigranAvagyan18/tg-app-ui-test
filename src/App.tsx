import { createAppKit } from '@reown/appkit/react'

import { WagmiProvider } from 'wagmi'
import { arbitrum, mainnet } from '@reown/appkit/networks'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { useTelegram } from './hooks/use-telegram'
import { useEffect } from 'react'

const queryClient = new QueryClient()

const projectId = import.meta.env.VITE_PROJECT_ID

const metadata = {
  name: 'Tg mini app',
  description: 'Tg mini app',
  url: import.meta.env.VITE_WEB_APP_URL,
  icons: ['https://avatars.githubusercontent.com/u/179229932'],
}

const networks = [mainnet, arbitrum]

const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: true,
})

// 5. Create modal
createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  metadata,
  features: {
    analytics: true,
  },
})

export function AppKitProvider({
  children: children,
}: {
  children: React.ReactNode
}) {
  const { tg } = useTelegram()

  useEffect(() => {
    if (!tg.isExpanded) {
      tg.expand()
    }
  }, [])

  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}
