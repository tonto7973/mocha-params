
const type = (arg: any) => Object.prototype.toString.call(arg).replace(/^\[object\s+/i, '[');

export class Check {

    static isArray<T>(arg: T, position?: number): T {
        if (!Array.isArray(arg)) {
            throw new Error(`Argument ${position || 0} is not an array, got ${type(arg)} instead`);
        }
        return arg;
    }

    static isFunction<T>(arg: T, position?: number): T {
        if (!(typeof arg === 'function')) {
            throw new Error(`Argument ${position || 0} is not a function, got ${type(arg)} instead`);
        }
        return arg;
    }

}
