const CategoryModel = require("./category.model");

class CategoryService{

    crateBanner= async (data)=>{
        try {
            const banner = new CategoryModel(data);
            return await banner.save();
        } catch (exception) {
            throw exception;
        }
    }

    listData = async ({skip =0, filter = {}})=>{
        try {
            const count = await CategoryModel.countDocuments(filter);
            const data = await CategoryModel.find(filter).populate('createdBy',["_id","name","email","role"]).skip(skip).sort({_id:'desc'})
        } catch (exception) {
            throw exception;
        }
    }
    getDetailByFilter = async (filter)=>{
        try {
            const bannerDetail = await CategoryModel.findOne(filter);
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
        const response = await CategoryModel.findByIdAndDelete(id);
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
            const response = await CategoryModel.findByIdAndUpdate(id,data,{new:true});
            if(!response){
                throw {statusCode:404,message:"Banner not found"};
            }
            return response;
        } catch (exception) {
            throw exception;
        }
    }
}

const categoryService = new CategoryService();

module.exports = categoryService;