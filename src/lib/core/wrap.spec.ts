import { wrap } from './wrap';

describe('wrap', () => {

    it('should throw error when context is undefined', () => {
        const getRuns = () => [];
        const context = undefined;
        expect(() => wrap(getRuns, context, 'it')).to.throw('Context is undefined');
    });

    it('should throw error when context is null', () => {
        const getRuns = () => [];
        const context = null;
        expect(() => wrap(getRuns, context, 'it')).to.throw('Context is undefined');
    });

    it('should throw error when context.it() not defined', () => {
        const getRuns = () => [];
        const context = false;
        expect(() => wrap(getRuns, context, 'it')).to.throw(`Expected context.it() to be a [Function] but [Undefined] found`);
    });

    it('should throw error when context.it() not function', () => {
        const getRuns = () => [];
        const context = {
            it: 1
        };
        expect(() => wrap(getRuns, context, 'it')).to.throw(`Expected context.it() to be a [Function] but [Number] found`);
    });

    it('should return parametrized context.it() as function', () => {
        const getRuns = () => [];
        const context = {
            it: () => new Object()
        };
        const pit = wrap(getRuns, context, 'it');
        expect(pit).to.be.a('function');
    });

    it('should return parametrized context.it.only() as function when only is function', () => {
        const getRuns = () => [];
        const context: { it: any } = {
            it: () => new Object()
        };
        context.it.only = () => new Object();
        const pit = wrap(getRuns, context, 'it');
        expect(pit.only).to.be.a('function');
    });

    it('should not return parametrized context.it.only() when only is not function', () => {
        const getRuns = () => [];
        const context: { it: any } = {
            it: () => new Object()
        };
        context.it.only = 1;
        const pit = wrap(getRuns, context, 'it');
        expect(pit.only).to.equal(undefined);
    });

    it('should return parametrized context.it.skip() as function when skip is function', () => {
        const getRuns = () => [];
        const context: { it: any } = {
            it: () => new Object()
        };
        context.it.skip = () => new Object();
        const pit = wrap(getRuns, context, 'it');
        expect(pit.skip).to.be.a('function');
    });

    it('should not return parametrized context.it.skip() when skip is not function', () => {
        const getRuns = () => [];
        const context: { it: any } = {
            it: () => new Object()
        };
        context.it.skip = 1;
        const pit = wrap(getRuns, context, 'it');
        expect(pit.skip).to.equal(undefined);
    });

    it('should return parametrized context.it() using parametrify (sanity check)', () => {
        const result: { expectation?: string, arg?: any } = { };
        const getRuns = () => [[1]];
        const context = {
            it: (expectation: string, assertion?: any) => {
                result.expectation = expectation.replace(/\x1b\[[0-9]+m/g, '');
                assertion();
                return new Object();
            }
        };
        const ast = (arg: any) => { result.arg = arg; };
        const pit = wrap(getRuns, context, 'it');
        pit('ecspcs', ast);
        expect(result).to.deep.equal({
            expectation: 'ecspcs [1]',
            arg: 1
        });
    });

});
