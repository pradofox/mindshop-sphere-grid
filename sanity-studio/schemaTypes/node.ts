import { defineType, defineField } from 'sanity'

export const node = defineType({
  name: 'node',
  title: 'Nodo',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Título', type: 'string', validation: r => r.required() }),
    defineField({ name: 'description', title: 'Descripción', type: 'text', rows: 5, validation: r => r.required() }),
    defineField({ name: 'cycle', title: 'Ciclo', type: 'reference', to: [{ type: 'cycle' }], validation: r => r.required() }),
    defineField({ name: 'order', title: 'Posición dentro del ciclo', type: 'number', validation: r => r.required() }),
    defineField({ name: 'isExtra', title: '¿Es nodo extra?', type: 'boolean', initialValue: false }),
  ],
  orderings: [
    { title: 'Por ciclo y orden', name: 'cycleOrder', by: [{ field: 'cycle._ref', direction: 'asc' }, { field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'title', subtitle: 'cycle.label', order: 'order' },
    prepare({ title, subtitle, order }) {
      return { title: `${order}. ${title}`, subtitle }
    },
  },
})
