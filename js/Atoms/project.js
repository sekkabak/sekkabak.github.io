function addEventListenerToElem(id, callback) {
    const el = document.getElementById(id);
    if (el) {
        el.addEventListener('click', callback)
    }
}

Vue.component('project-component', {
    props: ['postName'],
    data() {
        return {
            postData: "",
            postHtml: ""
        }
    },
    watch: {
        postData: function (newPostData, oldPostData) {
            this.postHtml = marked(newPostData);
        }
    },
    created: function () {
        this.getPost();
    },
    updated: function () {
        addEventListenerToElem('more-' + this.$props.postName, this.loadMore)
    },
    methods: {
        getPost: function () {
            const that = this;
            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    that.postData = this.responseText;
                }
            };
            xhr.open('GET', 'projects/' + this.$props.postName + '.md');
            xhr.send();
        },
        loadMore: function (event) {
            const that = this;
            const button = event.target;
            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    var div = document.createElement("div");
                    div.className = "more";
                    div.innerHTML = marked(this.responseText);
                    button.parentNode.replaceChild(div, button);

                    addEventListenerToElem('less-' + that.$props.postName, that.loadLess)
                }
            };
            xhr.open('GET', 'projects/' + this.$props.postName + '-more.md');
            xhr.send();
        },
        loadLess: function (event) {
            let div = event.target;
            while (div.className !== "more") {
                div = div.parentNode;
            }
            div.innerHTML = '<button class="uk-button uk-button-default" id="more-' + this.$props.postName + '">Read more...</button>';
            addEventListenerToElem('more-' + this.$props.postName, this.loadMore);
        }
    },
    template: /* html */ `<div class="uk-container uk-container-small project" v-html="postHtml"></div>`
})