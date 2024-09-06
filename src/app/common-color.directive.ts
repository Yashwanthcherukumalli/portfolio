import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCommonColor]'
})
export class CommonColorDirective implements OnInit {
  @Input() appCommonColor: string = 'black';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.applyColor(this.appCommonColor);
  }

  private applyColor(color: string) {
    const colorValue = color || 'blue'; // default color
    this.renderer.setStyle(this.el.nativeElement, 'color', colorValue);
  }
}
