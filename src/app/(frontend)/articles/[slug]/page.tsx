import config from '@/payload.config'

import ContentContainer from '@/components/layout/content-container'
import { Heading } from '@/components/typography/heading'
import { headers } from 'next/headers'
import { getPayload } from 'payload'
import Image from 'next/image'
import { Media } from '@/payload-types'
import { RichText } from '@/components/typography/rich-text'

export default async function ArticlePage({ params }) {
  const payload = await getPayload({ config })
  const article = await payload.find({
    collection: 'articles',
    depth: 2,
    where: {
      slug: {
        equals: (await params).slug,
      },
    },
  })

  const doc = article.docs[0]

  return (
    <ContentContainer className="flex flex-col gap-8 py-8">
      <RichText content={doc.description} />

      {doc.image && (
        <Image
          src={(doc.image as Media)?.url}
          alt=""
          width={1600}
          height={900}
          className="aspect-video w-full rounded-sm object-cover"
        />
      )}

      <Heading level={1}>{doc.title}</Heading>

      <RichText content={doc.content} />
    </ContentContainer>
  )
}
