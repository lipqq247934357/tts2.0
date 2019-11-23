// let add: (x: number, y: number) => number;
//
// interface add {
//     (x: number, y: number): number
// }
//
type Add = (x: number, y: number) => number

let addd: Add = (a, b) => a + b;

interface Lib {
    (): void;

    version: string;

    doSomething(): void;
}

let lib: Lib = (() => {
}) as Lib;
lib.version = '1';
lib.doSomething = function () {

};



