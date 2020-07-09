export class Converter {
    convert(digits:number[], fB:number, tB:number) :number[] {
        if (fB<2 || !Number.isInteger(fB)) {
            throw new Error("Wrong input base")
        }
        if (tB<2|| !Number.isInteger(tB)) {
            throw new Error("Wrong output base")
        }
        if (digits.length == 0 || (digits[0] == 0 && digits.length !=1)) {
            throw new Error("Input has wrong format")
        }
        let out:number[] = []
        let n:number = 0

        digits.reverse().forEach((d, i) => {
            if (d<0 || d>= fB) {
                throw new Error("Input has wrong format")
            }
            n += (d* fB**i)
        })

        while (n >0) {
            out.unshift(n%tB)
            n = Math.floor(n/tB)
        }
        if (out.length == 0) {
            out = [0]
        }
        return out
    }   
}

export default Converter
