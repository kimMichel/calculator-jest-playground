describe('Calculator', () => {
    test('Should sum two numbers', () => {
        const sut = new Calculator()

        const a = 5
        const b = 3

        const result = sut.sum(a, b)
        expect(result).toBe(8)
    })
})