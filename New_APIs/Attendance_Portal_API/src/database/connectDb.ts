import mongoose from 'mongoose';
import config from '../config/config';

mongoose
  .connect(config.MONGOURI)
  .then(() => {
    console.log(`[📥] MongoDB Connected!`);
  })
  .catch((e) => {
    console.log(`Connection Error - ${e}`);
  });
