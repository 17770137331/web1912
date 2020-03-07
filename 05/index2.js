Vue.component("ISwitch", {
    props: {
        on3: {
            type: Boolean,
        }
    },
    methods: {
        fn() {
            this.$emit("change")
        }
    },
    template: `
        <div class="switch" @click="fn()">
            <div :class = "['btn',on3?'btn-on':'ss']"></div>
        </div>
    `
})