var list = (function() {
    var ListSchema = {
        id: '',
        title: '',
        cards: []
    };

    function loadList(id) {
        var listData = JSON.parse(localStorage.getItem('list-' + id));
        if (listData) {
            ListSchema = listData;
        }
    }

    function saveList() {
        localStorage.setItem('list-' + ListSchema.id, JSON.stringify(ListSchema));
        document.dispatchEvent(new CustomEvent('LIST_DATA_UPDATED'));
    }

    function addCard(card) {
        ListSchema.cards.push(card);
        saveList();
    }

    function removeCard(cardId) {
        var index = ListSchema.cards.findIndex(function(card) {
            return card.id === cardId;
        });
        if (index > -1) {
            ListSchema.cards.splice(index, 1);
            saveList();
        }
    }

    return {
        load: loadList,
        save: saveList,
        addCard: addCard,
        removeCard: removeCard
    };
})();

if (typeof module !== 'undefined' && module.exports) {
    module.exports = list;
} else {
    window.list = list;
}