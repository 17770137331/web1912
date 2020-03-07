/**
 * name:图标的名称
 */
Vue.component("icon", {
    props: { name: String },
    template: `
        <div>
            <span :class="name" aria-hidden="true"></span>
        </div>
    `
})