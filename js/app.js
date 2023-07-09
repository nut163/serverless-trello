var app = (function() {
    var user = {};
    var board = {};
    var list = {};
    var card = {};

    function initApp() {
        user = loadUser();
        board = loadBoard();
        list = loadList();
        card = loadCard();
    }

    function updateApp() {
        saveUser(user);
        saveBoard(board);
        saveList(list);
        saveCard(card);
    }

    function onUserDataUpdated() {
        user = loadUser();
    }

    function onBoardDataUpdated() {
        board = loadBoard();
    }

    function onListDataUpdated() {
        list = loadList();
    }

    function onCardDataUpdated() {
        card = loadCard();
    }

    document.addEventListener(USER_DATA_UPDATED, onUserDataUpdated);
    document.addEventListener(BOARD_DATA_UPDATED, onBoardDataUpdated);
    document.addEventListener(LIST_DATA_UPDATED, onListDataUpdated);
    document.addEventListener(CARD_DATA_UPDATED, onCardDataUpdated);

    return {
        init: initApp,
        update: updateApp
    };
})();

window.onload = function() {
    app.init();
};