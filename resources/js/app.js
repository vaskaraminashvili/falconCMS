import { createApp, h } from 'vue'
import route from 'ziggy-js'
import { createInertiaApp, Head, Link } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'


InertiaProgress.init();


createInertiaApp({
  resolve: name => {
    let page;
    // separeate admin part from website.
    if (!name.startsWith('Public/')) {
      // load this direcotry for admin
      page = require(`./Admin/Pages/${name}`).default
    } else {
      // load this direcotry for websiste
      page = require(`./Web/Pages/${name}`).default
    }
    return page
  },
  setup({ el, App, props, plugin }) {
    const app = createApp({ render: () => h(App, props) })
      .use(plugin)
      .component('Head', Head)
      .component('Link', Link)
      .mixin({ methods: { route } });
    app.mount(el);
  },
})
