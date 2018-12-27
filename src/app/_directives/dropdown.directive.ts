import { Directive, HostListener, HostBinding } from '@angular/core';
import { defineNgModule } from '@angular/core/src/render3';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
  constructor() { }

}
