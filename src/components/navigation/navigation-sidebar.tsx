import Link from 'next/link'
import Logo from '../shared/logo'
import { routes } from './routes'

export default function NavigationSidebar() {
  return (
    <nav className="bg-gray-200 text-black h-full border-r border-gray-300 relative flex flex-col gap-2">
      <Link href="/" className="px-4 py-2">
        <Logo />
      </Link>

      <hr />

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
