import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-to-do-search',
  templateUrl: './to-do-search.component.html',
  styleUrls: ['./to-do-search.component.scss'],
})
export class ToDoSearchComponent {
  @Output() public searchEvent = new EventEmitter();
    
  searchForm = new FormGroup({
    search: new FormControl(''),
    status: new FormControl('ordinary'),
  });

  submitApplication() {
    this.searchEvent.emit(
      {
        todo: this.searchForm.value.search ?? '',
        status: this.searchForm.value.status ?? 'ordinary',
      }
    );
  }
}