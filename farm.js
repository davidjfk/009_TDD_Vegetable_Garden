const getYieldForPlant = (crops) => {
    return crops.yield;
}

const getYieldForCrop = (crops) => {
    return crops.crop.yield * crops.numCrops;

}

const getTotalYield = (crops) => {
    return Object.values(crops).flat(1).reduce((totalYield, totalYieldForOneCrop) =>
        totalYield + totalYieldForOneCrop.crop.yield * totalYieldForOneCrop.numCrops, 0)
}

const getCostsForCrop = (crops) => {
    return crops.crop.costPrice * crops.numCrops;
}

const getRevenueForCrop = (crops) => {
    return crops.crop.salesPrice * crops.numCrops;
}

const getProfitsForCrop = (crops) => {
    return getRevenueForCrop(crops) - getCostsForCrop(crops)
}

const getTotalProfit = (crops) => {
    return Object.values(crops).flat(1).reduce((totalYield, totalYieldForOneCrop) =>
        totalYield + ((totalYieldForOneCrop.crop.salesPrice - totalYieldForOneCrop.crop.costPrice) *
            totalYieldForOneCrop.numCrops), 0)
}

module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitsForCrop,
    getTotalProfit,
};