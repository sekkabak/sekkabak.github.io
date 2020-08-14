Vue.component('content-component', {
    props: ['currentPage'],
    // data() {
    //     return {
    //         currentPage: projectsPage
    //     }
    // },
    template: /* html */ `
    <div class="content" :is="currentPage"></div>
    `,
})