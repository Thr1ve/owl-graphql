import Context from '../Context';
import { ResolverMap } from '../types';
import { logger } from '../utils';

const resolvers: ResolverMap = {
  Map: {
    name(obj, { language }, ctx: Context) {
      if (obj.name) {
        return obj.name[language];
      }
    },
    description(obj, { language }, ctx: Context) {
      if (obj.description) {
        return obj.description[language];
      }
    }
  },
  Query: {
    async map(obj, { id }, ctx: Context) {
      logger.info('map start');

      const result = await ctx.map.findByName(id);

      return result;
    },
    async maps(obj, input, ctx: Context) {
      logger.info('mapsConnection start');

      const result = await ctx.map.allMaps();

      return result;
    }
  }
};

export default resolvers;
