import Link from 'next/link'
import Logo from '../shared/logo'
import { routes } from './routes'

export default function NavigationSidebar() {
  return (
    <nav className="border-sidebar-border bg-sidebar-accent text-sidebar-foreground relative flex h-full flex-col gap-8 border-r">
      <Link href="/" className="hover:bg-foreground/5 p-6 transition-colors">
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
