import 'dotenv/config';

export default {
  expo: {
    name: 'Ignite Shoes App',
    slug: 'igniteshoesapp',
    version: '1.0.0',
    extra: {
      oneSignalAppId: process.env.ONE_SIGNAL_APP_ID,
    },
  },
};