import {getSum, getTriangleType, isEvenIndexSumGreater, isSquareGreater, sum} from "./taskStudent";

test("sum of el", () => {
    expect(sum(1, 2, 3, 4, 5)).toBe(15)
    expect(sum(1, 1, 1, 6)).toBe(9)
})

test("get type of triangle", () => {
    expect(getTriangleType(1, 1, 1)).toBe("10")
    expect(getTriangleType(2, 3, 3)).toBe("01")
    expect(getTriangleType(3, 3, 2)).toBe("01")
    expect(getTriangleType(4, 5, 3)).toBe("11")
    expect(getTriangleType(10, 2, 2)).toBe("00")
})

test("sum of el of number", () => {
    expect(getSum(66)).toBe(12)
    expect(getSum(1000)).toBe(1)
})

test("sum of el of array", () => {
    expect(isEvenIndexSumGreater([1, 2, 3, 4, 5])).toBe(true)
})

test("Circle is not larger than a square", () => {
    expect(isSquareGreater(44, 23)).toBe(true)
})