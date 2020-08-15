import { Model } from 'objection'
import { CharacterType, Maybe } from '../__generated__/generated-types'

import User from './User'
import Sheet from './Sheet'

class Character extends Model {
    static tableName = 'characters';
    id!: number;
    name?: Maybe<string>;
    character_type?: Maybe<CharacterType>;
    created_at?: string;
    creator_id!: number;
    creator?: User;
    sheet?: Sheet;

    static jsonSchema = {
      type: 'object',
      required: ['name'],

      properties: {
        id: { type: 'integer' },
        name: { type: 'string', min: 1, max: 255 },
        character_type: { type: 'string', min: 1, max: 255 },
        created_at: { type: 'string', min: 1, max: 255 }
      }
    };

    static relationMappings = () => ({
      creator: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'character.creator_id',
          to: 'users.id',
        }
      },
      sheet: {
        relation: Model.HasOneRelation,
        modelClass: Sheet,
        join: {
          from: 'character.id',
          to: 'sheets.character_id',
        }
      }
    });


}

export default Character