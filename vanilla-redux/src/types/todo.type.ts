export interface TodoData {
  id: number;
  text: string;
  done?: boolean;
}

export interface TodoItemProps {
  todo: TodoData;
  onToggle: (id: number) => void;
}

export interface TodoListProps {
  todos: TodoData[];
  onToggle: (id: number) => void;
}

export interface TodosProps {
  todos: TodoData[];
  onCreate: (text: string) => void;
  onToggle: (id: number) => void;
}
