import { Component, EventEmitter, Input, Output, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: '{{name | kebabCase}}',
  template: require('./{{name}}.component.html'),
  style: require('./{{name}}.component.scss'),
  providers: [],
  directives: [],
  pipes: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class {{name | camelCase}}Component implements OnInit {
  @Input() myProperty;
  @Output() myEvent = new EventEmitter<string>();

  constructor() {

  }

  ngOnInit() {

  }
}
