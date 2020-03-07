Vue.component("youxiang", {
    data() {
        return {
            nr: "",
            arr: ['@qq.com', "@163.com", "@gmail.com", "@126.com"],
            arr2: [],
            number: 0
        }
    },
    methods: {
        fun(item) {
            this.nr = item;
            vm.$nextTick(() => {
                this.arr2 = [];
            })
        },
        fun2() {
            if (event.keyCode == 38) {
                if (this.number > 0)
                    this.number--
                    //console.log(this.arr2.length)
            } else if (event.keyCode == 40) {
                if (this.number < this.arr2.length - 1)
                    this.number++
                    // console.log(this.arr2.length)
            }
        },
        fun3() {
            this.nr = this.arr2[this.number];
            vm.$nextTick(() => {
                this.arr2 = [];
            })
        }
    },
    template: `
    <div>
        <div class="input-group input-group-sm">
            <span class="input-group-addon" id="sizing-addon3">邮箱</span>
            <input @keydown.up.down.prevent="fun2" @keydown.enter.prevent.exact="fun3" type="text" class="form-control" placeholder="请输入邮箱" aria-describedby="sizing-addon3" style="width:200px;" v-model="nr">
        </div>
        <ul style="padding:0; margin:0;">
            <li v-for="(item,index) in arr2" @click="fun(item)" :style="{width:'245px',border:'1px solid rgb(238, 238, 238)',background:index==number?'red':'none'}">{{ item }}</li>
        </ul>
    </div>
    `,
    watch: {
        nr(new1, old1) {
            if (new1) {
                this.arr2 = this.arr.map((value) => {
                    return new1 + value
                })
            } else {
                vm.$nextTick(() => {
                    this.arr2 = [];
                })
            }

        }
    }
})