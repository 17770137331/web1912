Vue.component('anz', {
    props: {
        array: {
            type: Array,
            default: ['22', '22', '22']
        },
        size: {
            type: String,
            default: 'default'
        }
    },
    data() {
        return {
            sizename: this.size
        }
    },
    template: `
    <div :class="['btn-group',{
        'btn-group-lg':sizename=='lg',
        'btn-group-sm':sizename=='sm'
    }]" role="group">
        <button type="button" class="btn btn-default" v-for="item in array">{{ item }}</button>
    </div>
    `
})