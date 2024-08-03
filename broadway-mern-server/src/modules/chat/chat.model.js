const { required } = require('joi');
const mongoose = require ('mongoose');


const chatSchema = new mongoose.Schema({
    sender:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    required: true
    },
    receiver:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    required: true
    },
    message:{
        type: String,
        required: true,
        min: 1,
    }

}, {
    autoCreate: true,
    timestamps: true,
    autoIndex: true
});


module.exports = mongoose.model('Chat', chatSchema);