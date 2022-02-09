import {getTriangleType, sum} from "./taskStudent";

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