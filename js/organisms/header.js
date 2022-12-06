Vue.component('header-component', {
    props: ['setPage'],
    template: /* html */ `
        <div class="header">
            <nav class="uk-navbar-container uk-margin uk-padding" uk-navbar>
                <div class="uk-navbar-center">
                    <div class="uk-navbar-center-left">
                        <ul class="uk-navbar-nav">
                            <li><a href="#writeups">🔥Writeups(soon)🔥</a></li>
                            <li><a href="#projects" v-on:click.stop="setPage(0)">Projects</a></li>
                            <li><a href="#resume" v-on:click.stop="setPage(1)">Resume</a></li>
                        </ul>
                    </div>
                    <a class="uk-navbar-item uk-logo" href="/">
                        <img class="uk-border-circle" src="images/logo.png" width="80" height="80" alt="Cezary Bąk" />
                    </a>
                    <div class="uk-navbar-center-right">
                        <ul class="uk-navbar-nav">
                            <li><a href="#contact" v-on:click.stop="setPage(2)">Contact</a></li>
                            <li><a href="#about" v-on:click.stop="setPage(3)">About</a></li>
                            <li><a href="https://sekka.gitbook.io/notes/">🔥My notes(Hacking)🔥</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div style="width: 100%; text-align:center;"><h3>This page needs remake - I know 😁</h3></div>
        </div>
        `
})