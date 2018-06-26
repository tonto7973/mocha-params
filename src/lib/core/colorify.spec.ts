
describe('colorify', () => {

    describe('browser', () => {
        let savedProcessBrowser: boolean;
        beforeEach(() => {
            delete require.cache[require.resolve('./colorify')];
            savedProcessBrowser = (process as any).browser;
            (process as any).browser = true;
        });
        afterEach(() => {
            (process as any).browser = savedProcessBrowser;
        });
        it('should not modify string when process is a browser', () => {
            const colorify = require('./colorify').colorify;
            const result = colorify('abc');
            expect(result).to.equal('abc');
        });
    });

    describe('node', () => {
        const fakeMagenta = chai.spy();
        let savedProcessBrowser: boolean;
        beforeEach(() => {
            delete require.cache[require.resolve('./colorify')];
            savedProcessBrowser = (process as any).browser;
            (process as any).browser = false;
            mock('chalk', {
                magenta: fakeMagenta
            });
        });
        afterEach(() => {
            (process as any).browser = savedProcessBrowser;
            mock.stop('chalk');
        });
        it('chould call chalk.magenta when node detected', async () => {
            const colorify = require('./colorify').colorify;
            colorify('abc');
            expect(fakeMagenta).to.have.been.called.with.exactly('abc');
        });
    });

});
