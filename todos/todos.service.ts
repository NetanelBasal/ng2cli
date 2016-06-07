import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
class TodosService {

  constructor(private http: Http) {
  }

}
