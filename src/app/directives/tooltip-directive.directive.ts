import {
  Directive,
  ElementRef,
  Renderer2,
  Input,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appTooltipDirective]',
})
export class TooltipDirectiveDirective {
  @Input() toolTip: string = 'hi';

  elToolTip: any;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter')
  onMouseEnter() {
    if (!this.elToolTip) {
      console.log('mouse enter');
      this.showHint();
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (this.elToolTip) {
      console.log('mouse leave');
      this.removeHint();
    }
  }

  ngOnInit() { }

  removeHint() {
    this.renderer.removeClass(this.elToolTip, 'tooltip');
    this.renderer.removeChild(document.body, this.elToolTip);
    this.elToolTip = null;
  }

  showHint() {
    this.elToolTip = this.renderer.createElement('span');
    const text = this.renderer.createText(this.toolTip);
    this.renderer.appendChild(this.elToolTip, text);

    this.renderer.appendChild(document.body, this.elToolTip);
    this.renderer.addClass(this.elToolTip, 'tooltip');

    let hostPos = this.elementRef.nativeElement.getBoundingClientRect();
    let tooltipPos = this.elToolTip.getBoundingClientRect();

    let top = hostPos.bottom + 10;
    let left = hostPos.left;

    this.renderer.setStyle(this.elToolTip, 'top', `${top}px`);
    this.renderer.setStyle(this.elToolTip, 'left', `${left}px`);
  }
}
