// nr 1of7:
const getYieldForPlant = (crops, environmentFactors = {}) => {
    let result = crops.yield;
    let { factor } = crops
    if (!factor) {
        return result;
    } else {
        let relevantEnvVariables = Object.keys(environmentFactors);
        relevantEnvVariables.forEach(key => {
            if (crops.factor?.[key] && environmentFactors?.[key]) {
                let environmentFactorKeyValue = environmentFactors[key]
                result *= (100 + crops.factor?.[key][environmentFactorKeyValue]) / 100
            }
        })
        return Math.floor(result)
    }
}


// nr 2of7:
const getYieldForCrop = (crops) => {
    return crops.crop.yield * crops.numCrops;

}

// nr 3of7:
const getTotalYield = (crops) => {
    return Object.values(crops).flat(1).reduce((totalYield, totalYieldForOneCrop) =>
        totalYield + getYieldForCrop(totalYieldForOneCrop), 0)
}

// nr 4of7:
const getCostsForCrop = (crops) => {
    return crops.crop.costPrice * crops.numCrops;
}

// nr 5of7:
const getRevenueForCrop = (crops) => {
    return crops.crop.salesPrice * getYieldForCrop(crops);
}

// nr 6of7:
const getProfitsForCrop = (crops) => {
    return getRevenueForCrop(crops) - getCostsForCrop(crops)
}

// nr 7of7:
const getTotalProfit = (crops) => {
    return Object.values(crops).flat(1).reduce((totalYield, totalProfitForOneCrop) =>
        totalYield + (getProfitsForCrop(totalProfitForOneCrop)), 0)
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