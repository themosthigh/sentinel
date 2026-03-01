import { EB_Garamond } from 'next/font/google'

import NavigationSidebar from '@/components/navigation/navigation-sidebar'
import '@/styles/global.css'
import { cn } from '@/lib/utils'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'The Advent Sentinel',
  icons: {
    icon: { url: '/favicon.svg', type: 'image/svg' },
  },
}

const font = EB_Garamond({
  subsets: ['latin'],
})

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body
        className={cn(
          'flex h-screen w-screen flex-col overflow-hidden font-medium md:flex-row',
          font.className,
        )}
      >
        <NavigationSidebar />
        <main className="h-full flex-1 overflow-auto">{children}</main>
      </body>
    </html>
  )
}
