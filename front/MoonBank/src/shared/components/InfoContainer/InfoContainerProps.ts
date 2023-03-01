export type ShowHideButtonProps = {
  styleProps?: {
    buttonPadding?: string;
    buttonIconColor?: string;
    buttonHeight?: string;
    buttonWidth?: string;
  };
  alignSelf?: 'start' | 'center' | 'end' | 'flex-start' | 'flex-end' | 'self-start' | 'self-end';
  justifySelf?: 'start' | 'center' | 'end' | 'flex-start' | 'flex-end' | 'self-start' | 'self-end';
};

export interface InfoContainerProps extends ShowHideButtonProps {
  canHide: boolean;
  containerLayout?: 'Spaced' | 'Together';
  infoSubtitle?: string;
  initShowState?: boolean;
  fontDataSize?: string;
  fontWeight?:
    | 'Thin_100'
    | 'ExtraLight_200'
    | 'Light_300'
    | 'Normal_400'
    | 'Medium_500'
    | 'DemiBold_600'
    | 'Bold_700'
    | 'ExtraBold_800'
    | 'Heavy_900';
  children?: string | number;
}

export type InfoLayoutProps = {
  gridTemp: string;
  btnJustify: 'self-start' | 'self-end';
  textJustify: 'self-start' | 'self-end';
};
