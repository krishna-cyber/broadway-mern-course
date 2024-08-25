    const mongoose = require("mongoose");

    const monthEnum = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
    ];

    const MonthlyDataSchema = new mongoose.Schema({
    month: { type: String, required: true, enum: monthEnum },
    salesAmount: { type: Number, required: true, default: 0 },
    orderCount: { type: Number, required: true, default: 0 },
    topSellingProducts: [
        {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        quantitySold: { type: Number, required: true, default: 0 },
        },
    ],
    });

    const YearlyDataSchema = new mongoose.Schema({
    year: { type: Number, required: true },
    monthlyData: { type: [MonthlyDataSchema], required: true },
    totalSales: { type: Number, required: true, default: 0 },
    totalOrders: { type: Number, required: true, default: 0 },
    topSellingBrands: [
        {
        brand: { type: String, required: true },
        salesAmount: { type: Number, required: true, default: 0 },
        },
    ],
    });


    const AnalyticsSchema = new mongoose.Schema({
        seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',  // Assuming 'User' model includes sellers and admins
        required: true,
        },
        yearlyData: { type: [YearlyDataSchema], required: true },
    });


    const AnalyticsModel = mongoose.model("Analytics", AnalyticsSchema);

    module.exports = AnalyticsModel;