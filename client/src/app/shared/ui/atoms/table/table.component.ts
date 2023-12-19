import {ChangeDetectionStrategy, Component, Input, TemplateRef} from '@angular/core';
import {NgForOf, NgOptimizedImage, NgStyle, NgTemplateOutlet} from '@angular/common';
import {Column} from './table.types';
import {Numerical} from '../../../types/utils';

@Component({
   selector: 'app-table',
   standalone: true,
   imports: [
      NgOptimizedImage,
      NgForOf,
      NgStyle,
      NgTemplateOutlet
   ],
   templateUrl: './table.component.html',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent<T extends { id: Numerical }>  {
   @Input({required: true}) data: T[] = [];
   @Input({required: true}) columns: Column<T>[] = [];
   @Input() cellTemplate?: TemplateRef<any>;
   @Input() columnWidths: string[] = this.computeCellWidth();

   computeCellWidth(): string[] {
      return this.columns.map(() => `${1 / (this.columns.length || 1) * 100}%`);
   }
}
