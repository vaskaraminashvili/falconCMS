import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'

createInertiaApp({
    resolve: name => {
        let page;
        console.log(name);
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
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .mount(el)
    },
})
