/**
 * buttonName:列表名称
 * dropListItem：下拉列表内容
 * dropList：下拉列表方向（上:up 下：down）
 */
Vue.component("dropdown", {
    props: {
        buttonName: {
            type: String,
            default: ""
        },
        dropListItem: {
            type: Array,
            default: function() {
                return []
            }
        },
        dropList: {
            type: String,
            default: 'down'
        },

    },
    template: `
    <div :class="[{dropdown:dropList == 'down'||dropList!='up'},{dropup:dropList=='up'}]">
        <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            {{ buttonName }}
            <span class="caret"></span>
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li v-for="item in dropListItem" :class="[{divider:item=='drop'?true:false}]"><a href="#">{{ item }}</a></li>
        </ul>
    </div>
    `
})