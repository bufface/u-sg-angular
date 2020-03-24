import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(
    private viewCotnainer: ViewContainerRef,
    private templateref: TemplateRef<any>
  ) { }

  @Input('appTimes') set render(times: number) {
    this.viewCotnainer.clear()

    for (let i = 0; i < times; i++) {
      this.viewCotnainer.createEmbeddedView(this.templateref, {})
      
    }
  }

}
