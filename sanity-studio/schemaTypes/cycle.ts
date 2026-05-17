import { defineType, defineField } from 'sanity'

export const cycle = defineType({
  name: 'cycle',
  title: 'Ciclo',
  type: 'document',
  fields: [
    defineField({ name: 'key', title: 'Key (ID interno)', type: 'slug', options: { source: 'label' }, validation: r => r.required() }),
    defineField({ name: 'order', title: 'Orden en el grid', type: 'number', validation: r => r.required() }),
    defineField({ name: 'label', title: 'Nombre del ciclo', type: 'string', validation: r => r.required() }),
    defineField({ name: 'color', title: 'Color hex', type: 'string', initialValue: '#2244CC' }),
    defineField({ name: 'glow', title: 'Color de glow hex', type: 'string', initialValue: '#5577EE' }),
    defineField({ name: 'hubCx', title: 'Posición X del hub (SVG)', type: 'number' }),
    defineField({ name: 'hubCy', title: 'Posición Y del hub (SVG)', type: 'number' }),
    defineField({ name: 'prospectusUrl', title: 'Link al prospectus (PDF Google Drive)', type: 'url' }),
    defineField({ name: 'buyUrl', title: 'Link de compra / inscripción', type: 'url' }),
    defineField({
      name: 'nodes',
      title: 'Nodos / Lecciones',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'node' }] }],
    }),
  ],
  preview: {
    select: { title: 'label', subtitle: 'key.current' },
  },
})
