Vue.component("Card",{
    template:`
    <div>
        <div class="header"><slot name="a1"/></div>
        <hr>
        <hr>
        <div class="content"><slot/></div>
    </div>
    `
})