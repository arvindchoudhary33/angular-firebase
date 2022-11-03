import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[customClass]',
})
export class CustomDirective implements OnInit {
  @Input() customClass?: string;
  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.el.nativeElement.classList.add(this.customClass);
  }
}
