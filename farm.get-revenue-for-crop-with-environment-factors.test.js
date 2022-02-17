const { describe, test, expect } = require("@jest/globals");
const { getRevenueForCrop } = require("./farm");

describe("getRevenueForCrop with environmental factor(s)", () => {
    test("getRevenueForCrop for 1 crop with 1 environmental factor", () => {
        const corn = {
            name: "corn",
            yield: 3,
            salesPrice: 6,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            },
        };
        const input = {
            crop: corn,
            numCrops: 5
        };

        const environmentalFactors = {
            sun: "low",
        };
        expect(getRevenueForCrop(input, environmentalFactors)).toBe(45.00);
    });

    test("getRevenueForCrop for 1 crop with 2 environmental factors", () => {
        const mango = {
            name: "mango",
            yield: 4,
            salesPrice: 8,
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
        const input = {
            crop: mango,
            numCrops: 2
        };

        const environmentalFactors = {
            soilType: "clay",
            wind: "high",
        };

        expect(getRevenueForCrop(input, environmentalFactors)).toBe(49.28);
    });




    test("getRevenueForCrop for 1 crop with 4 environmental factors, of which 1 irrelevant. ", () => {
        const avocado = {
            name: "avocado",
            yield: 3,
            salesPrice: 5,
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
        const input = {
            crop: avocado,
            numCrops: 20
        };

        const environmentalFactors = {
            soilType: "sand",
            sun: "high",
            temp: "high",
            wind: "medium",
        };

        expect(getRevenueForCrop(input, environmentalFactors)).toBe(567);
    });

    test("getRevenueForCrop for 1 crop with 4 environmental factors, of which 1 irrelevant. ", () => {
        const mango = {
            name: "mango",
            yield: 4,
            salesPrice: 8,
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
        const input = {
            crop: mango,
            numCrops: 14
        };

        const environmentalFactors = {
            soilType: "soil",
            sun: "low",
            temp: "high",
            wind: "medium",
        };

        expect(getRevenueForCrop(input, environmentalFactors)).toBeCloseTo(235.2);
    });


});