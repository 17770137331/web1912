Vue.component("ISwitch", {
    props: {
        // value: {
        //     type: Boolean,
        // }
        value: Boolean
    },
    methods: {
        fn() {
            this.$emit("input", this.value = !this.value)
                //this.value = !this.value
            this.$emit("change")
            console.log(this.value)
            console.log("111111111111")
            console.log(this)
        }
    },
    template: `
        <div class="switch" @click="fn()">
            <div :class = "['btn',value?'btn-on':'ss']"></div>
        </div>
    `
})