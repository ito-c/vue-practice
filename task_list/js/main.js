var app = new Vue({
    el: '#app',
    data: {
        newItem: '',
        todos: []
    },
    methods: {
        addItem: function(event) {
            // もしnewItemが空白だったら処理を終了する
            if(this.newItem == '') return;

            // オブジェクト生成
            var todo = {
                // 配列todoに入力値を追加
                item: this.newItem,
                // 完了/未完了
                isDone: false
            };
            // pushで配列todosにobj todoを追加
            this.todos.push(todo);
            // 入力欄クリア
            this.newItem = '';
        },
        // item削除。どのitemかの判別するため、viewからindexを引数に受ける
        deleteItem: function(index) {
            // alert(index);
            this.todos.splice(index, 1);
        }
    }
})