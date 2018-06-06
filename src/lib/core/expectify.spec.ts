import { expectify } from './expectify';

describe('expectify', () => {

    it('should throw error when argument 0 (args) is not array', () => {
        const arg: any = undefined;
        expect(() => expectify(arg)).to.throw();
    });

    it('should resolve undefined as a string', () => {
        const arg = [undefined];
        const result = expectify(arg);
        expect(result).to.equal('[undefined]');
    });

    it('should resolve function as a special character', () => {
        const arg = [() => 0];
        const result = expectify(arg);
        expect(result).to.equal('[\u0192]');
    });

    it('should resolve any arguments', () => {
        const arg = ['x', 1, true, false, null, undefined, {}, [], () => 1, new Date('2018-03-01T20:03:13.999Z')];
        const result = expectify(arg);
        expect(result).to.equal('["x", 1, true, false, null, undefined, {}, [], \u0192, "2018-03-01T20:03:13.999Z"]');
    });

});
