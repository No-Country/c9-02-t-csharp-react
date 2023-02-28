import styled from 'styled-components';

type LoginAlertProps = {
  headerHeight: string;
  boxHeight?: string;
  boxBg?: string;
  textColor?: string;
};

export const LoginAlert = styled.div<LoginAlertProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: ${({ boxHeight }) => boxHeight};
  top: ${({ headerHeight }) => (headerHeight ? headerHeight : '55px')};
  background: ${({ boxBg }) => (boxBg ? boxBg : 'var(--RedInvalid)')};
  color: ${({ textColor }) => (textColor ? textColor : 'var(--White)')};
`;
