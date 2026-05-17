import { defineType, defineField } from 'sanity'

export const node = defineType({
  name: 'node',
  title: 'Nodo',
  type: 'document',
  fields: [
    // ── Lo que el equipo de Mateus edita ──────────────────────────────────────
    defineField({ name: 'title',       title: 'Título',      type: 'string', validation: r => r.required() }),
    defineField({ name: 'description', title: 'Descripción', type: 'text',   rows: 5, validation: r => r.required() }),

    // ── Técnico — no tocar ────────────────────────────────────────────────────
    defineField({ name: 'cycle',   title: 'Ciclo',   type: 'reference', to: [{ type: 'cycle' }], readOnly: true, hidden: true }),
    defineField({ name: 'order',   title: 'Orden',   type: 'number',    readOnly: true, hidden: true }),
    defineField({ name: 'isExtra', title: '¿Extra?', type: 'boolean',   readOnly: true, hidden: true }),
  ],
  preview: {
    select: { title: 'title', order: 'order' },
    prepare({ title, order }) {
      return { title: `${(order ?? 0) + 1}. ${title}` }
    },
  },
})
