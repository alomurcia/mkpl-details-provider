import { Component, Input } from '@angular/core';

declare const Liferay: any;

@Component({
  selector: 'card-field',
  templateUrl: 
    Liferay.ThemeDisplay.getPathContext() + 
    '/o/mkpl-details-provider/app/card-field.component.html'
})

export class CardFieldComponent {
  @Input() field: string;
  @Input() text: string;
  @Input() border = true;
}
