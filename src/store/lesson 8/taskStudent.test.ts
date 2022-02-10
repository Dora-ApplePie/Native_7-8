import {getBanknoteList, getSum, getTriangleType, isEvenIndexSumGreater, isSquareGreater, sum} from "./taskStudent";

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
    expect(getSum(9999)).toBe(36)
})

test("sum of el of array", () => {
    expect(isEvenIndexSumGreater([1, 2, 3, 4, 5])).toBe(true)
    expect(isEvenIndexSumGreater([100, 1, 200, 2])).toBe(true)
    expect(isEvenIndexSumGreater([1, 100, 2, 200])).toBe(false)
})

test("Circle is not larger than a square", () => {
    expect(isSquareGreater(3.14, 4)).toBe(true)
})

test("Divide banknotes", () => {
    expect(getBanknoteList(1500)).toStrictEqual([1000, 500])
    expect(getBanknoteList(7263)).toStrictEqual([1000, 1000, 1000, 1000, 1000, 1000, 1000, 100, 100, 50, 10, 2, 1 ])
    expect(getBanknoteList(777)).toStrictEqual([500, 100, 100, 50, 20, 5, 2])
    expect(getBanknoteList(500)).toStrictEqual([500])
    expect(getBanknoteList(-20)).toStrictEqual([])
    expect(getBanknoteList(2)).toStrictEqual([2])
})