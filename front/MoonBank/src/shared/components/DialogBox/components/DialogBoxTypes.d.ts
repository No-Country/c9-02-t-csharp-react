export interface DialogStyledProp {
  dialogType: 'information' | 'warning';
}

export interface DialogContainerProp {
  isOpen: boolean;
}

export interface DialogBoxProps extends DialogStyledProp, DialogContainerProp {
  title: string;
  message: string;
  extraMessage?: string;
  to: string;
  onConfirmAction: () => void;
  onCancelAction: () => void;
}
