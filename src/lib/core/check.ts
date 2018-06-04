
const type = (arg: any) => Object.prototype.toString.call(arg).replace(/^\[object\s+/i, '[');

export class Check {

    static isArray(arg: any, position?: number) {
        if (!Array.isArray(arg)) {
            throw new Error(`Argument ${position || 0} is not an array, got ${type(arg)} instead`);
        }
    }

    static isFunction(arg: any, position?: number) {
        if (!(typeof arg === 'function')) {
            throw new Error(`Argument ${position || 0} is not a function, got ${type(arg)} instead`);
        }
    }

}
