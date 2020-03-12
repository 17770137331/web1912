Vue.component('jdt', {
    props: {
        width: {
            type: String,
            default: "60%"
        },
        color: {
            color: String,
            color: 'default'
        }
    },
    template: `
    <div class="progress">
    <div :class="['progress-bar',{
        'progress-bar-success':'success'==color,
        'progress-bar-info':'info'==color,
        'progress-bar-warning':'waring'==color,
        'progress-bar-danger':'danger'==color
    },]" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" :style="{'width': width+'%'}">
      {{ width+'%' }}
    </div>
  </div>
    `
})