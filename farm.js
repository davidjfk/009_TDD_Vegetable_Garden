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

module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
};