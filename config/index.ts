import envConfig, { Env } from './env';
type envStr = keyof Env;

const env = process.argv[process.argv.length - 1];
const config = envConfig[env as envStr];

export default config;
