export interface IDragableProps {
  isEditable: boolean;
  setIsEditable: React.Dispatch<React.SetStateAction<boolean>>;
  x: number;
  y: number;
}
