
const dotenv = require('dotenv');
const path = require('path');

export default function loadEnv(mode) {
  const basePath = path.resolve(__dirname, '../../', `.env${mode ? `.${mode}` : ''}`);
  const localPath = `${basePath}.local`;

  const load = envPath => {
    try {
      return dotenv.config({ path: envPath, debug: process.env.DEBUG });
      // dotenvExpand(env);
    } catch (err) {
      // only ignore error if file is not found
      if (err.toString().indexOf('ENOENT') < 0) {
        // console.error(err);
      }
      return {};
    }
  };
  let resEnv = {};
  // если есть мод, то грузим сначала общие файлы
  if (mode) {
    resEnv = loadEnv();
  }
  resEnv = {
    ...resEnv,
    ...(load(basePath).parsed || {}),
    ...(load(localPath).parsed || {}),
  };
  for (const k in resEnv) {
    process.env[k] = resEnv[k];
  }
  return resEnv;
}
