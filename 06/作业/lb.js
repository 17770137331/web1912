Vue.component('lb', {
    props: {
        context: {
            type: Array,
            default: function() {
                return ['Cras justo odio', 'Cras justo odio', 'Cras justo odio', 'Cras justo odio', 'Cras justo odio']
            }
        }
    },
    template: `
    <ul class="list-group" >
  <li class="list-group-item" v-for="(item,index) in context" :key="index">{{ item }}</li>
</ul>
    `
})