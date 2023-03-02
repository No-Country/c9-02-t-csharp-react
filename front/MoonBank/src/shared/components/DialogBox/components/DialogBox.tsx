import { IoHelpCircle, IoWarning } from 'react-icons/io5';

import { DialogBoxProps } from './DialogBoxTypes';
import { DialogBox_Styled } from '../styles/DialogBox_Styled';
import { DialogContainer } from '../styles/DialogContainer';
import { MouseEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';

const DialogBox = (props: DialogBoxProps) => {
  const { onConfirmAction, onCancelAction } = props;
  // ---------- -------------- ---------- //
  // ---------- STARTING HOOKS ---------- //
  // ---------- -------------- ---------- //
  const NavigateTo = useNavigate();

  // ---------- -------------------- ---------- //
  // ---------- HANDLE ACTION EVENTS ---------- //
  // ---------- -------------------- ---------- //
  const DialogConfirmHandler: MouseEventHandler<HTMLButtonElement> = (_event) => {
    onConfirmAction();
    NavigateTo(props.to, { replace: true });
  }; //*/
  const DialogCancelHandler: MouseEventHandler<HTMLButtonElement> = (_event) => {
    onCancelAction();
  };
  // ---------- ---------------- ---------- //
  // ---------- RETURN COMPONENT ---------- //
  // ---------- ---------------- ---------- //
  return (
    <DialogContainer isOpen={props.isOpen}>
      <DialogBox_Styled className='DialogBox' dialogType={props.dialogType} open={props.isOpen}>
        <h4>{props.title}</h4>
        <div className='DialogBox__Message'>
          {props.dialogType === 'information' ? (
            <IoHelpCircle />
          ) : props.dialogType === 'warning' ? (
            <IoWarning />
          ) : (
            <></>
          )}
          <span className='DB__Message'>{props.message}</span>
        </div>
        {props.extraMessage === undefined || props.extraMessage === '' || (
          <div className='DialogBox__ExtraMessage'>
            <span className='DB__Note'>NOTE:</span> <span className='DB__Extra'>{props.extraMessage}</span>
          </div>
        )}
        <div className='DialogBox__Actions'>
          <button className='DB__Btn DB__BtnConfirm' onClick={DialogConfirmHandler}>
            Confirm
          </button>
          {props.dialogType !== 'information' && (
            <button className='DB__Btn DB__BtnCancel' onClick={DialogCancelHandler}>
              Cancel
            </button>
          )}
        </div>
      </DialogBox_Styled>
    </DialogContainer>
  );
};

export default DialogBox;
