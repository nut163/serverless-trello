var card = (function() {
    var CardSchema = {
        id: '',
        title: '',
        description: '',
        listId: ''
    };

    function loadCard(id) {
        var cardData = JSON.parse(localStorage.getItem('card-' + id));
        if (cardData) {
            CardSchema = cardData;
        }
    }

    function saveCard() {
        localStorage.setItem('card-' + CardSchema.id, JSON.stringify(CardSchema));
        document.dispatchEvent(new CustomEvent('CARD_DATA_UPDATED'));
    }

    function createCard(title, description, listId) {
        CardSchema.id = new Date().getTime().toString();
        CardSchema.title = title;
        CardSchema.description = description;
        CardSchema.listId = listId;
        saveCard();
    }

    function updateCard(id, title, description, listId) {
        loadCard(id);
        CardSchema.title = title || CardSchema.title;
        CardSchema.description = description || CardSchema.description;
        CardSchema.listId = listId || CardSchema.listId;
        saveCard();
    }

    function deleteCard(id) {
        localStorage.removeItem('card-' + id);
        document.dispatchEvent(new CustomEvent('CARD_DATA_UPDATED'));
    }

    return {
        loadCard: loadCard,
        saveCard: saveCard,
        createCard: createCard,
        updateCard: updateCard,
        deleteCard: deleteCard
    };
})();

if (typeof module !== 'undefined' && module.exports) {
    module.exports = card;
} else {
    window.card = card;
}