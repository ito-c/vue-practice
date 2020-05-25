new Vue({
    el: '#app',
    data: {
        isLarge: true,
        hasError: true
    }
})

new Vue({
    el: '#appArr',
    data: {
        // largeとtext-dangerはCSSのクラス名
        largeClass: 'large',
        dangerClass: 'text-danger'
    }
})


new Vue({
    el: '#appObj',
    data: {
        classObject: {
            large: true,
            'text-danger': true // ハイフンのためシングルクオート
        }
    }
})


new Vue({
    el: '#appIf',
    data: {
        largeClass: {
            large: true,
            'bg-gray': true // ハイフンのためシングルクオート
        },
        dangerClass: {
            'text-danger': true
        },
        // クラス適用on off切り替え
        isLarge: true
    }
})


new Vue({
    el: '#appIn',
    data: {
        color: 'blue',
        fontSize: 36
    }
})


new Vue({
    el: '#appInObj',
    data: {
        styleObject: {
            color: 'blue',
            fontSize: '36px'
        }
    }
})