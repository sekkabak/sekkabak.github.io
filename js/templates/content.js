Vue.component('content-component', {
    data() {
        return {
            currentPage: projectsPage
        }
    },
    template: /* html */ `
    <div :is="currentPage"></div>
    `,
})