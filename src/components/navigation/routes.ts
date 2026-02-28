type Route = {
  label: string
  uri: string
}

export const routes: Route[] = [
  { label: 'Articles', uri: '/articles' },
  { label: 'Poetry', uri: '/poems' },
  { label: 'Stories', uri: '/stories' },
] as const
