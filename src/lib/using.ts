import { IUsing } from './interfaces/iusing';
import { expectify } from './core/expectify';
import { wrap } from './core/wrap';

export function using<T>(arg: T): IUsing<T> {
    const runs = [[].slice.call(arguments)];

    const context = this;

    const wrapper: any = {
        it: wrap(() => runs, context, 'it'),
        xit: wrap(() => runs, context, 'xit'),
        using: function() {
            const args = [].slice.call(arguments),
                  n = runs[0].length;
            if (args.length !== n) {
                throw new Error(`Expecting ${n} argument${n === 1 ? '' : 's'} but got ${args.length} for using ${expectify(args)}`);
            }
            runs.push(args);
            return wrapper;
        }
    };

    return wrapper;
}
