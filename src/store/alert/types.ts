export interface AlertState {
  visible: boolean;
  message?: string;
  left?: IButton;
  right?: IButton;
  title?: string;
  onClose?: () => void;
}

export interface IButton {
  label: string;
  onPress: () => void;
}
