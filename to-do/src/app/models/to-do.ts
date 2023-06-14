export interface ToDo {
  id: number,
  todo: string,
  status: 'ordinary' | 'important' | 'done';
}
