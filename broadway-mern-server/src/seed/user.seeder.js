const bcrypt = require('bcryptjs');
require('../config/db.config');
const userService = require('../modules/user/user.service');
const UserModel = require('../modules/user/user.model');
const { userRoles, statusType } = require('../config/constants.config');
require('dotenv').config();

const salt = bcrypt.genSaltSync(10);
console.log(salt);
const adminUsers = [
    {
        fullName:"Krishna Tiwari",
        email:"tiwarikrishna54321@gmail.com",
        password : bcrypt.hashSync("admin", salt),
        role: userRoles.ADMIN,
        status: statusType.ACTIVE
    }
]

const seedUser= ()=>{
    try {
       adminUsers.map(async (user)=>{
        const userExisting =await  UserModel.findOne({email:user.email});
        if (!userExisting){
            await UserModel.create(user);
            console.log("Admin user created successfully");
            process.exit(1);
            
        }
        console.log("Admin user already exists");
        process.exit(1);
       })
    } catch (exception) {
        console.log("Error in seeding user", exception);
    }
}



// call seedUser function
seedUser();