import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../task-service";
import { ITask } from "@/types/task";

export const useTaskQuery = ({ initialData }: { initialData: ITask[] }) =>
  useQuery({
    queryKey: ["tasks"],
    queryFn: () => getTasks(),
    initialData,
  });
