declare function setTimeout(f: any, time: number): any;

declare namespace Mocha {
    interface IRunnable {
        retries(n: number): this;
        slow(ms: number): this;
    }
}
