// v-once
var once = new Vue({
    el: '#once',
    data: {
        message: 'hello vuejs'
    },
    methods: {
        clickHandler: function(event) {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

// v-pre
var pre = new Vue({
    el: '#pre',
    data: {
        message: 'hello vuejs'
    },
    methods: {
        clickHandler: function(event) {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

// v-html
new Vue({
    el: '#html',
    data: {
        message: 'hello <span style="color:red;">vuejs</span>'
    }
})

// v-cloak
new Vue({
    el: '#cloak',
    data: {
        message: 'hello vuejs'
    }
})

// v-texr
new Vue({
    el: '#text',
    data: {
        message: 'hello vuejs'
    }
})


// JS式
new Vue({
    el: '#js',
    data: {
        message: 'hello vuejs',
        number: 100,
        ok: true
    }
})


// グローバルフィルター
Vue.filter('numberFormat', function(value){
    return value.toLocaleString()
})

new Vue({
    el: '#price',
    data: {
        price: 29800000000
    },
    // ローカルフィルター
    // filters: {
    //     numberFormat: function(value) {
    //         return value.toLocaleString()
    //     }
    // }
})


// グローバルフィルター　連結
Vue.filter('toUSD', function(jpy){
    return jpy / 100
})

Vue.filter('numberFormat', function(value){
    return value.toLocaleString()
})

new Vue({
    el: '#filters',
    data: {
        jpyPrice: 29800000000
    },
})


// グローバルフィルター 引数
Vue.filter('readMore', function(text, length, suffix){
    return text.substring(0, length) + suffix
})

new Vue({
    el: '#filterArg',
    data: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
})


// v-bindディレクティブの省略
Vue.filter('readMore', function(text, length, suffix){
    return text.substring(0, length) + suffix
})

new Vue({
    el: '#bindRyaku',
    data: {
        url: 'https://google.com'
    },
})