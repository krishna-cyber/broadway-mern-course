const CategoryModel = require("./category.model");

class CategoryService{

    createCategory= async (data)=>{
        try {
            const category = new CategoryModel(data);
            return await category.save();
        } catch (exception) {
            throw exception;
        }
    }

     listData = async (currentPage = 1, limit = 8, filter = {}) => {
        try {
            const skip = (currentPage - 1) * limit;
    
            // Count the total number of documents that match the filter
            const count = await CategoryModel.countDocuments(filter);
    
            // Retrieve the data, with pagination, filtering, sorting, and population
            const data = await CategoryModel.find(filter)
                .skip(skip)
                .limit(limit)  // You missed adding this, but it's typically needed for pagination
                .sort({_id: 'desc'});
    
            // Meta data for the response
            const meta = {
                total: count,
                totalPages: Math.ceil(count / limit),
                currentPage,
            };
    
            // Return the data along with meta information
            return { data, meta };
        } catch (exception) {
            throw exception;  // Propagate the exception if something goes wrong
        }
    };
    listAll = async ()=>{
        try {
            const result = await CategoryModel.find().select('name image _id');
            // replace _id with id others are same
            return result.map(item => {
                const itemObj = item.toObject(); // Convert to plain object
                return { ...itemObj, id: itemObj._id }; // Add new id field
            });
            
        } catch (error) {
            throw error;
        }
    }
    getDetailByFilter = async (filter)=>{
        try {
            console.log(filter);
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
    getCategoryById = async (id)=>{
        try {
            const response = await CategoryModel.findById(id);
            if(!response){
                throw {statusCode:404,message:"Category not found"};
            }
            return response;
        } catch (exception) {
            throw exception;
        }
    }
}

const categoryService = new CategoryService();

module.exports = categoryService;