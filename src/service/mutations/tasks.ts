import { useMutation } from "@tanstack/react-query";

import { ITask } from "@/types/task";
import {
  createTask,
  deleteTask,
  toggleTask,
  updateTask,
} from "../task-service";
import { browserQueryClient } from "../query-client";

export const useCreateTaskMutation = () =>
  useMutation({
    mutationFn: (title: string) => createTask(title),
    onSuccess: () => {
      browserQueryClient?.invalidateQueries({
        queryKey: ["tasks"],
      });
    },
    onError: () => {},
  });

export const useDeleteTaskMutation = () =>
  useMutation({
    mutationFn: (id: string) => deleteTask(id),
    onSuccess: () => {
      browserQueryClient?.invalidateQueries({
        queryKey: ["tasks"],
      });
    },
    onError: () => {},
  });

export const useToggleTaskMutation = () =>
  useMutation({
    mutationFn: (task: ITask) => toggleTask(task),
    onSuccess: () => {
      browserQueryClient?.invalidateQueries({
        queryKey: ["tasks"],
      });
    },
    onError: () => {},
  });

export const useUpdateTaskMutation = () =>
  useMutation({
    mutationFn: (task: ITask) => updateTask(task),
    onSuccess: () => {
      browserQueryClient?.invalidateQueries({
        queryKey: ["tasks"],
      });
    },
    onError: () => {},
  });
