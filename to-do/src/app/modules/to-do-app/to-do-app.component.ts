import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-to-do-app',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './to-do-app.component.html',
  styleUrls: ['./to-do-app.component.scss'],
})
export class ToDoAppComponent {}