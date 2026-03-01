import { cn } from '@/lib/utils'

import { Cormorant_Garamond } from 'next/font/google'

const font = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'auto',
})

export function Heading(props: {
  children: React.ReactNode
  level: 1 | 2 | 3 | 4 | 5 | 6
  className?: string
}) {
  const Component = 'h1'

  const sizeMap = {
    h1: 'text-4xl',
    h2: 'text-2xl',
    h3: 'text-xl',
    h4: 'text-lg',
    h5: 'text-md',
    h6: 'text-sm',
  }

  return (
    <Component
      {...props}
      className={cn(sizeMap[Component], 'font-black', font.className, props.className)}
    />
  )
}
