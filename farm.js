const getYieldForPlant = (crops, environmentFactors = {}) => {
    let yieldForPlant = crops.yield;
    let { factor } = crops
    if (!factor) {
        return yieldForPlant;
    } else {
        let environmentalFactors = Object.keys(environmentFactors);
        environmentalFactors.forEach(key => {
            if (crops.factor?.[key] && environmentFactors?.[key]) {
                let relevantEnvironmentalFactorKeyValue = environmentFactors[key]
                yieldForPlant *= (100 + crops.factor[key][relevantEnvironmentalFactorKeyValue]) / 100
            }
        })
        return Math.floor(yieldForPlant)
    }
}


const getYieldForCrop = (crops, environmentFactors = {}) => {
    let yieldForCrop = crops.crop.yield * crops.numCrops;
    let { crop: { factor } } = crops
    if (!factor) {
        return yieldForCrop;
    } else {
        let environmentalFactors = Object.keys(environmentFactors);
        environmentalFactors.forEach(key => {
            if (crops.crop?.factor?.[key] && environmentFactors?.[key]) {
                let relevantEnvironmentalFactorKeyValue = environmentFactors[key];
                yieldForCrop *= (100 + crops.crop.factor[key][relevantEnvironmentalFactorKeyValue]) / 100
            }
        })
        return yieldForCrop
    }
}


const getTotalYield = (crops, environmentFactors = {}) => {
    return Math.floor(Object.values(crops).flat(1).reduce((totalYield, totalYieldForOneCrop) =>
        totalYield + getYieldForCrop(totalYieldForOneCrop, environmentFactors), 0))
}

const getCostsForCrop = (crops) => {
    return crops.crop.costPrice * crops.numCrops;
}

const getRevenueForCrop = (crops, environmentFactors = {}) => {
    // console.log(`salesPrice: ${crops.crop.salesPrice}`)
    return (crops.crop.salesPrice * getYieldForCrop(crops, environmentFactors));
}


const getProfitsForCrop = (crops, environmentFactors = {}) => {
    return getRevenueForCrop(crops, environmentFactors) - getCostsForCrop(crops)
}

const getTotalProfit = (crops, environmentFactors = {}) => {
    return parseFloat((Object.values(crops).flat(1).reduce((totalYield, totalProfitForOneCrop) =>
        totalYield + (getProfitsForCrop(totalProfitForOneCrop, environmentFactors)), 0)).toFixed(2));
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