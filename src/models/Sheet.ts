import { Model } from 'objection'
import { Maybe, SheetType } from '../__generated__/generated-types'
import Character from './Character'



class Sheet extends Model{
    static tableName = 'sheets';
    id! : number;
    character_id!: number;
    sheet_type?: Maybe<SheetType>;
    created_at?: string;

    static jsonSchema = {
      type:'object',
      required:['full_name',],

      properties:{
        id: { type:'integer'},
        created_at:{type :'string', min:1, max :255},
        sheet_type:{type :'string', min:1, max :255}
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