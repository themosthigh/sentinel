export function Heading(props: { children: React.ReactNode; level: 1 | 2 | 3 | 4 | 5 | 6 }) {
  const Component = 'h1'

  const sizeMap = {
    h1: 'text-4xl',
    h2: 'text-2xl',
    h3: 'text-xl',
    h4: 'text-lg',
    h5: 'text-md',
    h6: 'text-sm',
  }

  return <Component {...props} className={sizeMap[Component]} />
}
