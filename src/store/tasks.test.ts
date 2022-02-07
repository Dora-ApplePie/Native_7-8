import {addSalary, fallingSalary, multipleSalary, divideSalary} from "./tasks";

test("AddSalary", () => {
    //1. Тестовые данные
    const salary: number = 2500;
    const bonus: number = 500;

    //2. Выполнение тестируемого кода
    const result = addSalary(salary, bonus)

    //3. Проверка ожидаемого результата
    expect(result).toBe(3000)
})

test('Falling salary', () => {
    const salary = 2500;
    const minus = 300;
    const result = fallingSalary(salary, minus)
    expect(result).toBe(2200)
})

test("Multiply Salary", () => {
    expect(multipleSalary(1000, 1.5)).toBe(1500)
})

test("Divide Salary", () => {
    expect(divideSalary(1000, 0.9)).toBe(900)
})