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
listData = async (currentPage=1,limit=5,filter={})=>{
    try {
        const skip = (currentPage - 1) * limit;
        const total = await ProductModel.countDocuments(filter);
        const totalPages = Math.ceil(total/limit);
        const data = await ProductModel.find(filter).populate('createdBy',["_id","name","email","role"]).skip(skip).limit(limit).sort({_id:'desc'});
        return {data,totalPages,total,limit,currentPage}
    } catch (exception) {
        throw exception;
    }
}
    landingPageData = async (currentPage=1,limit=5,filter={})=>{
        try {
            const skip = (currentPage - 1) * limit;
            const totalProducts = await ProductModel.countDocuments(filter);
            const result = await ProductModel.find(filter).skip(skip).limit(limit);
            const hasMore = skip + limit < totalProducts;
            return {result,hasMore}
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
       const response= await ProductModel.findByIdAndDelete(id);
        if(!response){
            throw {statusCode:404,message:"product not found"};
        }
       
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
    countProducts = async ()=>{
        try {
            return await ProductModel.countDocuments();
        } catch (exception) {
            throw exception;
        }
    }
}

const productService = new ProductService();

module.exports = productService;