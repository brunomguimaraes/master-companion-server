
import { Sheet, Character } from '../models'
import { Resolvers } from '../__generated__/generated-types'
import { UserInputError } from 'apollo-server-express'


const resolvers : Resolvers = {
  Query:{
    sheet: async( parent, args, ctx ) => {
      const sheet: Sheet = await Sheet.query().findById(args.id)

      return sheet
    },
    sheets: async ( parent, args, ctx ) => {
      const sheet: Sheet[] = await Sheet.query()

      return sheet
    }
  },
  Mutation: {
    createSheet:async ( parent,args,ctx ) => {
      let sheet: Sheet
      try {
        sheet  = await Sheet.query().insert({...args.sheet})
               
      } catch (error) {
        throw new UserInputError('Bad sheet input. Fields required:',{
          invalidArgs: Object.keys(args),
        })
                
      }
      return sheet
    },

    updateSheet: async (parent, { sheet: {id, ...data }}, ctx ) => {
      const sheet : Sheet = await Sheet.query()
        .patchAndFetchById(id, data)

      return sheet
    },

    deleteSheet:async (parent,args,ctx)=>{
      const sheet = await Sheet.query().deleteById(args.id)
      return 'Successfully deleted'
    },
  }
}


export default resolvers