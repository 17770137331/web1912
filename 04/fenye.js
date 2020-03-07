Vue.component("fenye", {
    props: {
        yeshu: {
            type: Number,
            default: 1
        },
        daxiao: {
            type: String,
            default: ""
        }
    },
    template: `
    <nav aria-label="Page navigation">
        <ul :class="['pagination',{'pagination-lg':daxiao=='da'},{'pagination-sm':daxiao=='xiao'}]">
            <li>
                <a href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li><a href="#" v-for="item in yeshu">{{ item }}</a></li>
            <li>
            <a href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
            </a>
            </li>
        </ul>
    </nav>
    `
})