export interface TodoType {
  id: string;
  content: string | null;
  isCheck: boolean;
  createdAt: Date;
}

export type TodosState = Todo[];

export const CREATE = 'CREATE' as const;
export const REMOVE = 'REMOVE' as const;
export const UPDATE = 'UPDATE' as const;
export const TOGGLE = 'TOGGLE' as const;
export const LOAD_DATA = 'LOAD_DATA' as const;
export const SAVE = 'SAVE' as const;
