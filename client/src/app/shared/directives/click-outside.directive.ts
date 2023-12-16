import {Directive, ElementRef, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
  standalone: true
})
export class ClickOutsideDirective {
   @Output() appClickOutside = new EventEmitter();

   constructor(private el: ElementRef<HTMLElement>) {}

   @HostListener('document:click', ['$event.target'])
   public onClick(target: Node): void {
      const isClickedInside = this.el.nativeElement.contains(target);
      if (!isClickedInside) {
         this.appClickOutside.emit();
      }
   }
}
