import Link from 'next/link'
import Logo from '../shared/logo'
import { routes } from './routes'

export default function NavigationSidebar() {
  return (
    <nav className="relative flex h-full flex-col gap-8 border-r border-gray-400 bg-gray-300 text-black">
      <Link href="/" className="p-6 transition-colors hover:bg-black/5">
        <Logo />
      </Link>

      <ul className="flex flex-col gap-4 px-4 py-2">
        {routes.map((e) => (
          <Link href={e.uri} key={e.uri}>
            <li> {e.label} </li>
          </Link>
        ))}
      </ul>
    </nav>
  )
}
