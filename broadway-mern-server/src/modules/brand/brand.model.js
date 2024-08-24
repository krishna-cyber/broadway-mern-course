const { ref } = require('joi');
const mongoose = require('mongoose');
const statusType = require('../../config/constants.config');


const BrandSchema = new mongoose.Schema({
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
    createdBy:{
        type: mongoose.Types.ObjectId,
        ref: 'User',
        default: null
    }
},
    {
        timestamps: true,
        autoCreate: true,
        autoIndex: true
    });



const BrandModel = mongoose.model('Brand', BrandSchema);


module.exports = BrandModel;