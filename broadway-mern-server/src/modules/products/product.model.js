const mongoose = require('mongoose');
const statusType = require('../../config/constants.config');


const ProductSchema = new mongoose.Schema({
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
    discount:{
        type:Number,
        default:null
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
        ref: 'Users',
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