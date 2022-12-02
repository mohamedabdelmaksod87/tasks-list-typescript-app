import ListItem from "./ListItem";

export interface List {
  list: ListItem[];
  load(): void;
  save(): void;
  clearList(): void;
  addItem(itemObj: ListItem): void;
  removeItem(id: string): void;
}

export default class FullList implements List {
  list: ListItem[] = [];
  /*here we apply singleton design pattern since we have only one List of Items
  through our application and we need to instantiate the list once and apply
  all methods through this instance */
  static instance: FullList = new FullList();
  private constructor() {}

  load(): void {
    const storedList: string | null = localStorage.getItem("myList");
    if (typeof storedList !== "string") return;
    this.list = JSON.parse(storedList);
  }

  save(): void {
    localStorage.setItem("myList", JSON.stringify(this.list));
  }

  clearList(): void {
    this.list = [];
    this.save();
  }

  addItem(itemObj: ListItem): void {
    this.list.push(itemObj);
    this.save();
  }

  removeItem(id: string): void {
    this.list = this.list.filter((item) => item.id !== id);
    this.save();
  }
}
