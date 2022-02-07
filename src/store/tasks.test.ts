import {
    addSalary,
    fallingSalary,
    multipleSalary,
    divideSalary,
    salaryReducer,
    AddSalaryActionType, FallSalaryActionType, MultipleSalaryActionType, DivideSalaryActionType
} from "./tasks";

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

test("ADD SALARY of salaryReducer", ()=>{
    const salary: number = 700;
    const action: AddSalaryActionType = {
        type: 'ADD-SALARY',
        bonus: 300
    }
    expect(salaryReducer(salary, action)).toBe(1000)
} )

test("FALL SALARY of salaryReducer", ()=>{
    const salary: number = 2000;
    const action: FallSalaryActionType = {
        type: 'FALL-SALARY',
        minus: 300
    }
    expect(salaryReducer(salary, action)).toBe(1700)
} )

test("MULTIPLE SALARY of salaryReducer", ()=>{
    const salary: number = 1000;
    const action: MultipleSalaryActionType = {
        type: "MULTIPLE-SALARY",
        coefficient: 1.2
    }
    expect(salaryReducer(salary, action)).toBe(1200)
} )

test("DIVIDE SALARY of salaryReducer", ()=>{
    const salary: number = 1000;
    const action: DivideSalaryActionType = {
        type: "DIVIDE-SALARY",
        coefficient: 0.8
    }
    expect(salaryReducer(salary, action)).toBe(800)
} )