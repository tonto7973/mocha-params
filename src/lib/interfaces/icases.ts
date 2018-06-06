import { IParametrizedTestDefinition } from './iparametrized-test-definition';
import { IPendingTestDefinition } from './ipending-test-definition';

export interface ICases<T> {
    it: IParametrizedTestDefinition<T>;
    xit: IPendingTestDefinition<T>;
}
