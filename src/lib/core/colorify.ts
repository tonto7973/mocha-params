declare const process: any;
declare const require: any;

export const colorify = (() => {
    const param = 'param';
    const isBrowser = typeof process !== 'undefined' && process.browser;
    const mocha = isBrowser ? null : require('mocha');
    const base = mocha && mocha.reporters && mocha.reporters.Base;

    if (base) {
        base.colors[param] = 35;
    }

    return (str: string): string => base ? base.color(param, str) : str;
})();
