describe('colorify', () => {

    describe('browser', () => {
        let savedProcessBrowser: boolean;
        beforeEach(() => {
            delete require.cache[require.resolve('./colorify')];
            savedProcessBrowser = process.browser;
            process.browser = true;
        });
        afterEach(() => {
            process.browser = savedProcessBrowser;
        });
        it('should not modify string when process is a browser', () => {
            const colorify = require('./colorify').colorify;
            const result = colorify('abc');
            expect(result).to.equal('abc');
        });
    });

    describe('node', () => {
        let cachedMochaExports: any;
        let savedProcessBrowser: boolean;
        let fakeMocha: any;
        beforeEach(() => {
            delete require.cache[require.resolve('./colorify')];
            fakeMocha = {
                reporters: {
                    Base: {
                        colors: {},
                        color: chai.spy((s: string) => s.toUpperCase())
                    }
                }
            };
            cachedMochaExports = require.cache[require.resolve('mocha')].exports;
            require.cache[require.resolve('mocha')].exports = fakeMocha;
            savedProcessBrowser = process.browser;
            process.browser = false;
        });
        afterEach(() => {
            process.browser = savedProcessBrowser;
            require.cache[require.resolve('mocha')].exports = cachedMochaExports;
        });
        it('should not colorify when reporters not exported', () => {
            delete fakeMocha.reporters;
            const colorify = require('./colorify').colorify;
            const result = colorify('abc');
            expect(result).to.equal('abc');
        });
        it('should not colorify when Base reporter not exported', () => {
            delete fakeMocha.reporters.Base;
            const colorify = require('./colorify').colorify;
            const result = colorify('abc');
            expect(result).to.equal('abc');
        });
        it('should set color when Base reporter exported', () => {
            const colorify = require('./colorify').colorify;
            colorify('abc');
            expect(fakeMocha.reporters.Base.colors['param']).to.equal(35);
        });
        it('should call Base reporter color() when Base reporter exported', () => {
            const colorify = require('./colorify').colorify;
            colorify('abc');
            expect(fakeMocha.reporters.Base.color).to.have.been.called.with.exactly('param', 'abc');
        });
    });

});
