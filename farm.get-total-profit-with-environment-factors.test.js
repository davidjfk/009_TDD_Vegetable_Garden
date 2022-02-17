const { describe, test, expect } = require("@jest/globals");
const { getTotalProfit } = require("./farm");

describe("getTotalProfit for crop(s) with environmental factor(s)", () => {
    test("Get totalYield for 1 crop with 1 environmental factor.", () => {
        const corn = {
            name: "corn",
            yield: 3,
            salesPrice: 6,
            costPrice: 1,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            },
        };
        const crops = [
            { crop: corn, numCrops: 5 },
        ];

        const environmentalFactors = {
            sun: "low",
        };
        expect(getTotalProfit({ crops }, environmentalFactors)).toBe(40.00);
    });

    test("Get totalYield for 2 crop with 2 different environmental factors each.", () => {
        const mango = {
            name: "mango",
            yield: 4,
            salesPrice: 8,
            costPrice: 4,
            factor: {
                soilType: {
                    sand: -60,
                    clay: -30,
                    soil: +150,
                },
                wind: {
                    low: 0,
                    medium: +5,
                    high: +10,
                },
            },
        };
        const pineapple = {
            name: "pineapple",
            yield: 2,
            salesPrice: 10,
            costPrice: 5,
            factor: {
                sun: {
                    low: -50,
                    medium: -20,
                    high: +300,
                },
                temp: {
                    low: -70,
                    medium: -20,
                    high: +250,
                },
            },
        };

        const crops = [
            { crop: mango, numCrops: 2 },
            { crop: pineapple, numCrops: 33 },
        ];

        const environmentalFactors = {
            soilType: "clay",
            wind: "high",
            sun: "medium",
            temp: "low",
        };

        expect(getTotalProfit({ crops }, environmentalFactors)).toBe(34.68);
    });

    test("Get totalYield for 2 crops with 3 environmental factors each.", () => {
        const avocado = {
            name: "avocado",
            yield: 3,
            salesPrice: 5,
            costPrice: 1,
            factor: {
                sun: {
                    low: -20,
                    medium: 0,
                    high: +50,
                },
                temp: {
                    low: -50,
                    medium: +10,
                    high: +80,
                },
                wind: {
                    low: 0,
                    medium: -30,
                    high: -60,
                },
            },
        };
        const corn = {
            name: "corn",
            yield: 3,
            salesPrice: 6,
            costPrice: 1,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: +50,
                },
                temp: {
                    low: -30,
                    medium: 0,
                    high: +20,
                },
                wind: {
                    low: 0,
                    medium: -10,
                    high: -20,
                },
            },
        };

        const crops = [
            { crop: avocado, numCrops: 7 },
            { crop: corn, numCrops: 8 },
        ];

        const environmentalFactors = {
            soilType: "sand",
            sun: "low",
            temp: "medium",
            wind: "high",
        };

        expect(getTotalProfit({ crops }, environmentalFactors)).toBe(79.56);
    });


    test("Get totalProfit for 3 crops with 2 or 3 environmental factors each.", () => {
        const carrot = {
            name: "carrot",
            yield: 3,
            salesPrice: 5,
            costPrice: 1,
            factor: {
                soilType: {
                    sand: +10,
                    clay: +20,
                    soil: +50,
                },
                temp: {
                    low: -60,
                    medium: +60,
                    high: -30,
                },
            },
        };
        const mango = {
            name: "mango",
            yield: 4,
            salesPrice: 8,
            costPrice: 4,
            factor: {
                soilType: {
                    sand: -60,
                    clay: -30,
                    soil: +150,
                },
                sun: {
                    low: -80,
                    medium: -10,
                    high: +200,
                },
                wind: {
                    low: 0,
                    medium: +5,
                    high: +10,
                },
            },
        };
        const pineapple = {
            name: "pineapple",
            yield: 2,
            salesPrice: 10,
            costPrice: 5,
            factor: {
                sun: {
                    low: -50,
                    medium: -20,
                    high: +300,
                },
                temp: {
                    low: -70,
                    medium: -20,
                    high: +250,
                },
            },
        };

        const crops = [
            { crop: carrot, numCrops: 28 },
            { crop: mango, numCrops: 34 },
            { crop: pineapple, numCrops: 17 },
        ];

        const environmentalFactors = {
            soilType: "soil",
            sun: "high",
            temp: "high",
            wind: "low",
        };

        expect(getTotalProfit({ crops }, environmentalFactors)).toBe(13112);
    });
});