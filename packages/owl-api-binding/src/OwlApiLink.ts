import { HttpLink } from 'apollo-link-http';
import * as fetch from 'cross-fetch';

export default class OwlApiLink extends HttpLink {
  constructor(uri: string) {
    super({ uri, fetch });
  }
}
