import {
    beforeEachProviders,
    inject,
    fakeAsync,
    tick
} from '@angular/testing/core';
import { BaseRequestOptions, Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { {{name | camelCase }}Service } from './{{name | kebabCase}}.service';

describe('{{name | camelCase}} Service', () => {
  beforeEachProviders(() =>
    [
        BaseRequestOptions,
        MockBackend,
        {
            provide: Http,
            useFactory: function(backend, defaultOptions) {
                return new Http(backend, defaultOptions);
            },
            deps: [MockBackend, BaseRequestOptions]
        },
        {{name | camelCase }}Service
    ];
  );


it('should ...',
    inject([{{name | camelCase }}Service], ({{name | camelCaseOnly }}Service: {{name | camelCase}}Service) => {
        expect({{name | camelCaseOnly }}Service).toBeTruthy();
    }));
    /**
      When you are testing code that returns either a Promise or an RxJS Observable,
      you can use the fakeAsync helper to test that code as if it were synchronous.
      Promises are be fulfilled and Observables are notified immediately after you call tick()
    **/
    it('should make HTTP request',
      inject([{{name | camelCase }}Service, MockBackend], fakeAsync(({{name | camelCaseOnly }}Service:{{name | camelCase }}Service, mockBackend:MockBackend) => {
        var res:Response;
        mockBackend.connections.subscribe(c => {
          expect(c.request.url).toBe('some.api.call');
          let response = new ResponseOptions({body: '[{}, {}]'});
          c.mockRespond(new Response(response));
        });
        {{name | camelCaseOnly }}Service.get().subscribe(response => {
          res = response;
        });
        tick();
        expect(res.length).toBe(2);
      }))
    );
 });
