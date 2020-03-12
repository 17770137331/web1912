Vue.component('xlcd', {
    props: {
        title: {
            type: String,
            default: "Dropdown"
        },
        array: {
            type: Array,
        },
        drop: {
            type: String,
            default: "dropdown"
        }
    },
    template: `
    <div :class="drop">
    <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
      {{ title }}
    <span class="caret"></span>
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
      <li v-for="item in array"><a href="#">{{ item }}</a></li>
    </ul>
  </div>
    `
})