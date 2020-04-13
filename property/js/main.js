var app = new Vue({
    el: '#app',
    data: {
        message: 'hello vuejs'
    },
    computed: {
        reversedMessage: function() {
            return this.message.split('').reverse().join('')
        }
    }
})

new Vue({
    el: '#property',
    data: {
        basePrice: 100
    },
    computed: {
        taxIncludedPrice: {
            // 入力された税抜き価格の1.08倍を取得、ゲット
            get: function(){
                return parseInt(this.basePrice * 1.08)
            },
            // taxincludedpriceに入力された値から消費税分マイナスしてセット
            set: function(taxIncludedPrice){
                this.basePrice = Math.ceil(taxIncludedPrice / 1.08)
            }
        }
    }
})

new Vue({
    el: '#cache',
    computed: {
        computedNumber: function() {
            return Math.random()
        }
    },
    methods: {
        methodsNumber: function() {
            return Math.random()
        }
    }
})