import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-transparent-button',
  standalone: true,
  imports: [],
  templateUrl: './transparent-button.component.html',
  styleUrl: './transparent-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransparentButtonComponent {

}
