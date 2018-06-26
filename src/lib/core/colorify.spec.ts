
describe('colorify', () => {

    describe('browser', () => {
        let savedProcessBrowser: boolean;
        beforeEach(() => {
            savedProcessBrowser = (process as any).browser;
            (process as any).browser = true;
        });
        afterEach(() => {
            (process as any).browser = savedProcessBrowser;
        });
        it('should not modify string when process is a browser', () => {
            const colorify = mock.reRequire('./colorify').colorify;
            const result = colorify('abc');
            expect(result).to.equal('abc');
        });
    });

    describe('node', () => {
        const fakeMagenta = chai.spy();
        let savedProcessBrowser: boolean;
        beforeEach(() => {
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
            const colorify = mock.reRequire('./colorify').colorify;
            colorify('abc');
            expect(fakeMagenta).to.have.been.called.with.exactly('abc');
        });
    });

});
