Vue.component("riqi", {
    props: {
        dateAs: {
            type: String
        }
    },
    data() {
        return {
            myDate: this.dateAs
        }

    },
    watch: {
        dateAs(a, b) {
            this.myDate = a;
        },
        myDate(a, b) {
            console.log(this)
            this.$emit("update:dateAs", a)
        }
    },
    template: `
    <div>
        <input type="date" v-model="myDate"/>
    </div>
    `
})