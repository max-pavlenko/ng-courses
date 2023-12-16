import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
   selector: 'app-figure',
   standalone: true,
   imports: [],
   templateUrl: './figure.component.html',
   styleUrl: './figure.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class FigureComponent {
   @Input({required: true}) title = '';
}
