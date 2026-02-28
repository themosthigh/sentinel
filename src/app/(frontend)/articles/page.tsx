import ContentContainer from '@/components/layout/content-container'
import { Heading } from '@/components/typography/Heading'

export const metadata = {
  title: 'Articles (Advent Sentinel)',
}

export default async function ArticlesPage() {
  return (
    <ContentContainer>
      <Heading level={1}> Articles </Heading>
    </ContentContainer>
  )
}
