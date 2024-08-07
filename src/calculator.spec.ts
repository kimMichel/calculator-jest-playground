import { Calculator } from "./calculator"

describe('Calculator', () => {
    test('Should sum two numbers', () => {
        const sut = new Calculator()

        const a = 5
        const b = 3

        const result = sut.sum(a, b)
        expect(result).toBe(8)
    })

    test('Should minus two numbers', () => {
        const sut = new Calculator()

        const a = 5
        const b = 3

        const result = sut.minus(a, b)
        expect(result).toBe(2)
    })

    test('Should multiply two numbers', () => {
        const sut = new Calculator()

        const a = 5
        const b = 3

        const result = sut.multiply(a, b)
        expect(result).toBe(15)
    })

    test('Should multiply divide numbers', () => {
        const sut = new Calculator()

        const a = 15
        const b = 3

        const result = sut.divide(a, b)
        expect(result).toBe(5)
    })
})