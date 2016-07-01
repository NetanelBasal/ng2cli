import {
  addProviders,
  describe,
  expect,
  inject,
  it
} from '@angular/testing/core';
import { {{name | camelCase}}Pipe } from './{{name | kebabCase}}.pipe';

describe('Pipe: {{name | camelCase}}', () => {
  beforeEach(() => {
    addProviders([{{name | camelCase}}Pipe]);
  });

  it('should transform the input', inject([{{name | camelCase}}Pipe], (pipe: {{name | camelCase}}Pipe) => {
      expect(pipe.transform(true)).toBe(null);
  }));
});
