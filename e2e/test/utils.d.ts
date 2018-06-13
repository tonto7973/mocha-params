
declare namespace Mocha {
    interface IRunnable {
        retries(n: number): this;
        slow(ms: number): this;
    }
}
