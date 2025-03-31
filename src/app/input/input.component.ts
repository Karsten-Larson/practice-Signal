import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataServices } from '../data.service';

@Component({
  selector: 'app-input',
  imports: [FormsModule],
  template: `
    <div>
      <input type="text" [(ngModel)]="input" (keyup)="sendInput()" />
    </div>
  `,
  styles: ``,
})
export class InputComponent {
  input: string = '';

  dataService = inject(DataServices);

  sendInput() {
    this.dataService.searchTerm.set(this.input);
  }
}
