import { CollectionConfig, slugField } from 'payload'

const Articles: CollectionConfig = {
  slug: 'articles',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'author', 'category', 'status'],
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            slugField({
              name: 'slug',
            }),
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
              admin: {
                description: 'The primary image displayed at the top of the article.',
              },
            },
            {
              name: 'author',
              type: 'relationship',
              relationTo: 'users',
              required: true,
              admin: {
                position: 'sidebar',
              },
            },
            {
              name: 'category',
              type: 'relationship',
              relationTo: 'article-categories',
              hasMany: true,
              admin: {
                position: 'sidebar',
              },
            },
            {
              name: 'description',
              type: 'richText',
            },
            {
              name: 'content',
              type: 'richText',
              required: true,
            },
          ],
        },
        {
          label: 'Metadata',
          fields: [
            {
              name: 'meta',
              type: 'group',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  label: 'SEO Title',
                },
                {
                  name: 'description',
                  type: 'textarea',
                  label: 'SEO Description',
                },
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Social Sharing Image',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

export default Articles
