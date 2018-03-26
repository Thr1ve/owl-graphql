import { owlApi } from '../lib/owlApi';

export class Map {
  hasFetched: boolean;
  maps: any[];

  constructor() {
    this.hasFetched = false;
    this.maps = [];
  }

  async _fetch() {
    if (!this.hasFetched) {
      const { data } = await owlApi({ route: '/maps' });

      this.maps = data;
      this.hasFetched = true;
    }

    return this.maps;
  }

  async findByName(name: string) {
    const maps = await this._fetch();

    const result = maps.find(map => map.id === name);

    if (!result) {
      throw new Error(`Unable to find map with name ${name}`);
    }

    return result;
  }

  allMaps() {
    return this._fetch();
  }
}
