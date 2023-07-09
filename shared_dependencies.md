1. Exported Variables:
   - `app`: The main application object in `app.js` that will be shared across all other JS files.
   - `user`: The user object in `user.js` that will be shared across all other JS files.
   - `board`: The board object in `board.js` that will be shared across `app.js`, `list.js`, and `card.js`.
   - `list`: The list object in `list.js` that will be shared across `app.js` and `card.js`.
   - `card`: The card object in `card.js` that will be shared across `app.js` and `list.js`.

2. Data Schemas:
   - `UserSchema`: The schema for user data in `user.js`.
   - `BoardSchema`: The schema for board data in `board.js`.
   - `ListSchema`: The schema for list data in `list.js`.
   - `CardSchema`: The schema for card data in `card.js`.

3. ID Names of DOM Elements:
   - `#app`: The main application container in `index.html`.
   - `#user`: The user container in `index.html`.
   - `#board`: The board container in `index.html`.
   - `#list`: The list container in `index.html`.
   - `#card`: The card container in `index.html`.

4. Message Names:
   - `USER_DATA_UPDATED`: Message sent when user data is updated.
   - `BOARD_DATA_UPDATED`: Message sent when board data is updated.
   - `LIST_DATA_UPDATED`: Message sent when list data is updated.
   - `CARD_DATA_UPDATED`: Message sent when card data is updated.

5. Function Names:
   - `initApp()`: Function in `app.js` to initialize the application.
   - `loadUser()`: Function in `user.js` to load user data.
   - `saveUser()`: Function in `user.js` to save user data.
   - `loadBoard()`: Function in `board.js` to load board data.
   - `saveBoard()`: Function in `board.js` to save board data.
   - `loadList()`: Function in `list.js` to load list data.
   - `saveList()`: Function in `list.js` to save list data.
   - `loadCard()`: Function in `card.js` to load card data.
   - `saveCard()`: Function in `card.js` to save card data.
   - `loadData()`, `saveData()`: Functions in `storage.js` to load and save data to local storage.