const { uploadImage } = require("../../config/cloudinary.config");
const { deleteFile } = require("../../utils/helper");
const bannerService = require("./banner.service");

class BannerController{
        bannerId;
        create = async (req,res,next)=>{
                try {
                        const data = req.body;
                        const image = req.file;
                        //uploadimage and more
                        const imageUrl = await uploadImage(`./public/uploads/banners/${data[req.file.fieldname]}`);
                        data.image = imageUrl;
                        deleteFile(`./public/uploads/banners/${data[req.file.fieldname]}`); //delete file from local storage
                        data.createdBy = req.authUser.id;
                        const response = await bannerService.crateBanner(data);
                        console.log(response);
                        res.json({
                                result:response,
                                message:"Banner created successfully",
                                meta:null
                        });
                } catch (exception) {
                        console.log(`Error in creating banner`,exception);
                        next(exception);
                }
        }
        #validateId = async (req,res,next)=>{
                try {
                        const id = req.params.id;
                        if(!id){
                                throw {statusCode:400,message:"Id is required"};
                        }
                        this.bannerId = id;
                        next();
                } catch (exception) {
                        next(exception);
                }
        }
        getAllBanners = async (req,res,next)=>{
                try {

                        const {page,limit}= req.query;
                        const {data,count,totalPages} = await bannerService.listData(page,limit);

                        
                        res.json({
                                result: data,
                                message: "List of banners",
                                meta: {
                                        total: count,
                                        currentPage: page,
                                        totalPages,
                                        limit
                                }
                        });
                } catch (exception) {
                        next(exception);
                        
                }
        }
        index = async (req,res,next)=>{
        try {
                // pagination
                const page = +req.query.page || 1;
                const limit = +req.query.limit || 10;
                
                const skip = (page - 1) * limit;

                let filter = {};
                if(req.query.search){
                        filter ={
                                title: { $regex: req.query.search, $options: 'i' }
                        
                        }
                }
        } catch (exception) {
                next(exception);
        }
        }
        getSingleBannerById = async (req,res,next)=>{
                try {
                        const id = req.params.id;
                        if(!id){
                                throw {statusCode:400,message:"Id is required"};
                        }
                        const bannerDetail = await bannerService.getDetailById({_id:id});
                        if(!bannerDetail){
                                throw {statusCode:404,message:"Banner not found"};
                        }
                        res.status(200).json({
                                result: bannerDetail,
                                message: "Banner detail",
                                meta:null
                        });

                } catch (exception) {
                        next(exception);
                }
        }
        updateSingleBannerById = async (req,res,next)=>{
                // get banner by id , validate and update banner details
                const data = req.body;
                const image = req.file;
                
                try {
                        const {id} = req.params;
                        if(!id){
                                throw {statusCode:400,message:"Id is required"};
                        }
                       console.log(data,id)
                        if(image){
                                const imageUrl = await uploadImage(`./public/uploads/banner/${image.filename}`);
                                data.image = imageUrl;
                                deleteFile(`./public/uploads/banner/${image.filename}`);
                        }
                        const response = await bannerService.updateById(id,data);
                        res.json({
                                result:response,
                                message:"Banner updated successfully",
                                meta:null
                        });
                } catch (exception) {
                        
                }
        }
        deleteSingleBannerById = async (req,res,next)=>{
            try {

                const {id} = req.params;
                bannerService.deleteById(id);
                return res.json({
                        result: null,
                        message: "Banner deleted successfully",
                        meta: null
                });
            } catch (error) {
                next(error);
            }
        }
        listForHome = async(req,res,next)=>{
                try {
                        const list = await bannerService.listForHome();

                        res.json({
                                result:list,
                                message:"List of banners",
                                meta:null
                        })
                } catch (exception) {
                        next(exception);
                }
        }
}

// create object of BannerController
const bannerController = new BannerController();

module.exports = bannerController;