import { useState, MouseEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';
import { DialogBox_Styled } from '../styles/DialogBox_Styled';
import { DialogBoxProps } from './DialogBoxTypes';
import { IoHelpCircle, IoWarning } from 'react-icons/io5';

const DialogBox = (props: DialogBoxProps) => {
  const { onConfirmAction } = props;
  // ---------- -------------- ---------- //
  // ---------- STARTING HOOKS ---------- //
  // ---------- -------------- ---------- //
  const [Show, setShow] = useState<boolean>(props.isOpen); //*/
  const NavigateTo = useNavigate();

  // ---------- -------------------- ---------- //
  // ---------- HANDLE ACTION EVENTS ---------- //
  // ---------- -------------------- ---------- //
  const DialogConfirmHandler: MouseEventHandler<HTMLButtonElement> = (_event) => {
    onConfirmAction();
    setShow(false);
    NavigateTo(props.to, { replace: true });
  }; //*/
  // ---------- ---------------- ---------- //
  // ---------- RETURN COMPONENT ---------- //
  // ---------- ---------------- ---------- //
  return (
    <DialogBox_Styled className='DialogBox' aria-modal={true} dialogType={props.dialogType} open={Show}>
      <h4>{props.title}</h4>
      <div className='DialogBox__Message'>
        {props.dialogType === 'information' ? <IoHelpCircle /> : props.dialogType === 'warning' ? <IoWarning /> : <></>}
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
        <button className='DB__Btn DB__BtnCancel' onClick={() => setShow(false)}>
          Cancel
        </button>
      </div>
    </DialogBox_Styled>
  );
};

export default DialogBox;
