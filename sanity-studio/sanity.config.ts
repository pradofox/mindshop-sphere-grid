import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemaTypes'

// TODO: reemplazar con el projectId real después de correr `sanity init`
const PROJECT_ID = 'wo3dfzz8'
const DATASET    = 'production'

export default defineConfig({
  name: 'mindshop-sphere-grid',
  title: 'Mindshop Sphere Grid',
  projectId: PROJECT_ID,
  dataset: DATASET,
  plugins: [structureTool()],
  schema: { types: schemaTypes },
})
