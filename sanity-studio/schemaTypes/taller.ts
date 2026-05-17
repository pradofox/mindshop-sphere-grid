import { defineType, defineField } from 'sanity'

export const taller = defineType({
  name: 'taller',
  title: 'Taller',
  type: 'document',
  fields: [
    defineField({ name: 'title',          title: 'Nombre del taller', type: 'string',  validation: r => r.required() }),
    defineField({ name: 'description',    title: 'Descripción',       type: 'text',    rows: 4 }),
    defineField({ name: 'buyUrl',         title: 'Link de compra',    type: 'url' }),
    defineField({ name: 'isFinalProject', title: '¿Es Proyecto Final?', type: 'boolean', initialValue: false }),

    // ── Técnico ───────────────────────────────────────────────────────────────
    defineField({ name: 'order', title: 'Orden', type: 'number', readOnly: true, hidden: true }),
    defineField({ name: 'icon',  title: 'Ícono', type: 'string', readOnly: true, hidden: true }),
  ],
  preview: {
    select: { title: 'title', isFinal: 'isFinalProject' },
    prepare({ title, isFinal }) {
      return { title, subtitle: isFinal ? '⚡ Proyecto Final' : 'Taller' }
    },
  },
})
