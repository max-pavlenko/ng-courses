import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass, NgOptimizedImage} from '@angular/common';
import {OptionComponent} from '../option/option.component';
import {Option} from '../option/option.types';
import {ClickOutsideDirective} from '../../../directives/click-outside.directive';

@Component({
   selector: 'app-dropdown',
   standalone: true,
   imports: [
      NgOptimizedImage,
      OptionComponent,
      ClickOutsideDirective,
      NgClass
   ],
   templateUrl: './dropdown.component.html',
   styleUrl: './dropdown.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent<T extends Option> { // this ok , but can be substituted by customFormControl
   @Output() selectedOption = new EventEmitter<T>();
   @Input({required: true}) options: T[] = [];
   @Input({required: true}) selectedItem!: T;
   isOpened = false;

   onSelect(option: T): void {
      if (option.value === this.selectedItem?.value) return;
      this.selectedItem = option;
      this.selectedOption.emit(option);
      this.toggle();
   }

   toggle(): void {
      this.isOpened = !this.isOpened;
   }
}
