const { Schema, model } = require('mongoose');

const CategorySchema = Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        unique: true,
    },
    status: {
        type: Boolean,
        default: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

module.exports = model('Category', CategorySchema);
