const { describe, test, expect } = require("@jest/globals");
const { getYieldForPlant } = require("./farm");

describe("getYieldForPlant with environmental variables", () => {


    test("Get yield for plant with 1 environmental factor", () => {
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

        const environmentalFactors = {
            sun: "low",
        };

        expect(getYieldForPlant(corn, environmentalFactors)).toBe(15);
    });

    test("Get yield for plant with 2 environmental factors", () => {
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

        const environmentalFactors = {
            sun: "high",
            wind: "high"
        };
        expect(getYieldForPlant(corn, environmentalFactors)).toBe(36);
    });

    test("Get yield for plant with 3 environmental factors AND 1 irrelevant factor", () => {
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

        const environmentalFactors = {
            sun: "medium",
            temp: "low",
            soilType: "sand",
            wind: "medium",

        };
        expect(getYieldForPlant(corn, environmentalFactors)).toBe(18);
    });
});