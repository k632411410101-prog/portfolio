'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ReactNode } from 'react';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
  dueDate?: string;
  priority: 'low' | 'medium' | 'high';
}

interface TodoStore {
  todos: Todo[];
  addTodo: (text: string, priority?: 'low' | 'medium' | 'high', dueDate?: string) => void;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
  updateTodo: (id: string, text: string, priority?: 'low' | 'medium' | 'high', dueDate?: string) => void;
  clearCompleted: () => void;
  getTodos: () => Todo[];
}

export const useTodoStore = create<TodoStore>(
  persist(
    (set, get) => ({
      todos: [],
      addTodo: (text, priority = 'medium', dueDate) =>
        set((state) => ({
          todos: [
            ...state.todos,
            {
              id: Date.now().toString(),
              text,
              completed: false,
              createdAt: Date.now(),
              priority,
              dueDate,
            },
          ],
        })),
      removeTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),
      toggleTodo: (id) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          ),
        })),
      updateTodo: (id, text, priority = 'medium', dueDate) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id
              ? { ...todo, text, priority, dueDate }
              : todo
          ),
        })),
      clearCompleted: () =>
        set((state) => ({
          todos: state.todos.filter((todo) => !todo.completed),
        })),
      getTodos: () => get().todos,
    }),
    {
      name: 'todo-storage',
    }
  )
);

export function TodoProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}