import defaultConfig from 'assets/themes/default.json';
import { merge } from 'lodash-es';

export default ({ app, $cookies }, inject) => {
  // получаем конфиг исходя из того, что выбрал пользователь(в дальнейшем можно будет брать конфиг по api)
  const theme = $cookies.get('theme') || 'default';
  let resultConfig = defaultConfig;
  if (theme !== 'default') {
    try {
      const config = require('assets/themes/' + theme + '.json');
      resultConfig = config ? merge(defaultConfig, config) : defaultConfig;
    } catch (e) {
      $cookies.set('theme', 'default');
      console.warn(`Тема "${theme}" не найдена`);
    }
  }
  // добавляем переменные только на сервере
  if (process.server) {
  // добавляем все переменные из config.cssVars в :root страницы
    const stringStyle = Object.keys(resultConfig.cssVars).reduce((prevVal, key) => {
      prevVal += `--${key}: ${resultConfig.cssVars[key]};\n`;
      return prevVal;
    }, '');
    app.head.style.push(
      { innerHTML: `:root{\n ${stringStyle}}`, charset: 'utf-8' }
    );
  }
  inject('themeConfig', resultConfig);
};
