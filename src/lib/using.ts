import { IUsing } from './interfaces/iusing';
import { wrap } from './core/wrap';

export function using<T>(arg: T): IUsing<T> {
    const runs = [[].slice.call(arguments)];

    const context = this;

    const wrapper: any = {
        it: wrap(() => runs, context, 'it'),
        xit: wrap(() => runs, context, 'xit'),
        using: function() {
            runs.push([].slice.call(arguments));
            return wrapper;
        }
    };

    return wrapper;
}
