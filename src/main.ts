import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from "pinia"
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import i18n from "@/language"
import { Buffer } from 'buffer'
// `@coinbase-wallet/sdk` uses `Buffer`
import { WagmiPlugin } from '@wagmi/vue'
import { config } from './wagmi'
import { QueryClient, VueQueryPlugin } from '@tanstack/vue-query'
import router from "@/routes";
import './assets/scss/base.scss'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fontsource/pacifico';

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const queryClient = new QueryClient()
const app = createApp(App)
app.use(i18n).use(router).use(pinia)
.use(WagmiPlugin, { config}).use(VueQueryPlugin, { queryClient })
.mount('#app')
globalThis.Buffer = Buffer
BigInt.prototype.toJSON = function () {
    return { $bigint: this.toString() };
};