function Calculator(base) {
    this.current = base
    this.add = function (num) {
        if (typeof num === 'number'){
                this.current += num
            }
    }
    this.sub = function (num) {
        if (typeof num === 'number'){
            this.current -= num
        }
    }

    this.set = function (num) {
        if (typeof num === 'number'){
            this.current = num
        }
    }
    this.get = function () {
        return this.current
    }
    this.reset = function () {
        this.current = base
    }
}

const calc = new Calculator(100);


calc.add(10); // 110 - это текущее значение base
calc.add(10);
calc.sub(40);
console.log(calc.get()) // 80

calc.set(20);
calc.add(10);
calc.add(10);
calc.add('qwe'); // NaN и значение 40 не менять


console.log(calc.get()) // 40


calc.reset();
console.log(calc.get()) // 100

// function createCalculator(base) {
//     let current = base
//     return {
//         add: (num) => {
//             if (typeof num === 'number'){
//                 current += num
//             }
//         },
//         sub: (num) => {
//             if (typeof num === 'number'){
//                 current -= num
//             }
//         },
//         set: (num) => {
//             if (typeof num === 'number'){
//                 current = num
//             }
//         },
//         get: () => {
//             return current
//         },
//         reset: () => {
//             current = base
//         }
//     }
//
// }

