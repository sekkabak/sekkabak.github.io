console.info('%cHello!\n😀', ' font-size: 10em; color: #908f94;')

const template = Vue.compile(
    /* template */
    `
    <div>
        <header-component v-bind:setPage="setPage"></header-component>
        <content-component v-bind:currentPage="currentPage"></content-component>
        <footer-component></footer-component>
    </div>
    `
);

new Vue({
    el: '#app',
    data: {
        pages: [projectsPage, resumePage, contactPage, aboutPage],
        currentPage: projectsPage
    },
    mounted: function () {
        if(window.location.hash === "#projects") {
            this.currentPage = this.pages[0];
        } else if(window.location.hash === "#resume") {
            this.currentPage = this.pages[1];
        } else if(window.location.hash === "#contact") {
            this.currentPage = this.pages[2];
        } else if(window.location.hash === "#about") {
            this.currentPage = this.pages[3];
        }
    },
    methods: {
        setPage: function(index) {
            this.currentPage = this.pages[index];
        }
    },
    render: template.render,
    staticRenderFns: template.staticRenderFns
});