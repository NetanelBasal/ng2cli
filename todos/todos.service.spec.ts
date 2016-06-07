import { Component } from '@angular/core';
import {
    beforeEachProviders,
    describe,
    expect,
    inject,
    fakeAsync,
    tick,
    it
} from '@angular/core/testing';
import { BaseRequestOptions, Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { TodosService } from './todos.service';

describe('Todos Service', () => {
    beforeEachProviders(() => [
        BaseRequestOptions,
        MockBackend,
        {
            provide: Http,
            useFactory: function(backend, defaultOptions) {
                return new Http(backend, defaultOptions);
            },
            deps: [MockBackend, BaseRequestOptions]
        },
        TodosService
    ]);

it('should ...',
    inject([TodosService], (service: TodosService) => {
        expect(service).toBeTruthy();
    }));
    /**
      When you are testing code that returns either a Promise or an RxJS Observable,
      you can use the fakeAsync helper to test that code as if it were synchronous.
      Promises are be fulfilled and Observables are notified immediately after you call tick()
    **/
    it('should make HTTP request',
      inject([TodosService, MockBackend], fakeAsync((todosService:TodosService, mockBackend:MockBackend) => {
        var res:Response;
        mockBackend.connections.subscribe(c => {
          expect(c.request.url).toBe('some.api.call');
          let response = new ResponseOptions({body: '[{}, {}]'});
          c.mockRespond(new Response(response));
        });
        todosService.get().subscribe(response => {
          res = response;
        });
        tick();
        expect(res.length).toBe(2);
      }))
    );
 });
