import { SIZE } from "~/typings/enums";

export interface SelectInputOption {
  value: string | number;
  title: string;
}

export interface SelectInputProps {
  id: string;
  label?: string;
  value?: string | number;
  size?: SIZE;
  onChange?: (value: string) => void;
  required?: boolean;
  emptyText?: string;
  options: SelectInputOption[];
}
