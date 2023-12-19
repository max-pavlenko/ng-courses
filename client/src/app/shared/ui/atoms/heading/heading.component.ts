import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-heading',
  standalone: true,
  templateUrl: './heading.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeadingComponent {

}
