export interface IReqPathParam {
  id: string;
  todo?: string;
}

export interface IReqTodo {
  title: string;
  description: string;
  priority: number;
  dueDate?: Date;
}

export interface IUpdateQueryTodo {
  [query: string]: string | number | boolean;
}
