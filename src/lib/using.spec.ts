import { IUsing } from './interfaces/iusing';
import { using as $using } from './using';

const context = typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : { };
const using: <T>(arg: T) => IUsing<T> = $using.bind(context);

describe('using', () => {

    const runItTestCase = (message: string, fn: () => IUsing<any>) => {
        const results: Array<{
            expectation: string,
            assertion: (done?: MochaDone) => Array<any>,
            timeout?: number,
            args?: Array<any>
        }> = [];
        const originalIt = context.it;
        try {
            context.it = function(expectation: string, assertion: (done?: MochaDone) => Array<any>, timeout?: number) {
                results.push({
                    expectation: expectation,
                    assertion: assertion,
                    timeout: timeout,
                    args: assertion()
                });
            };
            fn().it(message, function() {
                return [].slice.call(arguments);
            });
        }
        finally {
            context.it = originalIt;
        }
        return results;
    };

    describe('wrapper', () => {
        it('should return wrapper around it()', () => {
            const test = using(1);
            expect(test.it).to.be.a('function');
        });
        it('should return wrapper around it.only()', () => {
            const test = using(1);
            expect(test.it.only).to.be.a('function');
        });
        it('should return wrapper around it.skip()', () => {
            const test = using(1);
            expect(test.it.skip).to.be.a('function');
        });
        it('should return wrapper around xit()', () => {
            const test = using(2);
            expect(test.xit).to.be.a('function');
        });
        it('should return wrapper with nested using()', () => {
            const test = using(2);
            expect(test.using).to.be.a('function');
        });
        it('should return the same nested wrapper', () => {
            const test = using(2);
            expect(test.using(7)).to.equal(test);
        });
    });

    describe('execution', () => {
        it('should execute it() the number of times using is declared', function() {
            const result = runItTestCase('any', () => using('a').using('b').using('c').using(1));
            expect(result.length).to.equal(4);
        });
        it('should execute it() with proper arguments', function() {
            const result = runItTestCase('any', () => using('z').using(4).using([]))
                .map(r => r.args && r.args[0]);
            expect(result).to.deep.equal(['z', 4, []]);
        });
    });

    describe('test', () => {
        using(null).
        using(undefined).
            it('should check if argument is null or undefined', arg => {
                expect(arg === null || arg === undefined).to.equal(true);
            });
    });

    describe('async', () => {
        using(1).
        using(2).
        using('string#').
            it('should run done as the last argument', (arg, done) => {
                expect(done).to.be.a('function');
                done();
            });
    });

});
