import { Component, EventEmitter, Input, Output, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'footer',
  template: require('./footer.component.html'),
  style: [require('./footer.component.scss')],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class FooterComponent implements OnInit {
  @Input() myProperty;
  @Output() myEvent = new EventEmitter<string>();

  constructor() {

  }

  ngOnInit() {

  }
}
