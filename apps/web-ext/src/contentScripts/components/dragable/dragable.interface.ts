export interface IDragableProps {
  isEditable: boolean;
  setIsEditable: React.Dispatch<React.SetStateAction<boolean>>;
  currUrl: string;
  x: number;
  y: number;
}
