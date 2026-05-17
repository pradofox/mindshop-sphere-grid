import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemaTypes'

const PROJECT_ID = 'wo3dfzz8'
const DATASET    = 'production'

const CYCLE_KEYS = [
  { key: 'history',     label: 'Historia' },
  { key: 'metaphysics', label: 'Metafísica' },
  { key: 'epistemology',label: 'Epistemología' },
  { key: 'aesthetics',  label: 'Estética' },
  { key: 'ethics',      label: 'Ética' },
]

export default defineConfig({
  name: 'mindshop-sphere-grid',
  title: 'Mindshop Sphere Grid',
  projectId: PROJECT_ID,
  dataset: DATASET,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Contenido')
          .items([
            // ── Un "folder" por ciclo ────────────────────────────────────────
            ...CYCLE_KEYS.map(({ key, label }) =>
              S.listItem()
                .title(label)
                .child(
                  S.list()
                    .title(label)
                    .items([
                      S.listItem()
                        .title('Configuración del ciclo')
                        .child(
                          S.document()
                            .schemaType('cycle')
                            .documentId(`cycle-${key}`)
                            .title(`Configuración - ${label}`)
                        ),
                      S.listItem()
                        .title('Lecciones')
                        .child(
                          S.documentList()
                            .title(`Lecciones - ${label}`)
                            .filter('_type == "node" && cycle._ref == $cycleId')
                            .params({ cycleId: `cycle-${key}` })
                            .defaultOrdering([{ field: 'order', direction: 'asc' }])
                        ),
                    ])
                )
            ),
            S.divider(),
            // ── Talleres y dialécticas ───────────────────────────────────────
            S.listItem()
              .title('Talleres')
              .child(
                S.documentList()
                  .title('Talleres')
                  .filter('_type == "taller"')
                  .defaultOrdering([{ field: 'order', direction: 'asc' }])
              ),
            S.listItem()
              .title('Dialécticas')
              .child(
                S.documentList()
                  .title('Dialécticas')
                  .filter('_type == "dialectica"')
                  .defaultOrdering([{ field: 'order', direction: 'asc' }])
              ),
          ]),
    }),
  ],
  schema: { types: schemaTypes },
})
