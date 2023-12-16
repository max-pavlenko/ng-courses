import {ChangeDetectionStrategy, Component, Input, TemplateRef} from '@angular/core';
import {NgForOf, NgOptimizedImage, NgStyle, NgTemplateOutlet} from '@angular/common';
import {Column} from './table.types';

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
   styleUrl: './table.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent<T extends Record<string, any>>  {
   @Input({required: true}) data: T[] = [];
   @Input({required: true}) columns: Column<T>[] = [];
   @Input() cellTemplate?: TemplateRef<{ column: Column<T>, $implicit: T }>;
   @Input() columnWidths: string[] = this.computeCellWidth();

   computeCellWidth() {
      return this.columns.map(() => `${1 / (this.columns.length || 1) * 100}%`);
   }
}
