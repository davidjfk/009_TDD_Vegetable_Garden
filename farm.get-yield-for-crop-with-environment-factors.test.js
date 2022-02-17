const { describe, test, expect } = require("@jest/globals");
const { getYieldForCrop } = require("./farm");

describe("getYieldForCrop with environmental variables", () => {


    test("Get yield for crop with 1 environmental factor", () => {
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
        const input = {
            crop: corn,
            numCrops: 10,
        };
        const environmentalFactors = {
            sun: "low",
        };

        expect(getYieldForCrop(input, environmentalFactors)).toBe(150);
    });

    test("Get yield for crop with 2 environmental factors", () => {
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
        const input = {
            crop: corn,
            numCrops: 10,
        };
        const environmentalFactors = {
            sun: "high",
            wind: "high"
        };
        expect(getYieldForCrop(input, environmentalFactors)).toBe(360);
    });

    test("Get yield for crop with 3 environmental factors AND 1 irrelevant factor", () => {
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
        const input = {
            crop: corn,
            numCrops: 10,
        };
        const environmentalFactors = {
            sun: "medium",
            temp: "low",
            soilType: "sand",
            wind: "medium",

        };
        expect(getYieldForCrop(input, environmentalFactors)).toBe(189);
    });
});