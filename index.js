console.info('%cHello!\n😀', ' font-size: 10em; color: #908f94;')

var template = Vue.compile(
    /* template */`
    <div>
        <header-component></header-component>
        <content-component></content-component>
        <footer-component></footer-component>
    </div>
    `
);

// TODO 
new Vue({
    el: '#app',
    
    data: {},
    mounted: function () {},

    render: template.render,
    staticRenderFns: template.staticRenderFns
});