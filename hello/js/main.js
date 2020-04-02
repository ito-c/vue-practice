new Vue({
	el: '#app',
    data: {
    	message: 'hello world',
        url: 'https://jp.vuejs.org',
        toggle: true,
        languages: [
        	'javaScript',
            'Ruby',
            'Python'
    ]},
    methods: {
        onclick: function() {
            this.message = 'Clicked!!'
        }
    }
})