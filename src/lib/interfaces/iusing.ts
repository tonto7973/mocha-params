import { IParametrizedTestDefinition } from './iparametrized-test-definition';
import { IPendingTestDefinition } from './ipending-test-definition';

export interface IUsing<T> {
    it: IParametrizedTestDefinition<T>;
    xit: IPendingTestDefinition<T>;
    using<V>(arg: T | V): IUsing<T | V>;
}
