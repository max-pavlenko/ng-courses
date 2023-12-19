import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-transparent-button',
  standalone: true,
  templateUrl: './transparent-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransparentButtonComponent {

}
