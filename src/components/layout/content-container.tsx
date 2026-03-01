import { cn } from '@/lib/utils'

export default function ContentContainer(props: { children: React.ReactNode; className?: string }) {
  return <div {...props} className={cn('mx-auto w-full max-w-7xl px-4', props.className)} />
}
