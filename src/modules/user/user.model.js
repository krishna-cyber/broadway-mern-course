const mongoose = require('mongoose');
const { userRoles } = require('../../config/constants.config');

const UserSchema = new mongoose.Schema({
    name:{

    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        enum: [...Object.values(userRoles)],
        default: userRoles.CUSTOMER
    },
    activationToken:String,
    activatedFor:Date,
    phone:String,
    address:String,
    forgotToken:String,
    forgotFor:Date,
    image:String,
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: null
    }

},{timestamps: true});



const UserModel = mongoose.model('User', UserSchema);