const resumePage = Vue.component('resume-page', {
    template: /* html */ `    
        <div class="resume">
            <div class="uk-container uk-container-small">
                <div class="uk-child-width-expand@s" uk-grid>
                    <div>
                        <h2>Languages</h2>
                        <ul class="uk-list uk-list-disc">
                            <li>Python</li>
                            <li>JavaScript</li>
                            <li>PHP</li>
                            <li>Java</li>
                            <li>C#</li>
                            <li>C/C++</li>
                            <li>Assembly</li>
                            <li>HTML</li>
                            <li>SQL</li>
                            <li>CSS</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Technologies</h2>
                        <ul class="uk-list uk-list-disc">
                            <li>Flask</li>
                            <li>Vue.js</li>
                            <li>WordPress</li>
                            <li>Swing</li>
                            <li>WPF</li>
                            <li>MVC</li>
                            <li>Atomic design</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr>
            <div class="uk-container uk-container-small">
                <h2>Education</h2>

                <h3>B.E. Cybersecurity at <a href="https://www.wat.edu.pl/en">MILITARY UNIVERSITY OF TECHNOLOGY</a></h3>
                <h4 style="margin-top: 0;">October 2018 - Now</h4>
            </div>
            <hr>
            <div class="uk-container uk-container-small">
                <h2>Experience</h2>
                <h3>Back-end developer at <a href="https://arkonsoft.pl/">Arkonsoft</a></h3>
                <h4 style="margin-top: 0;">May 2017 - October 2018 <small>1 year, 5 months</small></h4>
                <ul class="uk-list uk-list-disc">
                    <li>Creating and editing WordPress and WooCommerce plugins</li>
                    <li>Creating and editing Prestashop plugins</li>
                    <li>Creating and editing Magento plugins</li>
                    <li>Developed a web scraper with Java</li>
                    <li>Designed and partly developed .NET ERP system</li>
                </ul>
            </div>
        </div>
    `
})