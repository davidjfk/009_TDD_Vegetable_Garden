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

describe("getYieldForPlant with environment variables", () => {


    test("Get yield for plant with 1 environment factor", () => {
        const corn = {
            name: "corn",
            yield: 30,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            },
        };

        const environmentFactors = {
            sun: "low",
        };

        expect(getYieldForPlant(corn, environmentFactors)).toBe(15);
    });

    test("Get yield for plant with 2 environment factor", () => {
        const corn = {
            name: "corn",
            yield: 30,
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

        const environmentFactors = {
            sun: "high",
            wind: "high"
        };
        expect(getYieldForPlant(corn, environmentFactors)).toBe(36);
    });

    test("Get yield for plant with 3 relevant environment factors AND 1 irrelevant factor", () => {
        const corn = {
            name: "corn",
            yield: 30,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                temp: {
                    low: -30,
                    medium: 0,
                    high: 20,
                },
                wind: {
                    low: 0,
                    medium: -10,
                    high: -20,
                },
            },
        };

        const environmentFactors = {
            sun: "medium",
            temp: "low",
            wind: "medium",
            soilType: "sand",
        };
        expect(getYieldForPlant(corn, environmentFactors)).toBe(18);
    });
});