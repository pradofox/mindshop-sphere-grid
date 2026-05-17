import { defineType, defineField } from 'sanity'

// Los 6 talleres del Sphere Grid. Aparecen como nodos tipo runa en el grid.
export const taller = defineType({
  name: 'taller',
  title: 'Taller',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Nombre del taller', type: 'string', validation: r => r.required() }),
    defineField({ name: 'description', title: 'Descripción', type: 'text', rows: 4 }),
    defineField({ name: 'order', title: 'Orden (1-6)', type: 'number', validation: r => r.required().min(1).max(6) }),
    defineField({ name: 'isFinalProject', title: '¿Es el Proyecto Final?', type: 'boolean', initialValue: false }),
    defineField({ name: 'icon', title: 'Ícono (nombre o SVG path)', type: 'string', description: 'Nombre del ícono o path SVG del símbolo tipo runa' }),
    defineField({ name: 'buyUrl', title: 'Link de compra', type: 'url' }),
  ],
  preview: {
    select: { title: 'title', order: 'order', isFinal: 'isFinalProject' },
    prepare({ title, order, isFinal }) {
      return { title: `${order}. ${title}`, subtitle: isFinal ? '⚡ Proyecto Final' : 'Taller' }
    },
  },
})
