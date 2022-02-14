
const { describe, test, expect } = require("@jest/globals");
const {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitsForCrop,
    getTotalProfit,
} = require("./farm");

describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 30,
    };

    test("Get yield for plant with no environment factors", () => {
        expect(getYieldForPlant(corn)).toBe(30);
    });
});

describe("getYieldForCrop", () => {
    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input)).toBe(30);
    });
});

describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalYield({ crops })).toBe(23);
    });

    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getTotalYield({ crops })).toBe(0);
    });
});

// do not modify code above: 

describe("getCostsForCrop", () => {
    test("Costs of 10 species of corn", () => {
        const corn = {
            name: "corn",
            costPrice: 1,
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getCostsForCrop(input)).toBe(10);
    });
    test("Costs of 0 species of corn", () => {
        const corn = {
            name: "corn",
            costPrice: 1,
        };
        const input = {
            crop: corn,
            numCrops: 0,
        };
        expect(getCostsForCrop(input)).toBe(0);
    });
});

describe("getRevenueForCrop", () => {
    test("Revenue of 10 species of pineapple", () => {
        const pineapple = {
            name: "pineapple",
            salesPrice: 10,
        };
        const input = {
            crop: pineapple,
            numCrops: 10,
        };
        expect(getRevenueForCrop(input)).toBe(100);
    });
    test("Revenue of 0 species of pineapple", () => {
        const pineapple = {
            name: "pineapple",
            salesPrice: 10,
        };
        const input = {
            crop: pineapple,
            numCrops: 0,
        };
        expect(getRevenueForCrop(input)).toBe(0);
    });
});

describe("getProfitForCrop", () => {
    test("Profit of 10 species of carrot", () => {
        const carrot = {
            name: "carrot",
            costPrice: 2,
            salesPrice: 4,
        };
        const input = {
            crop: carrot,
            numCrops: 10,
        };
        expect(getProfitsForCrop(input)).toBe(20);
    });
    test("Profit of 0 species of carrot", () => {
        const carrot = {
            name: "carrot",
            costPrice: 2,
            salesPrice: 4,
        };
        const input = {
            crop: carrot,
            numCrops: 0,
        };
        expect(getProfitsForCrop(input)).toBe(0);
    });
});


describe("getTotalProfit", () => {
    test("advocado and mango, both with number of crops > 0", () => {
        const avocado = {
            name: "avocado",
            costPrice: 1,
            salesPrice: 5,
        };
        const mango = {
            name: "mango",
            costPrice: 4,
            salesPrice: 8,
        };
        const crops = [
            { crop: avocado, numCrops: 6 },
            { crop: mango, numCrops: 7 },
        ];
        expect(getTotalProfit({ crops })).toBe(52);
    });

    test("advocado and mango, both with number of crops equals 0", () => {
        const avocado = {
            name: "avocado",
            costPrice: 1,
            salesPrice: 5,
        };
        const mango = {
            name: "mango",
            costPrice: 4,
            salesPrice: 8,
        };
        const crops = [
            { crop: avocado, numCrops: 0 },
            { crop: mango, numCrops: 0 },
        ];
        expect(getTotalProfit({ crops })).toBe(0);
    });
});