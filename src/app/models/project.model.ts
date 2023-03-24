import { Task } from "./task.model";

export interface Project {
    id: number;
    name: string;
    code: string;
    description?: string;
    start: Date;
    end?: Date;
    priority: 'low' | 'medium' | 'high';
    done: boolean;
    tasks: Task[];
}