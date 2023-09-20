import { ISliderItem } from "../data/models";

export function createDates(list: ISliderItem[]) {
  const itemsArray = [];
  for (let i = 0; i < list.length; i++) {
    const last = list[i].items.length - 1;
    const item = [];
    item.push(list[i].items[0].date);
    item.push(list[i].items[last].date);
    itemsArray.push(item);
  }
  return itemsArray;
}
