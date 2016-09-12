import * as {{name | camelCaseOnly}}Actions from './{{name | kebabCase}}.actions';
import { {{name | camelCaseOnly}} } from "./{{name | kebabCase}}";

describe('The {{name}} reducer', () => {
    it('should return current state when x action is dispatched', () => {
        const actual = {{name | camelCaseOnly}}(0, {type: {{name | camelCaseOnly}}Actions.x});
        const expected = 0;
        expect(actual).toBe(expected);
    });
});
