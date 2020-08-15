import { Model } from 'objection'
import { Maybe, SheetType } from '../__generated__/generated-types'
import Character from './Character'



class Sheet extends Model{
    static tableName = 'sheets';
    id! : number;
    character_id!: number;
    sheet_type?: Maybe<SheetType>;

    static jsonSchema = {
      type:'object',
      required:['full_name',],

      properties:{
        id: { type:'integer'},
        full_name:{type :'string', min:1, max :255},
        created_at:{type :'string', min:1, max :255}
      }
    }

    static relationMappings = () => ({
      character: {
        relation: Model.BelongsToOneRelation,
        modelClass: Character,
        join: {
          from: 'sheet.character_id',
          to: 'character.id'
        }
      }
    })
}

export default Sheet