// Setup browser environment
require('browser-env')();

const hooks = require('require-extension-hooks'),
    Vue = require('vue'),
    ElementUI = require('element-ui');

Vue.use(ElementUI);



// Setup vue files to be processed by `require-extension-hooks-vue`
hooks('vue').plugin('vue').push();
// Setup vue and js files to be processed by `require-extension-hooks-babel`
hooks(['vue', 'js']).plugin('babel').push();