const { describe, test, expect } = require("@jest/globals");
const { getTotalYield } = require("./farm");

describe("getTotalYield for crop(s) with environmental factor(s)", () => {
    test("Get totalYield for 2 crops with 1 environmental factor", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            },
        };
        const mango = {
            name: "mango",
            yield: 4,
            factor: {
                sun: {
                    low: -80,
                    medium: -10,
                    high: +200,
                },
            },
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: mango, numCrops: 2 },
        ];

        const environmentalFactors = {
            sun: "low",
        };

        expect(getTotalYield({ crops }, environmentalFactors)).toBe(9);
    });

    test("Get totalYield for 2 crops with 2 environmental factors. 1 factor is the same and  1 factor is different for both crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: 0,
                    medium: -10,
                    high: -20,
                },
            },
        };
        const mango = {
            name: "mango",
            yield: 4,
            factor: {
                sun: {
                    low: -80,
                    medium: -10,
                    high: +200,
                },
                soilType: {
                    sand: -60,
                    clay: -30,
                    soil: +150,
                },
            },
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: mango, numCrops: 2 },
        ];

        const environmentalFactors = {
            sun: "high",
            wind: "high",
            soilType: "sand",
        };

        expect(getTotalYield({ crops }, environmentalFactors)).toBe(27);
    });

    test("Get totalYield for 3 crops with 2 or 3 relevant environmental factors per crop AND 1 or 2 irrelevant factors", () => {
        const avocado = {
            name: "avocado",
            yield: 1,
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

        const carrot = {
            name: "carrot",
            yield: 4,
            factor: {
                soilType: {
                    sand: +10,
                    clay: -20,
                    soil: +50,
                },
                temp: {
                    low: -60,
                    medium: 60,
                    high: -30,
                },
            },
        };
        const corn = {
            name: "corn",
            yield: 3,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
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
            { crop: avocado, numCrops: 30 },
            { crop: carrot, numCrops: 20 },
            { crop: corn, numCrops: 10 },

        ];

        const environmentalFactors = {
            soilType: "soil",
            sun: "medium",
            temp: "medium",
            wind: "low",
        };

        expect(getTotalYield({ crops }, environmentalFactors)).toBe(255);
    });
});