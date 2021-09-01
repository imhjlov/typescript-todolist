export interface List {
  id: string;
  content: string | null;
  isCheck: boolean;
  createdAt: string;
}

export interface TodoData {
  count: number;
  todoList: List[];
}
