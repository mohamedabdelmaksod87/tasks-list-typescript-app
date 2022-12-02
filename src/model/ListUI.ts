import FullList from "./FullList";
import ListItem from "./ListItem";

interface DOMList {
  ul: HTMLUListElement;
  fullList: FullList;
  clear(): void;
  render(): void;
  handleClearItems(): void;
  handleNewItem(): void;
}

export default class ListTemplate implements DOMList {
  ul = document.getElementById("listItems") as HTMLUListElement;
  fullList = FullList.instance;

  /*here we apply singleton design pattern since we have only one list UI template
  through our application and we need to instantiate the listTemplate once and apply
  all methods through this instance */
  static instance: ListTemplate = new ListTemplate();
  private constructor() {
    this.handleClearItems();
    this.handleNewItem();
  }

  clear(): void {
    this.ul.innerHTML = "";
  }

  render(): void {
    this.clear();

    this.fullList.list.forEach((item) => {
      const li = document.createElement("li") as HTMLLIElement;
      li.className = "item";

      const check = document.createElement("input") as HTMLInputElement;
      check.type = "checkbox";
      check.id = item.id;
      check.checked = item.checked;
      li.append(check);

      check.addEventListener("change", (): void => {
        item.checked = !item.checked;
        this.fullList.save();
      });

      const label = document.createElement("label") as HTMLLabelElement;
      label.htmlFor = item.id;
      label.textContent = item.item;
      li.append(label);

      const button = document.createElement("button") as HTMLButtonElement;
      button.className = "button";
      button.textContent = "X";
      li.append(button);

      button.addEventListener("click", (): void => {
        this.fullList.removeItem(item.id);
        this.render();
      });

      this.ul.append(li);
    });
  }

  handleClearItems(): void {
    const clearBtn = document.getElementById(
      "clearItemsButton"
    ) as HTMLButtonElement;

    clearBtn.addEventListener("click", (): void => {
      this.fullList.clearList();
      this.clear();
    });
  }

  handleNewItem(): void {
    const newItemForm = document.getElementById(
      "itemEntryForm"
    ) as HTMLFormElement;

    newItemForm.addEventListener("submit", (eve: SubmitEvent) => {
      eve.preventDefault();
      const input = document.getElementById("newItem") as HTMLInputElement;
      const newEntryText = input.value.trim();
      input.value = "";
      if (!newEntryText) return;

      const itemId: number = this.fullList.list.length
        ? parseInt(this.fullList.list[this.fullList.list.length - 1].id) + 1
        : 1;

      const newItem = new ListItem(itemId.toString(), newEntryText);
      this.fullList.addItem(newItem);
      this.render();
    });
  }
}
