// 基本
new Vue({
    el: '#basic',
    data: {
        message: 'hello vuejs'
    },
    watch: {
        message: function(newValue, oldValue) {
            console.log('new: %s, old: %s', newValue, oldValue)
        }
    }
})

// 単位計算アプリ
new Vue({
    el: '#tanni',
    data: {
        km: 0,
        m: 0,
        mm: 0
    },
    watch: {
        km: function(value) {
            // console.log(value)
            this.km = value
            this.m = value * 1000
            this.mm = value * 1000000
        },
        m: function(value) {
            this.km = value / 1000
            this.m = value
            this.mm = value * 1000
        },
        mm: function(value) {
            this.km = value / 1000000
            this.m = value / 1000
            this.mm = value
        }
    }
})

// 算出プロパティ vs 監視プロパティ
// 監視プロパティ
new Vue({
    el: '#vsProperty',
    data: {
        firstName: '',
        lastName: '',
        fullName: ''
    },
    watch: {
        firstName: function(value) {
            this.fullName = value + ' ' + this.lastName
        },
        lastName: function(value) {
            this.fullName = this.firstName + ' ' + value
        }
    }
})

// 算出プロパティ
new Vue({
    el: '#vsPropertyy',
    data: {
        firstName: '',
        lastName: ''
    },
    computed: {
        fullName: function() {
            return this.firstName + ' ' + this.lastName
        }
    }
})