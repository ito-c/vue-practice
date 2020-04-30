new Vue({
    el: '#app',
    data: {
        items: null,
        keyword: '',
        message: ''
    },
    watch: {
        keyword: function(newKeyword, oldKeyword) {
            // console.log(newKeyword) デバッグ用
            this.message = 'Waiting for you to stop typing...'
            this.debouncedGetAnswer()
        }
    },
    created: function() {
        // this.keyword = 'JavaScript' デバッグ用
        // this.getAnswer() デバッグ用
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 1000)
    },
    methods: {
        getAnswer: function() {
            if(this.keyword === '') {
                this.items = null
                this.message = ''
                return
            }

            this.message = 'Loading...'
            var vm = this
            var params = { page: 1, per_page: 20, query: this.keyword }
            axios.get('https://qiita.com/api/v2/items', { params })
            .then(function(response) {
                console.log(response)
                vm.items = response.data
            })
            .catch(function(error) {
                vm.message = 'Error!' + error
            })
            .finally(function(){
                vm.message = ''
            })
            // https://qiita.com/api/v2/docs#投稿 API所在地
        }
    }
})