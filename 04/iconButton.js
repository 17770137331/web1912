Vue.component("iconButton", {
    props: { name: String },
    template: `
    <div>
        <button type="button" class="btn btn-default" aria-label="Left Align">
             <span :class="['glyphicon',name]" aria-hidden="true"></span>
        </button>
    </div>
    `
})