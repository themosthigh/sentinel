import { CollectionConfig } from 'payload'

const ArticleCategories: CollectionConfig = {
  slug: 'article-categories',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'updatedAt'],
  },
  access: {
    read: () => true, // Publicly readable
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      required: true,
      admin: {
        description: 'Used in the URL (e.g., "case-studies")',
      },
    },
    {
      name: 'parent',
      type: 'relationship',
      relationTo: 'article-categories',
      admin: {
        description: 'Allow for nested sub-categories if needed',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Category Description',
    },
  ],
}

export default ArticleCategories
