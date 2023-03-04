export interface DialogStyledProp {
  dialogType: 'information' | 'warning' | 'question' | 'alert';
}

export interface DialogContainerProp {
  isOpen: boolean;
}

export interface DialogBoxProps extends DialogStyledProp, DialogContainerProp {
  title: string;
  message: string;
  extraMessage?: string;
  to: string;
  buttonConfirmLabel?: string;
  buttonCancelLabel?: string;
  onConfirmAction: () => void;
  onCancelAction?: () => void;
}
