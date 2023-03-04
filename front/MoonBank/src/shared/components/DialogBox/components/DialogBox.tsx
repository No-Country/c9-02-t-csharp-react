import { IoHelpCircle, IoWarning, IoInformationCircle, IoAlertCircle } from 'react-icons/io5';

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
    if (typeof onCancelAction !== 'undefined') onCancelAction();
  };
  // ---------- ---------------- ---------- //
  // ---------- RETURN COMPONENT ---------- //
  // ---------- ---------------- ---------- //
  return (
    <DialogContainer isOpen={props.isOpen}>
      <DialogBox_Styled className='DialogBox' dialogType={props.dialogType} open={props.isOpen}>
        {/* TITLE OF DIALOG BOX */}
        <h4>{props.title}</h4>

        <div className='DialogBox__Message'>
          {/* ICON OF DIALOG BOX */}
          {props.dialogType === 'information' ? (
            <IoInformationCircle />
          ) : props.dialogType === 'warning' ? (
            <IoWarning />
          ) : props.dialogType === 'question' ? (
            <IoHelpCircle></IoHelpCircle>
          ) : props.dialogType === 'alert' ? (
            <IoAlertCircle />
          ) : (
            <></>
          )}
          {/* MESSAGE OF DIALOG BOX */}
          <span className='DB__Message'>{props.message}</span>
        </div>

        {/* EXTRA MESSAGE OF DIALOG BOX */}
        {props.extraMessage === undefined || props.extraMessage === '' || (
          <div className='DialogBox__ExtraMessage'>
            <span className='DB__Note'>NOTE:</span> <span className='DB__Extra'>{props.extraMessage}</span>
          </div>
        )}

        {/* INTERACTION BUTTONS FOR DIALOG BOX */}
        <div className='DialogBox__Actions'>
          <button className='DB__Btn DB__BtnConfirm' onClick={DialogConfirmHandler}>
            {props.buttonConfirmLabel ? props.buttonConfirmLabel : 'Confirm'}
          </button>
          {(props.dialogType === 'question' || props.dialogType === 'warning') && (
            <button className='DB__Btn DB__BtnCancel' onClick={DialogCancelHandler}>
              {props.buttonConfirmLabel ? props.buttonConfirmLabel : 'Cancel'}
            </button>
          )}
        </div>
      </DialogBox_Styled>
    </DialogContainer>
  );
};

export default DialogBox;
