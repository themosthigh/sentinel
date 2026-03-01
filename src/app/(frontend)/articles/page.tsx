import config from '@/payload.config'

import ContentContainer from '@/components/layout/content-container'
import { Heading } from '@/components/typography/heading'
import { getPayload } from 'payload'
import ArticleCard from './article-card'
import { Media } from '@/payload-types'

export const metadata = {
  title: 'Articles (Advent Sentinel)',
}

export default async function ArticlesPage() {
  const payload = await getPayload({ config })
  const articles = await payload.find({
    collection: 'articles',
    limit: 10,
    depth: 2,
    select: {
      slug: true,
      title: true,
      description: true,
      updatedAt: true,
      createdAt: true,
      category: true,
      image: true,
    },
    sort: ['-createdAt'],
    where: {
      _status: {
        equals: 'published',
      },
    },
  })

  const docs = articles.docs

  return (
    <ContentContainer className="relative flex flex-col gap-8">
      <div className="bg-background sticky top-0 border-b px-2 py-2">
        <Heading level={1}> Articles </Heading>
      </div>
      {docs &&
        docs.map((doc) => (
          <ArticleCard
            key={doc.id}
            title={doc.title}
            slug={doc.slug}
            description={doc?.description ?? ''}
            categories={(doc.category ?? [])?.map((c) => c.toString())}
            image={doc.image as Media}
          />
        ))}
    </ContentContainer>
  )
}
