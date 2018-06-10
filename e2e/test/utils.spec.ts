import { Utils } from './utils';
import { using } from './../../src/index';

describe('utils', () => {

    describe('isEmpty using', () => {
        using(null).
        using(undefined).
            it('should return true when value is null or undefined', (value: any) => {
                const result = Utils.isEmpty(value);
                expect(result).to.equal(true);
            });
    });

    describe('isEmpty cases', () => {
        using.cases(null, undefined).
            it('should return true when value is null or undefined', (value: any) => {
                const result = Utils.isEmpty(value);
                expect(result).to.equal(true);
            });
    });

});
