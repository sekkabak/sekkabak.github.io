const projectsPage = Vue.component('projects-page', {
    data() {
        return {
            projects: [
                {
                    id: 1,
                    name: 'hello1'
                },
                {
                    id: 2,
                    name: 'hello2'
                },
            ]
        }
    },
    template: /* html */ `    
        <div>
            <template v-for="(project, index) in projects">
                <template v-if="index > 0">
                    <hr>
                </template>
                <project-component :key="project.id"></project-component>
            </template>
        </div>
    `
})