import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
   selector: 'app-figure',
   standalone: true,
   templateUrl: './figure.component.html',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class FigureComponent {
   @Input({required: true}) title = '';
}
