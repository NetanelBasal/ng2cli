import { {{name | camelCase}}Pipe } from './{{name | kebabCase}}.pipe';

describe('Pipe: {{name | camelCase}}', () => {
  let pipe: {{name | camelCase}};
  
  beforeEach(() => {
    pipe = new {{name | camelCase}}();
  });

  it('transforms "abc" to "ABC"', () => {
    expect(pipe.transform('abc')).toEqual('ABC');
  });

});
