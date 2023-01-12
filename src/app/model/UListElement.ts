import ListElement, { IListElement } from "./ListElement";
import ITask from "./Task";

interface IULElement {
  clear(): void;
  render(tasks: ITask[]): void;
}

class UListElement implements IULElement {
  private ul = document.getElementById("tasksList") as HTMLUListElement;
  private listElement: IListElement;

  static instance: UListElement = new UListElement(ListElement);

  private constructor(listElement: IListElement) {
    this.listElement = listElement;
  }

  clear(): void {
    this.ul.innerHTML = "";
  }

  render(tasks: ITask[]): void {
    this.clear();
    tasks.forEach((task) => {
      const li = this.listElement.create(task);
      this.ul.append(li);
    });
  }
}

export default UListElement.instance;
