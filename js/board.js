var board = (function() {
    var BoardSchema = {
        id: null,
        name: '',
        lists: []
    };

    function loadBoard() {
        var boardData = JSON.parse(localStorage.getItem('board'));
        if (boardData) {
            BoardSchema = boardData;
        }
    }

    function saveBoard() {
        localStorage.setItem('board', JSON.stringify(BoardSchema));
        document.dispatchEvent(new CustomEvent('BOARD_DATA_UPDATED'));
    }

    function createBoard(name) {
        BoardSchema.id = new Date().getTime();
        BoardSchema.name = name;
        saveBoard();
    }

    function addListToLists(list) {
        BoardSchema.lists.push(list);
        saveBoard();
    }

    function removeListFromLists(listId) {
        BoardSchema.lists = BoardSchema.lists.filter(function(list) {
            return list.id !== listId;
        });
        saveBoard();
    }

    return {
        loadBoard: loadBoard,
        saveBoard: saveBoard,
        createBoard: createBoard,
        addListToLists: addListToLists,
        removeListFromLists: removeListFromLists
    };
})();

if (typeof module !== 'undefined' && module.exports) {
    module.exports = board;
} else {
    window.board = board;
}