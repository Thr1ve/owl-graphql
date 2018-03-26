import { Binding as BaseBinding, BindingOptions } from 'graphql-binding'
import { GraphQLResolveInfo } from 'graphql'

export interface Map {
  id: ID_Output
  name?: String
  background?: String
  icon?: String
  type?: String
  description?: String
  thumbnail?: String
}

export interface Match {
  id: ID_Output
  competitors?: Team[]
  scores?: Int[]
  conclusionValue?: Int
  conclusionStrategy?: String
  winner?: Team
  dateCreated?: String
  handle?: String
  startDate?: String
  endDate?: String
  state?: String
}

export interface TeamRanking {
  streak?: String
  streakNum?: Int
}

export interface Team {
  id: ID_Output
  availableLanguages?: String[]
  handle?: String
  name?: String
  game?: String
  aboutUrl?: String
  ranking?: TeamRanking
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

export interface Schema {
  query: Query
}

export type Query = {
  team: (args: { id: ID_Output }, context: { [key: string]: any }, info?: GraphQLResolveInfo | string) => Promise<Team>
  teams: (args: {}, context: { [key: string]: any }, info?: GraphQLResolveInfo | string) => Promise<Team[] | null>
  match: (args: { id: ID_Output }, context: { [key: string]: any }, info?: GraphQLResolveInfo | string) => Promise<Match>
  matches: (args: {}, context: { [key: string]: any }, info?: GraphQLResolveInfo | string) => Promise<Match[] | null>
  map: (args: { id: ID_Output }, context: { [key: string]: any }, info?: GraphQLResolveInfo | string) => Promise<Map>
  maps: (args: {}, context: { [key: string]: any }, info?: GraphQLResolveInfo | string) => Promise<Map[] | null>
}

export class Binding extends BaseBinding {
  
  constructor({ schema, fragmentReplacements }: BindingOptions) {
    super({ schema, fragmentReplacements });
  }
  
  query: Query = {
    team: (args, context, info): Promise<Team> => super.delegate('query', 'team', args, context, info),
    teams: (args, context, info): Promise<Team[] | null> => super.delegate('query', 'teams', args, context, info),
    match: (args, context, info): Promise<Match> => super.delegate('query', 'match', args, context, info),
    matches: (args, context, info): Promise<Match[] | null> => super.delegate('query', 'matches', args, context, info),
    map: (args, context, info): Promise<Map> => super.delegate('query', 'map', args, context, info),
    maps: (args, context, info): Promise<Map[] | null> => super.delegate('query', 'maps', args, context, info)
  }
}