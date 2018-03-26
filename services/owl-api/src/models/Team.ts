import * as DataLoader from 'dataloader';
import { owlApi } from '../lib/owlApi';

export class Team {
  teamLoader: DataLoader<any, any>;

  constructor() {
    this.teamLoader = new DataLoader(keys =>
      Promise.all(
        keys.map(async key => {
          const result = await owlApi({ route: `/teams/${key}` });

          return result.data;
        })
      )
    );
  }

  async allTeams() {
    const { data } = await owlApi({ route: '/teams' });

    return data.competitors.map(v => v.competitor);
  }
}
