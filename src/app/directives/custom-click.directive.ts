import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[customClick]'
})
export class CustomClickDirective {
  @Output() customClick = new EventEmitter<string>();

  @HostListener('click') click () {
    this.customClick.emit('Click!');
  }
}
