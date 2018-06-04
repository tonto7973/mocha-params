import { Check } from './check';

describe('Check', () => {

    describe('isArray', () => {
        it('should throw exception when argument is Null', () => {
            expect(() => Check.isArray(null)).to.throw('Argument 0 is not an array, got [Null] instead');
        });
        it('should throw exception when argument is Undefined', () => {
            expect(() => Check.isArray(undefined)).to.throw('Argument 0 is not an array, got [Undefined] instead');
        });
        it('should throw exception when argument is Date', () => {
            expect(() => Check.isArray(new Date())).to.throw('Argument 0 is not an array, got [Date] instead');
        });
        it('should throw exception when argument is RegExp', () => {
            expect(() => Check.isArray(/a/)).to.throw('Argument 0 is not an array, got [RegExp] instead');
        });
        it('should throw exception when argument is Symbol', () => {
            expect(() => Check.isArray(Symbol())).to.throw('Argument 0 is not an array, got [Symbol] instead');
        });
        it('should throw exception when argument is Number', () => {
            expect(() => Check.isArray(1, 776)).to.throw('Argument 776 is not an array, got [Number] instead');
        });
        it('should throw exception when argument is Boolean', () => {
            expect(() => Check.isArray(true)).to.throw('Argument 0 is not an array, got [Boolean] instead');
        });
        it('should throw exception when argument is String', () => {
            expect(() => Check.isArray('s', 1)).to.throw('Argument 1 is not an array, got [String] instead');
        });
        it('should throw exception when argument is Object', () => {
            expect(() => Check.isArray({})).to.throw('Argument 0 is not an array, got [Object] instead');
        });
        it('should throw exception when argument is Function', () => {
            expect(() => Check.isArray(() => 0)).to.throw('Argument 0 is not an array, got [Function] instead');
        });
        it('should not throw exception when argument is Array', () => {
            expect(() => Check.isArray([])).to.not.throw();
        });
        it('should return input argument', () => {
            const input = [1];
            const result = Check.isArray(input);
            expect(result).to.equal(input);
        });
    });

    describe('isFunction', () => {
        it('should throw exception when argument is Null', () => {
            expect(() => Check.isFunction(null)).to.throw('Argument 0 is not a function, got [Null] instead');
        });
        it('should throw exception when argument is Undefined', () => {
            expect(() => Check.isFunction(undefined)).to.throw('Argument 0 is not a function, got [Undefined] instead');
        });
        it('should throw exception when argument is Date', () => {
            expect(() => Check.isFunction(new Date())).to.throw('Argument 0 is not a function, got [Date] instead');
        });
        it('should throw exception when argument is RegExp', () => {
            expect(() => Check.isFunction(/a/)).to.throw('Argument 0 is not a function, got [RegExp] instead');
        });
        it('should throw exception when argument is Symbol', () => {
            expect(() => Check.isFunction(Symbol())).to.throw('Argument 0 is not a function, got [Symbol] instead');
        });
        it('should throw exception when argument is Number', () => {
            expect(() => Check.isFunction(1, 325)).to.throw('Argument 325 is not a function, got [Number] instead');
        });
        it('should throw exception when argument is Boolean', () => {
            expect(() => Check.isFunction(true)).to.throw('Argument 0 is not a function, got [Boolean] instead');
        });
        it('should throw exception when argument is String', () => {
            expect(() => Check.isFunction('s', 1)).to.throw('Argument 1 is not a function, got [String] instead');
        });
        it('should throw exception when argument is Object', () => {
            expect(() => Check.isFunction({})).to.throw('Argument 0 is not a function, got [Object] instead');
        });
        it('should throw exception when argument is Array', () => {
            expect(() => Check.isFunction([])).to.throw('Argument 0 is not a function, got [Array] instead');
        });
        it('should not throw exception when argument is Function', () => {
            expect(() => Check.isFunction(() => 0)).to.not.throw();
        });
        it('should return input argument', () => {
            const input = () => 0;
            const result = Check.isFunction(input);
            expect(result).to.equal(input);
        });
    });

});
