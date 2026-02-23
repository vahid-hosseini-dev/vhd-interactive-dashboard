export type Item = {
  label: string;
  value: string;
  group: string;
};

export type GroupHeader = {
  type: "group";
  label: string;
};

export type FlatItem = Item | GroupHeader;

export type DropDownSelectProps = {
  items: Item[];
  onChange?: (selectedValues: string[]) => void;
  value?: string[];
};
