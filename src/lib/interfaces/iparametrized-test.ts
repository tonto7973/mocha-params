export interface IParametrizedTest extends Mocha.ITest {
    retries(n: number): this;
    slow(n: number): this;
}
