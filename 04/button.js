Vue.component("btnGroup", {
    props: {
        daxiao: {
            type: String,
            default: ''
        }
    },
    methods: {
        fun() {
            console.log(this.$listeners)
        }
    },
    template: `
    <div class="btn-toolbar" @click="fun()" :class="['btn-toolbar',{'btn-group-lg':daxiao=='lg','btn-group-sm':daxiao=='sm','btn-group-xm':daxiao=='xm'}]" role="toolbar" aria-label="...">
        <button type="button" class="btn btn-default">
            <slot />
        </button>
    </div>
    `
})