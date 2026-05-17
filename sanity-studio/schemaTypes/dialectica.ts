import { defineType, defineField } from 'sanity'

// Las 4 dialécticas: pares de nodos filosóficamente opuestos/complementarios.
// Cada dialéctica conecta dos nodos del grid visualmente.
export const dialectica = defineType({
  name: 'dialectica',
  title: 'Dialéctica',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Nombre de la dialéctica', type: 'string', validation: r => r.required() }),
    defineField({ name: 'description', title: 'Descripción del par dialéctico', type: 'text', rows: 3 }),
    defineField({ name: 'order', title: 'Orden (1-4)', type: 'number', validation: r => r.required().min(1).max(4) }),
    defineField({ name: 'nodeA', title: 'Nodo A', type: 'reference', to: [{ type: 'node' }], validation: r => r.required() }),
    defineField({ name: 'nodeB', title: 'Nodo B', type: 'reference', to: [{ type: 'node' }], validation: r => r.required() }),
    defineField({ name: 'color', title: 'Color del conector (hex)', type: 'string', description: 'Color de la línea/conector visual entre los dos nodos' }),
  ],
  preview: {
    select: { title: 'title', a: 'nodeA.title', b: 'nodeB.title' },
    prepare({ title, a, b }) {
      return { title, subtitle: a && b ? `${a} ↔ ${b}` : 'Sin nodos asignados' }
    },
  },
})
