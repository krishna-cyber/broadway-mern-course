const bcrypt = require('bcryptjs');
require('../config/db.config');
const userService = require('../modules/user/user.service');
const UserModel = require('../modules/user/user.model');

const adminUsers = [
    {
        name:"Krishna Tiwari",
        email:"tiwarikrishna54321@gmail.com",
        password : bcrypt.hashSync("admin", 10),
        role: UserRoles.Admin,
        status: StatusType.ACTIVE
    }
]

const seedUser= ()=>{
    try {
       adminUsers.map(async (user)=>{
        const userExisting =await  UserModel.findOne({email:user.email});
        if (!userExisting){
            await UserModel.create(user);
            
        }
        process.exit(1);
       })
    } catch (exception) {
        console.log("Error in seeding user", exception);
    }
}