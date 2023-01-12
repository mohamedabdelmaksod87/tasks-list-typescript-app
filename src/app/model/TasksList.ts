import ITask from "./Task";

export interface IList {
  clearList(): void;
  addTask(task: ITask): void;
  removeTask(id: string): void;
  updateTask(id: string, newContent: string): void;
}

class TasksList implements IList {
  private storageLocation: string = "allTasks";
  private tasks: ITask[] = [];

  static instance: TasksList = new TasksList();
  private constructor() {}

  getTasks(): ITask[] {
    return this.tasks;
  }

  getStorageLocation(): string {
    return this.storageLocation;
  }

  clearList(): void {
    this.tasks = [];
  }

  addTask(task: ITask): void {
    this.tasks.push(task);
  }

  removeTask(id: string): void {
    this.tasks = this.tasks.filter((task) => task.getId() !== id);
  }

  updateTask(id: string, newContent: string): void {
    const index = this.tasks.findIndex((task) => task.getId() === id);
    if (index === -1) return;
    this.tasks[index].setContent(newContent);
    // this.save();
  }
}

export default TasksList.instance;
