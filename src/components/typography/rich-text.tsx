import { cn } from '@/lib/utils'

export const RichText = ({ content }: { content: any }) => {
  if (!content) return null

  return (
    <div className={cn('prose lg:prose-xl max-w-none')}>
      {content.root.children.map((node, index) => {
        // Handle Text Nodes
        if (node.type === 'text') {
          return <span key={index}>{node.text}</span>
        }

        // Handle Paragraphs
        if (node.type === 'paragraph') {
          return (
            <p key={index}>
              {node.children.map((child, i) => (
                <span key={i}>{child.text}</span>
              ))}
            </p>
          )
        }

        // Handle Headings, Lists, etc.
        if (node.type === 'heading') {
          const Tag = node.tag
          return <Tag key={index}>{node.children[0]?.text}</Tag>
        }

        return null
      })}
    </div>
  )
}
