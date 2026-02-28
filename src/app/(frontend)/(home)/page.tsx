import ContentContainer from '@/components/layout/content-container'
import { Heading } from '@/components/typography/Heading'

export default async function HomePage() {
  return (
    <ContentContainer className="border-border border-b">
      <Heading level={1} className="uppercase">
        The Advent Sentinel
      </Heading>
    </ContentContainer>
  )
}
