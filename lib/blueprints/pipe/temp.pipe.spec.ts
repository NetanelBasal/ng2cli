import {
  beforeEachProviders,
  describe,
  expect,
  inject,
  it
} from '@angular/core/testing';
import { {{name | camelCase}}Pipe } from './{{name | kebabCase}}.pipe';

describe('Pipe: {{name | camelCase}}', () => {
  beforeEachProviders(() => [{{name | camelCase}}Pipe]);

  it('should transform the input', inject([{{name | camelCase}}Pipe], (pipe: {{name | camelCase}}Pipe) => {
      expect(pipe.transform(true)).toBe(null);
  }));
});
