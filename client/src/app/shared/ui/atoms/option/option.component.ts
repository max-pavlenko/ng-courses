import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Option} from './option.types';

@Component({
  selector: 'app-option',
  standalone: true,
  imports: [],
  templateUrl: './option.component.html',
  styleUrl: './option.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OptionComponent<T extends Option> {
   @Input({required: true}) option!: T;
}
