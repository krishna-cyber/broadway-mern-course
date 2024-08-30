const orderModel = require("./order.model");

class OrderService{

    createProduct= async (data)=>{
        try {
            const product = new orderModel(data);
            return await product.save();
        } catch (exception) {
            throw exception;
        }
    }

    listData = async (currentPage=1,limit=5,filter={})=>{
        try {
            const skip = (currentPage - 1) * limit;
            const total = await orderModel.countDocuments(filter);
            const totalPages = Math.ceil(total/limit);
            const data = await orderModel.find(filter).populate('createdBy',["_id","name","email","role"]).skip(skip).limit(limit).sort({_id:'desc'});
            return {data,totalPages,total,limit,currentPage}
        } catch (exception) {
            throw exception;
        }
    }
    getDetailByFilter = async (filter)=>{
        try {
            const bannerDetail = await orderModel.findOne(filter);
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
        const response = await orderModel.findByIdAndDelete(id);
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
            const response = await orderModel.findByIdAndUpdate(id,data,{new:true});
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
            return await orderModel.countDocuments();
        } catch (exception) {
            throw exception;
        }
    }
}

const orderService = new OrderService();

module.exports = orderService;