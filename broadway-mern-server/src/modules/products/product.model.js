const mongoose = require('mongoose');
const statusType = require('../../config/constants.config');


const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true,
    min:3,
    max:100
    },
    category:[{
        type: mongoose.Types.ObjectId,
        ref: 'Category',
        required: true
    }],
    brand:{
        type: mongoose.Types.ObjectId,
        ref: 'Brand',
        default: null
    },
    image:{
        type: String,
        required: true,
    },
    discount:{
        type:Number,
        default:null,
    },
    description:{
        type:String,
        default:null
    },
    price:{
        type:Number,
        required:true
    
    },
    stock:{
        type:Number,
        required:true
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



const ProductModel = mongoose.model('Product', ProductSchema);


module.exports = ProductModel;