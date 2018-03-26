import Context from '../Context';
import { ResolverMap } from '../types';
import { logger } from '../utils';

const resolvers: ResolverMap = {
  Query: {
    async team(obj, { id }, ctx: Context) {
      logger.info('team start');

      const result = await ctx.team.teamLoader.load(id);

      return result;
    },
    async teams(obj, input, ctx: Context) {
      logger.info('teamsConnection start');

      const result = await ctx.team.allTeams();

      logger.info('result: ', result);

      return result;
    }
  }
};

export default resolvers;
