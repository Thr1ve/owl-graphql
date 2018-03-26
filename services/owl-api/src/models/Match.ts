import * as DataLoader from 'dataloader';
import { owlApi } from '../lib/owlApi';

export class Match {
  matchLoader: DataLoader<any, any>;

  constructor() {
    this.matchLoader = new DataLoader(keys =>
      Promise.all(
        keys.map(async key => {
          const result = await owlApi({ route: `/match/${key}` });

          return result.data;
        })
      )
    );
  }

  async allMatches() {
    const { data } = await owlApi({ route: '/match' });

    return data.content;
  }
}
