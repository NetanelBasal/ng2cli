import { Component } from '@angular/core';
import {
    beforeEachProviders,
    describe,
    expect,
    inject,
    it
} from '@angular/core/testing';
import { BaseRequestOptions, Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { {{name | camelCase }}Service } from './{{name | kebabCase}}.service';

describe('{{name | camelCase}} Service', () => {
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
        {{name | camelCase }}Service
    ]);

it('should ...',
    inject([{{name | camelCase }}Service], (service: {{name | camelCase}}Service) => {
        expect(service).toBeTruthy();
    }));
 });
