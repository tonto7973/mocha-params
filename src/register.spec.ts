import rewire = require('rewire');

declare function using<T>(arg: T): Mocha.IUsingTestWrapper<T>;
declare const self: any;
declare const window: any;
declare namespace using {
    function cases(...arg: Array<any[]>): Mocha.IAnyCasesTestWrapper;
}

describe('register', () => {

    describe('global context', () => {
        beforeEach(() => {
            delete global.self;
            delete global.window;
        });
        afterEach(() => {
            delete global.self;
            delete global.window;
        });
        it('should define using when global context defined', () => {
            rewire('./register');
            expect(using).to.be.a('function');
        });
        it('should define using.cases when global context defined', () => {
            rewire('./register');
            expect(using.cases).to.be.a('function');
        });
        it('should define using when self context defined', () => {
            global.self = global;
            rewire('./register');
            expect(self.using).to.be.a('function');
        });
        it('should define using.cases when self context defined', () => {
            global.self = global;
            rewire('./register');
            expect(self.using.cases).to.be.a('function');
        });
        it('should define using when window context defined', () => {
            global.window = global;
            rewire('./register');
            expect(window.using).to.be.a('function');
        });
        it('should define using.cases when window context defined', () => {
            global.window = global;
            rewire('./register');
            expect(window.using.cases).to.be.a('function');
        });
    });

});
