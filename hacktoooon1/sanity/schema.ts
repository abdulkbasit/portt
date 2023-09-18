import { type SchemaTypeDefinition } from 'sanity'
 
import project from './project'
import tech from './tech'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ tech,project],
}
