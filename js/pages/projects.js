const projectsPage = Vue.component('projects-page', {
    data() {
        return {
            projects: [
                {
                    id: 3,
                    name: 'spider-xp'
                },
                {
                    id: 2,
                    name: 'zobaczyc-matematyke2'
                },
                {
                    id: 1,
                    name: 'zobaczyc-matematyke1'
                }
            ]
        }
    },
    template: /* html */ `    
        <div>
            <template v-for="(project, index) in projects">
                <template v-if="index > 0">
                    <hr>
                </template>
                <project-component :key="project.id" v-bind:postName="project.name"></project-component>
            </template>
        </div>
    `
})