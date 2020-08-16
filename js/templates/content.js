Vue.component('content-component', {
    props: ['currentPage'],
    template: /* html */ `
    <div class="content" :is="currentPage"></div>
    `,
})