import ITask from "../model/Task";

interface IGenerateID {
  generateNewId(tasks: ITask[]): number;
}

class GenerateID implements IGenerateID {
  static instance: GenerateID = new GenerateID();

  private constructor() {}

  generateNewId(tasks: ITask[]): number {
    const length = tasks.length;
    const newId: number = length ? parseInt(tasks[length - 1].getId()) + 1 : 1;
    return newId;
  }
}

export default GenerateID.instance;
