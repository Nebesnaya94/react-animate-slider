export type TDates = number[];

export interface IDataItem {
  date: number;
  info: string;
}

export interface ISliderItem {
  title: string;
  items: IDataItem[];
}
