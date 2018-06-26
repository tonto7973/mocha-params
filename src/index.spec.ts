describe('index', () => {

    describe('export', () => {
        const index = require('./index');
        it('should export default as a function', () => {
            expect(index).to.be.a('function');
        });
        it('should export default.cases as a function', () => {
            expect(index.cases).to.be.a('function');
        });
        it('should export using as a function', () => {
            expect(index.using).to.be.a('function');
        });
        it('should export using.cases as a function', () => {
            expect(index.using.cases).to.be.a('function');
        });
    });

    describe('global context', () => {
        beforeEach(() => {
            require.eject('./index');
            delete (global as any).self;
            delete (global as any).window;
        });
        afterEach(() => {
            delete (global as any).self;
            delete (global as any).window;
        });
        it('should use self as context when provided', () => {
            const context = {
                it: chai.spy(() => new Object()),
                xit: () => new Object()
            };
            (global as any).self = context;
            const index = require('./index');
            const using = index.using;
            using(1).it('a');
            expect(context.it).to.have.been.called();
        });
        it('should use window as context when provided', () => {
            const context = {
                xit: chai.spy(() => new Object()),
                it: () => new Object()
            };
            (global as any).window = context;
            const index = require('./index');
            const using = index.using;
            using(2).xit('b');
            expect(context.xit).to.have.been.called();
        });
    });
});
