import NavigationSidebar from '@/components/navigation/navigation-sidebar'
import '@/styles/global.css'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'The Advent Sentinel',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body className="flex h-screen w-screen overflow-hidden">
        <NavigationSidebar />
        <main className="h-full flex-1">{children}</main>
      </body>
    </html>
  )
}
