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

    listData = async (currentPage,limit,filter={})=>{
        try {
            //calculate skip based on current page and limit
            const count = await BannerModel.countDocuments(filter);
            const skip = (currentPage - 1) * limit;
            const data = await BannerModel.find(filter).populate('createdBy',["_id","fullName","email","role"]).skip(skip).limit(limit).sort({_id:'desc'});
            let totalPages = Math.ceil(count / limit);
            return {data,count,totalPages};
        } catch (exception) {
            throw exception;
        }
    }
    getDetailByFilter = async (filter)=>{
        try {
            const bannerDetail = await BannerModel.find(filter);
          console.log(bannerDetail);
            return bannerDetail;
        } catch (exception) {
            throw exception;
        }
    }
getDetailById = async (id)=>{

    try {
        const bannerDetail = await BannerModel.findById(id);
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
    listForHome = async ()=>{
        try {
            const list = await BannerModel.find(
               {
                $or:[
                   { status:'active'},
                   { status:'ACTIVE'}
                ]
               },{_id:1,image:1,title:1,link:1}
            ).limit(7).sort({_id:'desc'});
            return list;
        } catch (exception) {
            throw exception;
        }
    }
}

const bannerService = new BannerService();

module.exports = bannerService;