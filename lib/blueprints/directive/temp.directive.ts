import { Directive, ElementRef, Input, HostListener, HostBinding, Renderer } from '@angular/core';

@Directive({
  selector: '[{{name | camelCaseOnly}}]'
})

export class {{name | camelCase}}Directive {

  constructor(el: ElementRef, renderer: Renderer) {
     //el.nativeElement.style.backgroundColor = 'yellow';
    // renderer.setElementStyle(element.nativeElement, 'fontSize', 'x-large');
  }

  @HostBinding('attr.role') role = 'button';

  @HostListener('mouseenter')
  onMouseEnter() {
    
  }

}
