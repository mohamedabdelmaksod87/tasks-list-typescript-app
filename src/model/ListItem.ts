export interface Item {
  id: string;
  item: string;
  checked: boolean;
}

export default class ListItem implements Item {
  constructor(
    readonly id: string = "",
    readonly item: string = "",
    public checked: boolean = false
  ) {}
}
