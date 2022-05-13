import route from 'ziggy-js'
import { createApp, h } from 'vue'
import { createInertiaApp, Head, Link } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'
import Layout from "@/Admin/Shared/Layout/Layout.vue"
import WebLayout from "@/Web/Shared/Layout/Layout.vue"


InertiaProgress.init();


createInertiaApp({
  resolve: name => {
    let page;
    if (!name.startsWith('Web/')) {
      // load this direcotry for admin
      page = require(`./Admin/Pages/${name}`).default

    } else {
      // load this direcotry for websiste
      page = require(`./${name}`).default
    }
    if (page.layout === undefined && !name.startsWith('Web/')) {
      page.layout = Layout
    } else {
      page.layout = WebLayout
    }
    return page
  },
  setup({ el, App, props, plugin }) {

    const app = createApp({ render: () => h(App, props) })
      .use(plugin)
      .component('Head', Head)
      .component('Link', Link)
      .mixin({ methods: { route } });
    const URL = props.initialPage.url;
    if (condition) {
      
    }
    console.log();
    app.mount(el);
  },
})
