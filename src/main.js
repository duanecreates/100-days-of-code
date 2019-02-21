import '@/assets/css/tailwind.css';

import Vue from 'vue';
import Icon from 'vue-awesome/components/Icon.vue';
import VueMarkdown from 'vue-markdown';
import App from './App.vue';
import 'vue-awesome/icons/brands/codepen';
import 'vue-awesome/icons/brands/github';
import 'vue-awesome/icons/brands/instagram';
import 'vue-awesome/icons/regular/plus-square';
import 'vue-awesome/icons/regular/minus-square';
import 'vue-awesome/icons/check';
import 'vue-awesome/icons/times';

Vue.component('vue-markdown', VueMarkdown);

// load each day's result from @/days/results as global components
const results = require.context('@/days/results', true, /\.vue$/i);
results.keys().map(key => Vue.component(`result-${key.split('/').pop().split('.')[0]}`, results(key).default));

Vue.component('v-icon', Icon);

Vue.config.productionTip = false;

// FONTS
require('typeface-raleway');
require('typeface-roboto');
require('typeface-montserrat');

new Vue({
  render: h => h(App),
}).$mount('#app');
