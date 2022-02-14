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
    return crops.crop.cost * crops.numCrops;
}


module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
};