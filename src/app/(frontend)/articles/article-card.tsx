import { Heading } from '@/components/typography/heading'
import { RichText } from '@/components/typography/rich-text'
import { Media } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'

export default function ArticleCard(props: {
  title: string
  slug: string
  description: any
  image: Media
  categories: string[]
}) {
  return (
    <Link
      href={`/articles/${props.slug}`}
      className="transition-color hover:bg-accent grid gap-4 rounded-xl md:grid-cols-[240px_1fr]"
    >
      {props.image ? (
        <Image
          src={props.image.url ?? ''}
          alt={props.image.alt}
          width={160}
          height={90}
          className="size-full rounded-xl"
        />
      ) : (
        <div></div>
      )}
      <div className="flex flex-col gap-4">
        <span className="text-xl font-semibold">{props.title}</span>
        <RichText content={props.description} />
      </div>
    </Link>
  )
}
