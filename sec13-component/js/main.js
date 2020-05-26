Vue.component('hello-component-g', {
    template: '<p>grobal Hello</p>'
})

new Vue({    
    el: '#app',
})




var helloComponent = { 
    template: '<p>local Hello</p>'
}

new Vue({    
    el: '#appA',
    components: {
        'hello-component' : helloComponent
    }
})



Vue.component('button-counter', {
    data: function() {
        return {
            count: 0
        }
    },
    // template: '<button v-on:click="count++">{{ count }}</button>'
    // template: '<span>count: </span><button v-on:click="count++">{{ count }}</button>'
    template: '<div><span>count: </span><button v-on:click="count++">{{ count }}</button></div>'
})
new Vue({
    el: '#appB'
})