import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import Home from './main.vue'
import './vue2.css'

const vueLifecycles = singleSpaVue({
    Vue,
    appOptions: {
        el: '#vue',
        render: r => r(Home)
    }
});

export const bootstrap = [
    vueLifecycles.bootstrap,
];

export const mount = [
    vueLifecycles.mount,
];

export const unmount = [
    vueLifecycles.unmount,
];