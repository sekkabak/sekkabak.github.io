Vue.component('footer-component', {
    data() {
        return {
            quotes: {},
            quote: {}
        }
    },
    watch: {
        quotes: function (newQuotes, oldQuotes) {
            const length = this.quotes.length;
            const random = this.getRandomInt(0, length);
            this.quote = this.quotes[random];
            this.quote.quoteText.replace(/[^\x20-\x7F]/g, "");
            if(this.quote.quoteAuthor === "") {
                this.quote.quoteAuthor = "Anonymous";
            }
        }
    },
    created: function () {
        this.loadQuotes();
    },
    methods: {
        loadQuotes: function () {
            const that = this;
            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    that.quotes = JSON.parse(this.responseText);
                }
            };
            xhr.open('GET', 'https://raw.githubusercontent.com/JamesFT/Database-Quotes-JSON/master/quotes.json');
            xhr.send();
        },
        getRandomInt: function (min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    },

    template: /* html */ ` 
        <div class="footer">
            <nav class="uk-navbar-container uk-margin uk-padding" uk-navbar>
                <div class="uk-navbar-center">
                    <div>
                        <div class="uk-container uk-text-center">
                            <div class="uk-card uk-card-default uk-card-medium uk-card-body uk-width-xlarge">
                                “{{ quote.quoteText }}”<br /> - <small><i>{{ quote.quoteAuthor }}</i></small>
                            </div>
                        </div>
                        <br>
                        <div class="uk-grid-row-medium uk-nav-center">
                            <a href="https://github.com/sekkabak" uk-icon="github"></a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    `
})