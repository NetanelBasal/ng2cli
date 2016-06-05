import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: '{{name | camelCaseOnly}}'})

export class {{name | camelCase}}Pipe implements PipeTransform {

  transform( value: any, args?: any): any {
    return null;
  }

}
