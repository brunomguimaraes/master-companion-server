import { makeExecutableSchema } from 'graphql-tools'
import schema from './graphql/schema.gql'
import { user, character, sheet } from '../resolvers'

const resolvers = [user, character, sheet]

export default makeExecutableSchema({typeDefs:schema, resolvers: resolvers as any})