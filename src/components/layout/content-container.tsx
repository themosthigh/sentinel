import { cn } from '@/lib/utils'

export default function ContentContainer(props: { children: React.ReactNode; className?: string }) {
  return <div {...props} className={cn('mx-auto max-w-7xl p-2', props.className)} />
}
