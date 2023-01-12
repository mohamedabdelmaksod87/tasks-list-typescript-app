import ITask from "../model/Task";

export interface StoredTask {
  id: string;
  content: string;
  checked: boolean;
}

interface IStorage {
  storeTasks(tasks: ITask[], location: string): void;
  getStoredTasks(location: string): StoredTask[] | undefined;
}

class Storage implements IStorage {
  static instance: Storage = new Storage();
  private constructor() {}

  storeTasks(tasks: ITask[], location: string): void {
    localStorage.setItem(location, JSON.stringify(tasks));
  }

  getStoredTasks(location: string): StoredTask[] | undefined {
    const tasks = localStorage.getItem(location);
    if (tasks) return JSON.parse(tasks) as StoredTask[];
    return;
  }
}

export default Storage.instance;
