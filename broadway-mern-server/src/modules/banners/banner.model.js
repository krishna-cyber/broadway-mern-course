const mongoose = require('mongoose');
const statusType = require('../../config/constants.config');
const UserModel = require('../user/user.model');


const BannerSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    min:3,
    max:100
    },
    image:{
        type: String,
        required: true,
    },
    link:{
        type:String,
        default:null
    },
    status:{
        type:String,
        enum: [statusType.ACTIVE,statusType.INACTIVE],
        default: statusType.ACTIVE
    },
    description:{

        type: String,

    },
    createdBy:{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }
},
    {
        timestamps: true,
        autoCreate: true,
        autoIndex: true
    });



const BannerModel = mongoose.model('Banner', BannerSchema);


module.exports = BannerModel;