import {sum} from "./taskStudent";

test("sum of el", () => {
    expect(sum(1, 2, 3, 4, 5)).toBe(15)
    expect(sum(1, 1, 1, 6)).toBe(9)
})