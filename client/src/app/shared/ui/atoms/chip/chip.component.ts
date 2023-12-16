import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-chip',
  standalone: true,
  imports: [],
  templateUrl: './chip.component.html',
  styleUrl: './chip.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChipComponent {

}
