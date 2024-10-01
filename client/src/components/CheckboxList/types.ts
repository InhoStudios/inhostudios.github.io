export interface CheckboxOption {
  value: string | number;
  title: string;
  checked: boolean;
  tooltip?: string;
}

export interface CheckboxListProps {
  id: string;
  enabled?: boolean;
  onSelect?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  single?: boolean;
  options: CheckboxOption[];
  onlyChecked: boolean;
}
