import { ActionReducer, Action } from '@ngrx/store';
import * as {{name | camelCaseOnly}}Actions from './{{name | kebabCase}}.actions';

export const {{name | camelCaseOnly}}Reducer: ActionReducer<type> = (state: type = [], action: Action) => {
    switch (action.type) {
      {% for action in actions %}case {{name | camelCaseOnly}}Actions.{{action | upperCase}}
        return [...state, action.payload];
      {% endfor %}default:
        return state;
    }
}
