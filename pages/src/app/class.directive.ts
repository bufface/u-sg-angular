import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(public element: ElementRef) {
    this.element.nativeElement.style.backgroundColor = 'orange'
  }

}
