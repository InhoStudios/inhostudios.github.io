export interface TagChipProps {
  index: number;
  value: string;
  deletable?: boolean;
  onDelete?: (index: number) => void;
}
