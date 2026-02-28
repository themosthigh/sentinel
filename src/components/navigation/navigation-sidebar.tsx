import Link from 'next/link'
import Logo from '../shared/logo'
import { routes } from './routes'

export default function NavigationSidebar() {
  return (
    <nav className="bg-gray-300 text-black h-full border-r border-gray-400 relative flex flex-col gap-8">
      <Link href="/" className="p-6 hover:bg-black/5 transition-colors">
        <Logo />
      </Link>

      <ul className="px-4 py-2 flex flex-col gap-4">
        {routes.map((e) => (
          <Link href={e.uri} key={e.uri}>
            <li> {e.label} </li>
          </Link>
        ))}
      </ul>
    </nav>
  )
}
