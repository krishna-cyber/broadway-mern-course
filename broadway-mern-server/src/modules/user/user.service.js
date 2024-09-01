const bcrypt = require("bcryptjs");
const mailService = require("../../services/mail.service");
const { randomStringGenerator, deleteFile } = require("../../utils/helper");
const UserModel = require("./user.model");
const { uploadImage } = require("../../config/cloudinary.config");

class UserService {
  generateUserActivationToken = (data) => {
    // send confirmation email and other verification process 
    // By default 3 hours activation time given to user
    data.activateToken = randomStringGenerator(20);

    return data;
  };

  transformUserCreate = async (req) => {
    try {
      let data = req.body; // name , email, password,confirmpassword, address, phone

      // hash the password
      const salt = bcrypt.genSaltSync(10);
      data.password = bcrypt.hashSync(data.password, salt);
      delete data.confirmPassword;
      // if single files
      if (req.file) {
        // {}
        const imageUrl = await uploadImage(
          `./public/uploads/${req.uploadPath}/${data[req.file.fieldname]}`
        );
        deleteFile(
          `public/uploads/${req.uploadPath}/${data[req.file.fieldname]}`
        );
        console.log(req.file);
        data.image = imageUrl;
      }

      // if multiple files
      if (req.files) {
        // [{},{},{}]
        console.log(req.files);
        data.images = req.files.map(
          (file) => `${req.uploadPath}/${file.filename}`
        );
      }

      data = this.generateUserActivationToken(data);

      data.status = "inactive";
      console.log(`data after transformation`, data);

      return data;
    } catch (error) {
      console.log(`error at transform user create user service`);
      throw error;
    }
  };

  sendActivationEmail = async ({
    fullName,
    email,
    activateToken,
    sub = "User activation token",
  }) => {
    try {
      await mailService.sendMail({
        to: email,
        sub: sub,
        message: `
            Dear ${fullName},<br>
            Your account has been created successfully. Please click the link below to activate your account.<br>
            <a href="${process.env.FRONTEND_URL}/activate/${activateToken}">Activate Now</a>
            <p>
            <small>This is an auto generated email. Please do not reply to this email.</small>
            </p>
            <p>
            Regards,<br>
            Team
            </p>
            `,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //user register function
  createUser = async (data) => {
    try {
      console.log(`data ready to create a new user `, data);
      const user = new UserModel(data);
      return await user.save();
    } catch (error) {
      console.log(error);
      //image delete
      if (data.image) {
        console.log(`./public/uploads/${data.image}`);
        deleteFile(`./public/uploads/${data.image}`);
      }

      throw error;
    }
  };

  getSingleUserByFilter = async (filter) => {
    try {
      const userDetail = await UserModel.findOne({
        activationToken: filter.token,
      });
      if (userDetail) {
        return userDetail;
      } else {
        throw { statusCode: 422, message: "Unable to process the request" };
      }
    } catch (exception) {
      throw exception;
    }
  };

  getAllUsers = async (page=1, limit=5, search = {}) => {
    try {
const skip = (page - 1) * limit;
      const users = await UserModel.find(search, "-password -activationToken -createdAt -updatedAt").skip(skip).limit(limit);
      return users;
    } catch (error) {
      throw error;
    }
  };

  countUsers = async (limit) => {
    try {
      const total = await UserModel.countDocuments();
      return {
        total,
    
        totalPages: Math.ceil(total / limit),
      };
    } catch (error) {
      throw error;
    }
  };
}

// object of userService class
const userService = new UserService();

module.exports = userService;
