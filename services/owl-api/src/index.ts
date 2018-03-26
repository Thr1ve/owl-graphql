if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

import { app } from './app';
import { logger } from './utils';

const boot = async () => {
  try {
    app.start(() => logger.info('owl-api is running on port 4000'));
  } catch (error) {
    logger.error('BOOT FAILED', error);
  }
};

boot();
