import { mergeResolvers } from '../utils';

import Team from './Team';
import Match from './Match';
import { default as _Map } from './Map';

export default mergeResolvers([Team, _Map, Match]);
