import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputComponent } from './input/input.component';
import { DataServices } from './data.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InputComponent],
  template: `
    <h1>Angular Services Demo</h1>
    <div>
      <app-input></app-input>
    </div>
    @for(item of items(); track item){
    <div>{{ item }}</div>
    }
  `,
  styles: ``,
})
export class AppComponent {
  dataService: DataServices = inject(DataServices);

  items = computed(() =>
    this.dataService
      .getData()
      .filter((item) =>
        item.toLowerCase().includes(this.dataService.searchTerm().toLowerCase())
      )
  );
}
