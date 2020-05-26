new Vue({
    el: '#app',
    data: {
        // counter: 0,
        message: ''
    },
    methods: {
        // eventでもeでも、任意のものでOK。
        // イベントオブジェクト、もしくは引数のどちらかを受け取る
        clickHandler: function($event, aaa){
            // this.counter++
            // console.log(event)
            // console.log(event.target.tagName)
            // console.log(event.target.innerHTML)
            // console.log(event.target.type)
            // 引数をmessageプロパティに代入
            this.message = aaa
            console.log($event)
        }
    }
})



new Vue({
    el: '#appOnce',
    data: {
        message: ''
    },
    methods: {
        clickHandler: function() {
            this.message = new Date().toLocaleTimeString()
        }
    }
})




new Vue({
    el: '#appKeyup',
    data: {
        input: ''
    },
    methods: {
        clear: function() {
            this.input = ''
        }
    }
})



new Vue({
    el: '#appSys',
    data: {
        input: ''
    },
    methods: {
        clear: function() {
            this.input = ''
        },
        clickHandler: function() {
            alert('shift + click')
        }
    }
})