const getYieldForPlant = (crops) => {
    return crops.yield;
}

const getYieldForCrop = (crops) => {
    return crops.crop.yield * crops.numCrops;

}

const getTotalYield = (crops) => {
    let totalYield = 0;
    const totalYieldForVariousCrops = Object.values(crops)
    const totalYieldForVariousCropsFlattened = totalYieldForVariousCrops.flat(1);
    for (let totalYieldForOneCrop of totalYieldForVariousCropsFlattened) {
        totalYield += totalYieldForOneCrop.crop.yield * totalYieldForOneCrop.numCrops;
    }
    return totalYield
}


module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
};