const aa = {
    props: {
        colums: {
            type: Array,
            default: [],
        },
        datas: {
            type: Array,
            default: [],
        },
        button: {
            type: String,

        }
    },
    data() {
        return {
            aas1: false
        }
    },
    // data() {
    //     return {
    //         title: [{
    //                 title2: '姓名',
    //                 key: 'username'
    //             },
    //             {
    //                 title2: '手机号',
    //                 key: 'phone'
    //             },
    //             {
    //                 title2: '邮箱',
    //                 key: 'email'
    //             },
    //             {
    //                 title2: '家庭地址',
    //                 key: 'address'
    //             }
    //         ],
    // shujv: [{
    //         username: 'jj1',
    //         phone: '123',
    //         email: '@',
    //         address: 'sss'
    //     },
    //     {
    //         username: 'jj2',
    //         phone: '123',
    //         email: '@',
    //         address: 'sdss'
    //     },
    //     {
    //         username: 'jj3',
    //         phone: '123',
    //         email: '@',
    //         address: 'ssds'
    //     }
    //         ]
    //     }

    // },
    template: `
    <table>
        <thead>
            <th>
                <input type="checkbox" v-model="aas1" />
            </th>
            <th v-for="item in colums">
                {{item.title}}
            </th>
            <th>
                删除
            </th>
        </thead>
        <tbody>
            <tr v-for="(item,index) in iDatas" >
                <td>
                    <input type="checkbox" v-model="item.checked"/>
                </td>
                <td v-for="col in colums">
                    {{item[col['key']]}} 
                </td>
                <td>
                    <button @click="remove(item,index)">删除</button>
                </td>
            </tr>
        </tbody>
    </table>
    `,
    watch: {
        iDatas: {
            handler(value) {
                //console.log(value)
                const dd = value.filter(item => !item.checked)
                this.aas1 = dd.length == 0;
                this.$emit("select", value.filter(item => item.checked))
            },
            deep: true
        }
    },
    computed: {
        iDatas() {
            return this.datas.map(item => {
                Vue.set(item, 'checked', this.aas1)
                return item;
            })

        }
    },
    methods: {
        remove(item, index) {
            //console.log(index)
            // this.datas.splice(index, 1)
            this.$emit("remove", item, index)
        }
    }
}
Vue.component("Table", aa)
Vue.component("iTable", aa)