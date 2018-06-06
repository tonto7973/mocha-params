import { parametrify } from './parametrify';

describe('parametrify', () => {

    it('should throw error when argument 0 (getArgs) is not function', () => {
        const getArgs: any = undefined;
        const original: any = () => 0;
        expect(() => parametrify(getArgs, original)).to.throw();
    });

    it('should throw error when argument 1 (original) is not function', () => {
        const getArgs = () => [];
        const original: any = 1;
        expect(() => parametrify(getArgs, original)).to.throw();
    });

    it('should return function', () => {
        const getArgs = () => [];
        const original: any = () => 0;
        const pit = parametrify(getArgs, original);
        expect(pit).to.be.a('function');
    });

    describe('returned function', () => {
        it('should throw when argument 0 (getArgs) does not return array', () => {
            const getArgs: any = () => 1;
            const original: any = () => 0;
            const pit = parametrify(getArgs, original);
            expect(() => pit('foo')).to.throw();
        });
        it('should return undefined when argument 0 (getArgs) is empty', () => {
            const getArgs: any = () => [];
            const original: any = () => 0;
            const pit = parametrify(getArgs, original);
            const result = pit('foo');
            expect(result).to.equal(undefined);
        });
        it('should return clone of first runnable with correct expectation', () => {
            class DummyRunnable {
                constructor(private expectation: string, private assertion?: any) { }
            }
            const testRunnable = new DummyRunnable('');
            const getArgs: any = () => [['a']];
            const original: any = () => testRunnable;
            const pit = parametrify(getArgs, original);
            const result = pit('foo');
            expect(result).to.not.equal(testRunnable);
            expect(result).to.deep.equal(new DummyRunnable('foo'));
        });
        it('should resolve timeout() when specified in runnable', () => {
            let totalTimeout = 0;
            class DummyRunnable {
                constructor(private expectation: string, private assertion?: any) { }
                timeout(n: number) { totalTimeout += n; }
            }
            const getArgs: any = () => [['a'], ['b']];
            const original: any = () => new DummyRunnable('');
            const pit = parametrify(getArgs, original);
            pit('x').timeout(4);
            expect(totalTimeout).to.equal(8);
        });
        it('should resolve retries() when specified in runnable', () => {
            let totalRetries = 0;
            class DummyRunnable {
                constructor(private expectation: string, private assertion?: any) { }
                retries(n: number) { totalRetries += n; }
            }
            const getArgs: any = () => [['a'], ['b']];
            const original: any = () => new DummyRunnable('');
            const pit = parametrify(getArgs, original);
            pit('x').retries(2);
            expect(totalRetries).to.equal(4);
        });
        it('should resolve slow() when specified in runnable', () => {
            const totalSlow: number[] = [];
            class DummyRunnable {
                constructor(private expectation: string, private assertion?: any) { }
                slow(n: number) { totalSlow.push(n); }
            }
            const getArgs: any = () => [['a'], ['b'], ['c']];
            const original: any = () => new DummyRunnable('');
            const pit = parametrify(getArgs, original);
            pit('x').slow(25);
            expect(totalSlow).to.deep.equal([25, 25, 25]);
        });
        it('should resolve async runnable', () => {
            class DummyRunnable {
                constructor(private expectation: string, private assertion?: any) { }
                async = 1;
            }
            const getArgs: any = () => [[1, true], [2, false], [8, null], [9, undefined]];
            const original: any = () => new DummyRunnable('');
            const pit = parametrify(getArgs, original);
            const result = pit('y', ((n: number, t: boolean) => 0) as any);
            expect({async: result.async, sync: result.sync}).to.deep.equal({async: 1, sync: false});
        });
        it('should resolve parent, ctx and file of the first runnable', () => {
            let testParent = 0, testCtx = 1, testFile = 2;
            class DummyRunnable {
                constructor(private expectation: string, private assertion?: any) { }
                parent = testParent++;
                ctx = testCtx++;
                file = testFile++;
            }
            const getArgs: any = () => [[true], [false], [0]];
            const original: any = () => new DummyRunnable('');
            const pit = parametrify(getArgs, original);
            const result = pit('z');
            expect({parent: result.parent, ctx: result.ctx, file: result.file}).to.deep.equal({parent: 0, ctx: 1, file: 2});
        });
        it('should call original test definition with modified expectation', () => {
            class DummyRunnable {
                constructor(public expectation: string, public assertion?: any) { }
            }
            const getArgs: any = () => [[0]];
            const original: any = (expectation: string, assertion?: any) => new DummyRunnable(expectation, assertion);
            const spy = chai.spy(original);
            const pit = parametrify(getArgs, spy);
            const result = pit('message');
            expect(spy).to.have.been.called.once.with('message \x1b[35m[0]');
        });
        it('should call original test definition with unmodified assertion when not a function', () => {
            class DummyRunnable {
                constructor(public expectation: string, public assertion?: any) { }
            }
            const getArgs: any = () => [[true]];
            const original: any = (expectation: string, assertion?: any) => new DummyRunnable(expectation, assertion);
            const spy = chai.spy(original);
            const pit = parametrify(getArgs, spy);
            const result = pit('w', 32 as any);
            expect(spy).to.have.been.called.once.with('w \x1b[35m[true]', 32 as any);
        });
        it('should call original test definition with parametrized assertion', () => {
            class DummyRunnable {
                constructor(public expectation: string, public assertion?: any) { }
            }
            const getArgs: any = () => [[null], [false], [0]];
            const original: any = (expectation: string, assertion?: any) => {
                assertion();
                return new DummyRunnable(expectation, assertion);
            };
            const result: any[] = [];
            const parametrizedAssertion = (arg: any) => {
                result.push(arg);
            };
            const pit = parametrify(getArgs, original);
            pit('w', parametrizedAssertion as any);
            expect(result).to.deep.equal([null, false, 0]);
        });
        it('should call original test definition with parametrized assertion and done function', () => {
            class DummyRunnable {
                constructor(public expectation: string, public assertion?: any) { }
            }
            const getArgs: any = () => [[null], [false], [0], [undefined]];
            const doneFn = chai.spy(() => 0);
            const original: any = (expectation: string, assertion?: any) => {
                assertion(doneFn);
                return new DummyRunnable(expectation, assertion);
            };
            const parametrizedAssertion = (arg: any, done: any) => {
                done();
            };
            const pit = parametrify(getArgs, original);
            pit('w', parametrizedAssertion as any);
            expect(doneFn).to.have.been.called.exactly(4);
        });
    });

});
