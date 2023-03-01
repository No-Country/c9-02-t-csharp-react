import { ReturnBtnStyled } from './ReturnBtnStyled';
import { IoArrowUndo } from 'react-icons/io5';
import type { ReturnButtonProps } from './ReturnBtnStyled';
import { useNavigate } from 'react-router';

export const ReturnButton = (props: ReturnButtonProps) => {
  const NavigateTo = useNavigate();
  return (
    <ReturnBtnStyled
      {...props}
      onClick={() => {
        NavigateTo('/');
      }}>
      <IoArrowUndo />
      <span>Back to Login</span>
    </ReturnBtnStyled>
  );
};
