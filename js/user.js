var user = (function() {
    var UserSchema = {
        id: null,
        name: null,
        email: null,
        boards: []
    };

    var USER_DATA_UPDATED = 'USER_DATA_UPDATED';

    function loadUser() {
        var userData = localStorage.getItem('user');
        if (userData) {
            UserSchema = JSON.parse(userData);
            document.dispatchEvent(new CustomEvent(USER_DATA_UPDATED));
        }
    }

    function saveUser() {
        localStorage.setItem('user', JSON.stringify(UserSchema));
        document.dispatchEvent(new CustomEvent(USER_DATA_UPDATED));
    }

    return {
        UserSchema: UserSchema,
        loadUser: loadUser,
        saveUser: saveUser
    };
})();