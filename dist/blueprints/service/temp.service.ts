import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
class {{name | camelCase}}Service {

  constructor(private http: Http) {
  }

}
