class Message {
    constructor(uid, name, message) {
        this.uid = uid;
        this.name = name;
        this.message = message;
    }
}

class Chat {
    constructor() {
        this.messages = [];
        this.users = {};
    }

    get last10Messages() {
        this.messages = this.messages.splice(0, 10);
        return this.messages;
    }

    get usersArr() {
        return Object.values(this.users); // [{}, {}, {}]
    }

    sendMessage(uid, name, message) {
        const newMessage = new Message(uid, name, message);
        this.messages.unshift(newMessage);
    }

    addUser(user) {
        this.users[user.id] = user;
    }

    disconnectUser(id) {
        delete this.users[id];
    }
}

module.exports = Chat;
