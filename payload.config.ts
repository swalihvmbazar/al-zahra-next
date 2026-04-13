import path from 'path'
import { fileURLToPath } from 'url'
import { buildConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import sharp from 'sharp'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
    admin: {
        user: 'users',
        importMap: {
            baseDir: path.resolve(dirname),
        },
    },

    collections: [
        {
            slug: 'users',
            auth: true,
            admin: {
                useAsTitle: 'email',
            },
            fields: [],
        },
        {
            slug: 'media',
            upload: true,
            fields: [
                {
                    name: 'alt',
                    type: 'text',
                    required: true,
                },
            ],
        },
        {
            slug: 'pages',
            admin: {
                useAsTitle: 'title',
            },
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'content',
                    type: 'richText',
                    editor: lexicalEditor({}),
                },
            ],
        },
        {
            slug: 'products',
            admin: {
                useAsTitle: 'title',
                defaultColumns: ['title', 'category', 'updatedAt'],
            },
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'category',
                    type: 'select',
                    required: true,
                    options: [
                        { label: 'Insulation', value: 'insulation' },
                        { label: 'Aluminium Jacketing', value: 'jacketing' },
                        { label: 'Vibration Control', value: 'vibration' },
                        { label: 'Duct Accessories', value: 'duct' },
                        { label: 'A/C Parts', value: 'ac-parts' },
                        { label: 'Copper Pipes & Fittings', value: 'copper' },
                        { label: 'Freon Gas', value: 'freon' },
                        { label: 'Sealants & Adhesives', value: 'sealants' },
                        { label: 'Duct Tape & Coatings', value: 'tape' },
                        { label: 'Flexible Ducts', value: 'flexible' },
                    ],
                },
                {
                    name: 'description',
                    type: 'textarea',
                    required: true,
                },
                {
                    name: 'icon',
                    type: 'text',
                    label: 'Icon Class (RemixIcon)',
                    required: true,
                    admin: {
                        description: 'e.g. ri-temp-cold-line — see remixicon.com',
                    },
                },
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                },
                {
                    name: 'order',
                    type: 'number',
                    defaultValue: 0,
                    admin: {
                        description: 'Lower numbers appear first',
                    },
                },
            ],
        },
        {
            slug: 'brands',
            admin: {
                useAsTitle: 'name',
                defaultColumns: ['name', 'updatedAt'],
            },
            fields: [
                {
                    name: 'name',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'logo',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                },
                {
                    name: 'order',
                    type: 'number',
                    defaultValue: 0,
                    admin: {
                        description: 'Lower numbers appear first',
                    },
                },
            ],
        },
        {
            slug: 'projects',
            admin: {
                useAsTitle: 'title',
                defaultColumns: ['title', 'category', 'year', 'featured'],
            },
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'category',
                    type: 'text',
                    required: true,
                    admin: {
                        description: 'e.g. Commercial Office, Healthcare Facility',
                    },
                },
                {
                    name: 'location',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'year',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                },
                {
                    name: 'description',
                    type: 'textarea',
                    required: true,
                },
                {
                    name: 'systems',
                    type: 'array',
                    label: 'Systems Installed',
                    fields: [
                        {
                            name: 'system',
                            type: 'text',
                            required: true,
                        },
                    ],
                },
                {
                    name: 'featured',
                    type: 'checkbox',
                    defaultValue: false,
                    admin: {
                        description: 'Show in the homepage highlights section',
                    },
                },
                {
                    name: 'order',
                    type: 'number',
                    defaultValue: 0,
                    admin: {
                        description: 'Lower numbers appear first',
                    },
                },
            ],
        },
    ],

    editor: lexicalEditor({}),

    secret: process.env.PAYLOAD_SECRET || '',

    typescript: {
        outputFile: path.resolve(dirname, 'payload-types.ts'),
    },

    db: mongooseAdapter({
        url: process.env.DATABASE_URI || '',
    }),

    sharp,
})
