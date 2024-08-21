const mongoose = require('mongoose');
const { userRoles,statusType } = require('../../config/constants.config');

const AddressSchema = new mongoose.Schema({
    proviance:{
        type: String,
        enum: ['gandaki', 'karnali', 'lumbini', 'sudurpaschim', 'bagmati', 'narayani', 'janakpur', 'sagarmatha', 'koshi', 'mechi']
    },
    district:{
        type: String,
        
    },
    muncipality:{
        type: String,
        
    
    },
    wardNumber:Number,
    houseAddress:String
});

const UserSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: true
        
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    role:{
        type: String,
        enum: [...Object.values(userRoles)],
        default: userRoles.CUSTOMER
    },
    activationToken:String,
    activatedFor:Date,
    phone:[String],
    address:{
        permanentAddress:AddressSchema,
        temporaryAddress:AddressSchema
    },
    forgotToken:String,
    forgotFor:Date,
    status:{
        type:String,
       enum: [...Object.values(statusType)],
       default : statusType.INACTIVE
    },
    image:String,
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: null
    }

},{timestamps: true});



UserSchema.set('toJSON', {
    transform: function (doc, ret) {
      delete ret.password;
      return ret;
    }
  });
  
  UserSchema.set('toObject', {
    transform: function (doc, ret) {
      delete ret.password;
      return ret;
    }
  });

const UserModel = mongoose.model('User', UserSchema, );

module.exports = UserModel;