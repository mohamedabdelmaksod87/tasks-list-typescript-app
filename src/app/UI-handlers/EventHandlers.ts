import TasksList from "../model/TasksList";
import Storage from "../utilities/Storage";
import UListElement from "../model/UListElement";
import Task from "../model/Task";
import ValidateTask from "../utilities/ValidateTask";
import GenerateID from "../utilities/GenerateID";

class EventHandlers {
  static instance: EventHandlers = new EventHandlers();

  private constructor() {}

  handleNewTask(): void {
    const newItemForm = document.getElementById(
      "itemEntryForm"
    ) as HTMLFormElement;

    newItemForm.addEventListener("submit", (eve: SubmitEvent) => {
      eve.preventDefault();
      const input = document.getElementById("newItem") as HTMLInputElement;
      const content = ValidateTask.validateContent(input.value);
      input.value = "";
      if (!content) return;
      const id = GenerateID.generateNewId(TasksList.getTasks());
      const newTask = new Task(id.toString(), content);
      TasksList.addTask(newTask);
      Storage.storeTasks(TasksList.getTasks(), TasksList.getStorageLocation());
      UListElement.render(TasksList.getTasks());
    });
  }

  handleClearTasks(): void {
    const clearBtn = document.getElementById(
      "clearItemsButton"
    ) as HTMLButtonElement;

    clearBtn.addEventListener("click", () => {
      TasksList.clearList();
      Storage.storeTasks(TasksList.getTasks(), TasksList.getStorageLocation());
      UListElement.clear();
    });
  }

  handleTaskCompletion(check: HTMLInputElement, task: Task): void {
    check.addEventListener("change", () => {
      task.setCompleteStatus(!task.getCompleteStatus());
      Storage.storeTasks(TasksList.getTasks(), TasksList.getStorageLocation());
    });
  }

  handleDeleteTask(button: HTMLButtonElement, task: Task): void {
    button.addEventListener("click", () => {
      TasksList.removeTask(task.getId());
      Storage.storeTasks(TasksList.getTasks(), TasksList.getStorageLocation());
      UListElement.render(TasksList.getTasks());
    });
  }

  initialiseTasks(): void {
    const tasks = Storage.getStoredTasks(TasksList.getStorageLocation());
    console.log(tasks);
    if (tasks?.length) {
      tasks.forEach((task) => {
        const newTask = new Task(task.id, task.content, task.checked);
        TasksList.addTask(newTask);
        UListElement.render(TasksList.getTasks());
      });
    }
    console.log(TasksList.getTasks());
  }
}

export default EventHandlers.instance;
