const ProductModel = require("./product.model");

class ProductService{

    createProduct= async (data)=>{
        try {
            const product = new ProductModel(data);
            return await product.save();
        } catch (exception) {
            throw exception;
        }
    }

    listData = async ({skip =0, filter = {}})=>{
        try {
            const count = await ProductModel.countDocuments(filter);
            const data = await ProductModel.find(filter).populate('createdBy',["_id","name","email","role"]).skip(skip).sort({_id:'desc'})
        } catch (exception) {
            throw exception;
        }
    }
    getDetailByFilter = async (filter)=>{
        try {
            const bannerDetail = await ProductModel.findOne(filter);
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
        const response = await ProductModel.findByIdAndDelete(id);
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
            const response = await ProductModel.findByIdAndUpdate(id,data,{new:true});
            if(!response){
                throw {statusCode:404,message:"Banner not found"};
            }
            return response;
        } catch (exception) {
            throw exception;
        }
    }
}

const productService = new ProductService();

module.exports = productService;