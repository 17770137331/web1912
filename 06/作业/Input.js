Vue.component('Input', {
    props: {
        sj: {

        },
        size: {
            type: String,
        },
        ph: {
            type: String
        }
    },
    data() {
        return {
            sjdata: this.sj,
        }
    },
    watch: {
        sjdata(New, Old) {
            this.$emit('update:sj', New)
            console.log(this)
        }
    },
    template: `
    <div :class="['input-group','input-group-'+size]">
        <span class="input-group-addon" id="basic-addon1"><slot/></span>
        <input type="text" v-model="sjdata" class="form-control" :placeholder="ph" aria-describedby="basic-addon1">
    </div>
    `
})