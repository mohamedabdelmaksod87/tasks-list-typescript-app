import ITask from "./Task";
import EventHandlers from "../UI-handlers/EventHandlers";

export interface IListElement {
  create(task: ITask): HTMLElement;
}

class ListElement implements IListElement {
  static instance: ListElement = new ListElement();
  private constructor() {}

  create(task: ITask): HTMLElement {
    const li = document.createElement("li") as HTMLLIElement;
    li.className = "item";
    li.append(this.createCheckBox(task));
    li.append(this.createLabel(task));
    li.append(this.createDeleteBtn(task));
    return li;
  }

  private createCheckBox(task: ITask): HTMLInputElement {
    const check = document.createElement("input") as HTMLInputElement;
    check.type = "checkbox";
    check.id = task.getId();
    check.checked = task.getCompleteStatus();
    EventHandlers.handleTaskCompletion(check, task);
    return check;
  }

  private createLabel(task: ITask): HTMLLabelElement {
    const label = document.createElement("label") as HTMLLabelElement;
    label.htmlFor = task.getId();
    label.textContent = task.getContent();
    return label;
  }

  private createDeleteBtn(task: ITask): HTMLButtonElement {
    const button = document.createElement("button") as HTMLButtonElement;
    button.className = "button";
    button.textContent = "X";
    EventHandlers.handleDeleteTask(button, task);
    return button;
  }
}

export default ListElement.instance;
