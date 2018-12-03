import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding } from '@angular/core';
import { MockNgModuleResolver } from '@angular/compiler/testing';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor = 'transparent';
  ngOnInit(): void {
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color', 'blue');
    this.backgroundColor = 'blue';
  }

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }
  @HostListener('mouseenter') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = 'transparent';
  }
}
