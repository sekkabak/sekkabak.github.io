Vue.component('header-component', {
    template: /* html */ `    
        <div class="header">
            <nav class="uk-navbar-container uk-margin uk-padding" uk-navbar>
                <div class="uk-navbar-center">
                    <div class="uk-navbar-center-left">
                        <ul class="uk-navbar-nav">
                            <li><a href="#">Projects</a></li>
                            <li><a href="#">Resume</a></li>
                        </ul>
                    </div>
                    <a class="uk-navbar-item uk-logo" href="https://sekkabak.github.io/">
                        <img class="uk-border-circle" src="images/logo.png" width="80" height="80" alt="Cezary Bąk" />
                    </a>
                    <div class="uk-navbar-center-right">
                        <ul class="uk-navbar-nav">
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">About</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>`
})