import {Directive, Input} from '@angular/core';

@Directive({
   selector: '[appTypedTemplate]',
   standalone: true
})
export class TypedTemplateDirective<T> {
   @Input({required: true}) appTypedTemplate!: T;

   static ngTemplateContextGuard<TypeToken>(dir: TypedTemplateDirective<TypeToken>, ctx: unknown): ctx is TypeToken {
      return true;
   }
}
