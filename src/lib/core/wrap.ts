import { parametrify } from './parametrify';
import { type } from './type';
import { Check } from './check';

export const wrap = (getRuns: () => Array<any>, context: any, test: 'it'|'xit') => {

    if (typeof context === 'undefined' || context === null) {
        throw new TypeError('Context is undefined');
    }

    const original: Mocha.ITestDefinition = Check.isFunction(context[test],
            `Expected context.${test}() to be a [Function] but ${type(context[test])} found`);

    const parametrized: any = parametrify(getRuns, original);

    if (typeof original.only === 'function') {
        parametrized.only = parametrify(getRuns, original.only);
    }

    if (typeof original.skip === 'function') {
        parametrized.skip = parametrify(getRuns, original.skip);
    }

    return parametrized;
};
