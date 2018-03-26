import Context from '../Context';
import { ResolverMap } from '../types';
import { logger } from '../utils';

const resolvers: ResolverMap = {
  Match: {
    scores(obj, args, ctx: Context) {
      if (obj.scores && obj.scores.length) {
        return obj.scores.map(v => v.value);
      }
    },
    competitors(obj, args, ctx: Context) {
      if (obj.competitors && obj.competitors.length) {
        return ctx.team.teamLoader.loadMany(obj.competitors.map(v => v.id));
      }
    },
    winner(obj, args, ctx: Context) {
      if (obj.winner) {
        return ctx.team.teamLoader.load(obj.winner.id);
      }
    }
  },
  Query: {
    async match(obj, { id }, ctx: Context) {
      logger.info('match start');

      const result = await ctx.match.matchLoader.load(id);

      return result;
    },
    async matches(obj, input, ctx: Context) {
      logger.info('matchesConnection start');

      const result = await ctx.match.allMatches();

      return result;
    }
  }
};

export default resolvers;
