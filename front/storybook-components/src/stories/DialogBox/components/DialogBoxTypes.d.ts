export interface DialogStyledProp {
  dialogType: 'information' | 'warning';
}

type BaseFunct<FunctType> = (args: FunctType) => void;

export interface DialogBoxProps extends DialogStyledProp {
  isOpen: boolean;
  title: string;
  message: string;
  extraMessage?: string;
  to: string;
  onConfirmAction: VoidFunction;
}
