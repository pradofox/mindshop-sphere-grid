import { defineType, defineField } from 'sanity'

export const cycle = defineType({
  name: 'cycle',
  title: 'Ciclo',
  type: 'document',
  fields: [
    // ── Lo que el equipo de Mateus edita ──────────────────────────────────────
    defineField({ name: 'label',         title: 'Nombre del ciclo',            type: 'string',  validation: r => r.required() }),
    defineField({ name: 'prospectusUrl', title: 'Link al prospectus (PDF)',     type: 'url' }),
    defineField({ name: 'buyUrl',        title: 'Link de inscripción / compra', type: 'url' }),

    // ── Técnico — no tocar ────────────────────────────────────────────────────
    defineField({ name: 'key',   title: 'ID interno', type: 'slug', options: { source: 'label' }, readOnly: true, hidden: true }),
    defineField({ name: 'order', title: 'Orden',      type: 'number', readOnly: true, hidden: true }),
    defineField({ name: 'color', title: 'Color',      type: 'string', readOnly: true, hidden: true }),
    defineField({ name: 'glow',  title: 'Glow',       type: 'string', readOnly: true, hidden: true }),
    defineField({ name: 'hubCx', title: 'Hub X',      type: 'number', readOnly: true, hidden: true }),
    defineField({ name: 'hubCy', title: 'Hub Y',      type: 'number', readOnly: true, hidden: true }),
    defineField({ name: 'nodes', title: 'Nodos',      type: 'array', of: [{ type: 'reference', to: [{ type: 'node' }] }], hidden: true }),
  ],
  preview: {
    select: { title: 'label' },
  },
})
