const BannerModel = require("./banner.model");

class BannerService{

    crateBanner= async (data)=>{
        try {
            const banner = new BannerModel(data);
            return await banner.save();
        } catch (exception) {
            throw exception;
        }
    }

    listData = async ({skip =0, filter = {}})=>{
        try {
            const count = await BannerModel.countDocuments(filter);
            const data = await BannerModel.find(filter).populate('createdBy',["_id","name","email","role"]).skip(skip).sort({_id:'desc'});
            return {data,count};
        } catch (exception) {
            throw exception;
        }
    }
    getDetailByFilter = async (filter)=>{
        try {
            const bannerDetail = await BannerModel.findOne(filter);
            if(!bannerDetail){
                throw {statusCode:404,message:"Banner not found"};
            }
            return bannerDetail;
        } catch (exception) {
            throw exception;
        }
    }

    deleteById = async (id)=>{
        try {
        const response = await BannerModel.findByIdAndDelete(id);
        if(!response){
            throw {statusCode:404,message:"Banner not found"};
        }
        return response;
        } catch (exception) {
            throw exception;
        }
    }
    updateById = async (id,data)=>{
        try {
            const response = await BannerModel.findByIdAndUpdate(id,data,{new:true});
            if(!response){
                throw {statusCode:404,message:"Banner not found"};
            }
            return response;
        } catch (exception) {
            throw exception;
        }
    }
}

const bannerService = new BannerService();

module.exports = bannerService;