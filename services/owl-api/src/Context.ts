import { ContextParameters } from 'graphql-yoga/dist/src/types';
import { Request } from 'express';
import { ExecutionParams } from 'subscriptions-transport-ws';

import { Team } from './models/Team';
import { Map } from './models/Map';
import { Match } from './models/Match';

class Context {
  request: Request;
  connection: ExecutionParams;
  team: Team;
  map: Map;
  match: Match;

  constructor(contextParameters: ContextParameters) {
    this.request = contextParameters.request;
    this.connection = contextParameters.connection;
    this.team = new Team();
    this.map = new Map();
    this.match = new Match();
  }
}

export default Context;
