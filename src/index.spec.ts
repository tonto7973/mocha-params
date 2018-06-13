import rewire = require('rewire');
import * as index from './index';

describe('index', () => {

    describe('export', () => {
        it('should export default as a function', () => {
            const using = index;
            expect(using).to.be.a('function');
        });
        it('should export default.cases as a function', () => {
            const using: any = index;
            expect(using.cases).to.be.a('function');
        });
        it('should export using as a function', () => {
            const using = index.using;
            expect(using).to.be.a('function');
        });
        it('should export using.cases as a function', () => {
            const using = index.using;
            expect(using.cases).to.be.a('function');
        });
    });

    describe('global context', () => {
        beforeEach(() => {
            delete global.self;
            delete global.window;
        });
        afterEach(() => {
            delete global.self;
            delete global.window;
        });
        it('should use self as context when provided', () => {
            const context = {
                it: chai.spy(() => new Object()),
                xit: () => new Object()
            };
            global.self = context;
            const rewiredIndex = rewire('./index');
            const using = rewiredIndex.using;
            using(1).it('a');
            expect(context.it).to.have.been.called();
        });
        it('should use window as context when provided', () => {
            const context = {
                xit: chai.spy(() => new Object()),
                it: () => new Object()
            };
            global.window = context;
            const rewiredIndex = rewire('./index');
            const using = rewiredIndex.using;
            using(2).xit('b');
            expect(context.xit).to.have.been.called();
        });
    });
});
