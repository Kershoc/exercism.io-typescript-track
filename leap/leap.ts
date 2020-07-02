interface Numeric {
    isDivisibleBy: (d: number) => boolean
}
const makeNumeric = (n: number): Numeric => ({
    isDivisibleBy: (d: number): boolean => {
        return n % d == 0
    }
})

function isLeapYear(n: number): boolean {
    const year = makeNumeric(n)
    return year.isDivisibleBy(4)
        && !year.isDivisibleBy(100)
        || year.isDivisibleBy(400)
}

export default isLeapYear
