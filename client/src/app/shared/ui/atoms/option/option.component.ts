import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Option} from './option.types';

@Component({
  selector: 'app-option',
  standalone: true,
  templateUrl: './option.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OptionComponent<T extends Option> {
   @Input({required: true}) option!: T;
}
