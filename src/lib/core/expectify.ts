import { Check } from './check';

export const expectify = (args: Array<any>) => {
    Check.isArray(args);
    return '[' + args.reduce((previous, current) => {
        if (current === undefined) {
            current = 'undefined';
        } else if (typeof current === 'function') {
            current = '\u0192'; // ƒ
        } else {
            current = JSON.stringify(current);
        }
        return previous + (previous !== '' ? ', ' : '') + current;
    }, '') + ']';
};
