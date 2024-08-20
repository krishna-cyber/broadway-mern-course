const bcrypt = require('bcryptjs');
const mailService = require('../../services/mail.service');
const { randomStringGenerator, deleteFile } = require('../../utils/helper');
const UserModel = require('./user.model');


class UserService {

    generateUserActivationToken= (data)=>{
        // send confirmation email and other verification process
    data.activateToken = randomStringGenerator(20);
    // set activatedFor date time 3 hours

    data.activatedFor = new Date(new Date().getTime() + 3*60*60*1000);
    return data;
    }

transformUserCreate = (req)=>{
    let data = req.body;   // name , email, password,confirmpassword, address, phone
    console.log(data);
    console.log(req.uploadPath);


    // hash the password
    const salt = bcrypt.genSaltSync(10);
    data.password = bcrypt.hashSync(data.password,salt);
    // data.confirmpassword = bcrypt.hashSync(data.confirmpassword,salt);
    // if single files
    if(req.file)   // {}
        {
            console.log(req.file);
        data.image = `${req.uploadPath}/${req.file.filename}`;
    
    }
    
    // if multiple files
    if(req.files)    // [{},{},{}]
        {
            console.log(req.files);
        data.images = req.files.map(file =>`${req.uploadPath}/${file.filename}`);
    }
    
    
    data= this.generateUserActivationToken(data);
    
    data.status = 'inactive';
   


    return data;
}

sendActivationEmail = async ({name,email,activateToken, sub='User activation token'})=>{
    try {
        await mailService.sendMail({
            to: email,
            sub: sub,
            message:`
            Dear ${name},<br>
            Your account has been created successfully. Please click the link below to activate your account.<br>
            <a href="${process.env.FRONTEND_URL}/activate/${activateToken}">Activate Now</a>
            <p>
            <small>This is an auto generated email. Please do not reply to this email.</small>
            </p>
            <p>
            Regards,<br>
            Team
            </p>
            `
        });
    } catch (error) {
        
        console.log(error);
        
    }
}

//user register function
createUser = async (data)=>{
    try {
        console.log(data);

        

        //create an instance of the user model
        const user = new UserModel(data);
        //save the user
        await user.save();


        return user;

    } catch (error) {
        console.log(error);
        //image delete
        if(data.image){
            console.log(`./public/uploads/${data.image}`)
            deleteFile(`./public/uploads/${data.image}`);
        }
        
        throw error;
    }
}

getSingleUserByFilter = async (filter)=>{
    try {
        const userDetail =await UserModel.findOne({activationToken:filter.token});
        if (userDetail) {
            return userDetail;
        } else {
            throw {statusCode:422,message:"Unable to process the request"};
        }
    } catch (exception) {
        throw exception;
    }
}

getAllUsers = async (filter)=>{
    try {
        const users = await UserModel.find(filter,'-password');
        return users; 
    } catch (error) {
        throw error;
    }
}

countUsers = async (limit=10)=>{
    try {
        const meta = await UserModel.countDocuments();
        return {
            total:meta,
            limit:limit,
            page:Math.ceil(meta/limit)
        }
    } catch (error) {
            throw error;
    }
}


}


// object of userService class
const userService = new UserService();



module.exports = userService;