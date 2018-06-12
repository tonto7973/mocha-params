/// <reference path="spec.d.ts" />
import { Utils } from './utils';
import { using } from './../../src/index';

describe('utils', () => {

    describe('isEmpty using', () => {
        using(null).
        using(undefined).
            it('should return true when value is null or undefined', value => {
                const result = Utils.isEmpty(value);
                expect(result).to.equal(true);
            });
    });

    describe('isEmpty cases', () => {
        using.cases(null, undefined).
            it('should return true when value is null or undefined', value => {
                const result = Utils.isEmpty(value);
                expect(result).to.equal(true);
            });
    });

    describe('smoke tests', () => {
        using(null).
        using(undefined).
            it('should check if argument is null or undefined', arg => {
                expect(arg === null || arg === undefined).to.equal(true);
            });
        // done
        using(1).
        using(2).
        using(3).
            it('should run done as the last argument', (arg, done) => {
                arg = Math.random();
                expect(done).to.be.a('function');
                done();
            });
        // pending
        using('blue').
            it('should show pending placeholder');
        // skip
        using(null).
        using(undefined).
            it.skip('should skip when it.skip used', sp => {
                expect(sp).to.not.be.a('number');
            });
        using('one').
        using(false).
            it('should skip when this.skip used', function (sp) {
                this.skip();
                const result = sp !== true;
                expect(result).to.equal(false);
            });
        using(1).
        using('a')
            .xit('should skip when using.xit used', p => {
                expect(p).to.equal(false);
            });
        // retries
        let retryA = 1;
        using(2.53).
        using(3.14).
        using(7.1).
            it('should retry with it.retries', num => {
                retryA += num;
                expect(retryA).to.be.greaterThan(5);
            })
            .retries(4);
        let retryB = 1;
        using(1.53).
        using(7.14).
            it('should retry with this.retries', function(num) {
                this.retries(4);
                retryB += num;
                expect(retryB).to.be.greaterThan(3);
            });
        // slow
        using(20).
        using(50).
            it('should define slow with it.slow', (tm, done) => {
                setTimeout(() => {
                    expect(done).to.be.a('function');
                    done();
                }, tm);
            }).slow(10);
        using(15).
        using(25).
            it('should define slow with this.slow', function(tm, done) {
                this.slow(10);
                setTimeout(() => {
                    expect(done).to.be.a('function');
                    done();
                }, tm);
            });
        // timeout
        using(80).
        using(40).
            it('should expose timeout in async function', (tm, done) => {
                setTimeout(() => {
                    expect(done).to.be.a('function');
                    done();
                }, tm);
            }).timeout(160);
        // multiple arguments
        using(10, 20, 30).
        using(true, /w/, Infinity).
        using(false, /a/, -Infinity).
        using(null, /z/, -NaN).
            it('anca', (arg1, arg2, arg3) => {
                expect(arg1).to.not.equal(null);
            });
    });

});
