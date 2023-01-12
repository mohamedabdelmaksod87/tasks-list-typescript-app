export interface ITask {
  getId(): string;
  getContent(): string;
  getCompleteStatus(): boolean;
  setId(id: string): void;
  setContent(content: string): void;
  setCompleteStatus(checked: boolean): void;
}

export default class Task implements ITask {
  constructor(
    private id: string,
    private content: string,
    private checked: boolean = false
  ) {}

  getId(): string {
    return this.id;
  }

  setId(id: string) {
    this.id = id;
  }

  getContent(): string {
    return this.content;
  }

  setContent(content: string) {
    this.content = content;
  }

  getCompleteStatus(): boolean {
    return this.checked;
  }

  setCompleteStatus(checked: boolean) {
    this.checked = checked;
  }
}
