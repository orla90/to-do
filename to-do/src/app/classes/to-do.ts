export class ToDo {
  id?: number;
  todo?: string = '';
  status?: 'ordinary' | 'important' | 'done' = 'ordinary';
  
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
