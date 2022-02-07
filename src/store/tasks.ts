export const addSalary = (salary: number, bonus: number) => {
    return salary + bonus
}

export const fallingSalary = (salary: number, minus: number) => {
    return salary - minus
}

export const multipleSalary = (salary: number, coefficient: number) => {
    return salary * coefficient
} // ex. 1.2, >1

export const divideSalary = (salary: number, coefficient: number) => {
    return salary * coefficient
} // ex. 0,9, <1


export type AddSalaryActionType = {
    type: 'ADD-SALARY',
    bonus: number
}
export type FallSalaryActionType = {
    type: 'FALL-SALARY',
    minus: number
}
export type MultipleSalaryActionType = {
    type: 'MULTIPLE-SALARY',
    coefficient: number
}
export type DivideSalaryActionType = {
    type: 'DIVIDE-SALARY',
    coefficient: number
}

type ActionType = AddSalaryActionType | FallSalaryActionType | MultipleSalaryActionType
| DivideSalaryActionType;

export const salaryReducer = (salary: number, action: ActionType) => {
    switch (action.type) {
        case 'ADD-SALARY':
            return salary + action.bonus
        case "FALL-SALARY":
            return salary - action.minus
        case "MULTIPLE-SALARY":
            return salary * action.coefficient
        case "DIVIDE-SALARY":
            return salary * action.coefficient
        default :
            return salary

    }
} //чистая функция, принимает стартовые состояния и возращает один и тот же результат
