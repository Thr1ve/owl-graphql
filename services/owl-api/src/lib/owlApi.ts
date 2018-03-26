import axios from 'axios';
import * as path from 'path';
import { logger } from '../utils';

const BASE_URL = 'https://api.overwatchleague.com';

export interface OwlApiInput {
  route: string;
  params?: { [key: string]: any };
}

export const owlApi = async ({ route, params }: OwlApiInput) => {
  try {
    const result = await axios.get(`${BASE_URL}${path.join('/', route)}`);

    return result;
  } catch (error) {
    // see https://github.com/axios/axios#handling-errors
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      let { data, status, headers } = error.response;

      logger.error('Axios: non 200 response', { data, status, headers });

      throw error;
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      logger.error('Axios: request made but no response received');
      logger.error(error.request);

      throw error;
    } else {
      // Something happened in setting up the request that triggered an Error
      logger.error('Axios: unknown error', error.message);

      throw error;
    }
  }
};
