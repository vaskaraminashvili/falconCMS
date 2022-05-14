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
    if (name.startsWith('@.')) {
      // load this direcotry for admin
      name = name.replace('@.', '');
      page = require(`./Admin/Pages/${name}`).default
      page.layout = Layout
    } else {
      // load this direcotry for websiste
      name = name.replace('@web.', '');
      page = require(`./Web/Pages/${name}`).default
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
    if (URL) {// here make auto loading of components for admin part

    }
    console.log();
    app.mount(el);
  }
})
