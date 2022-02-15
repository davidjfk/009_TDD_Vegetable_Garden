// nr 1of7:
const getYieldForPlant = (crops, environmentFactors = {}) => {
    let yieldForPlant = crops.yield;
    let { factor } = crops
    if (!factor) {
        return yieldForPlant;
    } else {
        let environmentVariables = Object.keys(environmentFactors);
        environmentVariables.forEach(key => {
            if (crops.factor?.[key] && environmentFactors?.[key]) {
                let relevantEnvironmentFactorKeyValue = environmentFactors[key]
                yieldForPlant *= (100 + crops.factor[key][relevantEnvironmentFactorKeyValue]) / 100
            }
        })
        return Math.floor(yieldForPlant)
    }
}


// nr 2of7:
const getYieldForCrop = (crops, environmentFactors = {}) => {
    let yieldForPlant = crops.crop.yield * crops.numCrops;
    let { crop: { factor } } = crops
    if (!factor) {
        console.log('foo')
        return yieldForPlant;
    } else {
        console.log('bar')
        let environmentVariables = Object.keys(environmentFactors);
        environmentVariables.forEach(key => {
            if (crops.crop?.factor?.[key] && environmentFactors?.[key]) {
                let relevantEnvironmentFactorKeyValue = environmentFactors[key]
                yieldForPlant *= (100 + crops.crop.factor[key][relevantEnvironmentFactorKeyValue]) / 100
            }
        })
        return Math.floor(yieldForPlant)
    }
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