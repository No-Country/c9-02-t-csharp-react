import {
  Button,
  DialogBox,
  DialogBoxProps,
  FlexRowContainer,
  FormContainer,
  GridContainer,
  InfoContainer,
  Input,
  Label,
  LabelInput,
  NavSeparator,
  TransferRequest,
  useForm,
  useToggle,
} from '../../../shared';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { useEffect, useState } from 'react';

import { MakeTransfer } from '../../../APIS/TransactionRequests';
import { SendMoneyFormData } from './SendMoneyFormData';
import { retrieveUserByCBU } from '../../../store/features/loginSlice';
import { useNavigate } from 'react-router';

const SendMoneyForm = () => {
  // ---------- -------------- ---------- //
  // ---------- STARTING HOOKS ---------- //
  // ---------- -------------- ---------- //
  const { login } = useAppSelector((state) => state);
  const { show, toggleChange } = useToggle();
  const dispatcher = useAppDispatch();

  const NavigateTo = useNavigate();

  const initialStateForm: SendMoneyFormData = { userAlias: '', amount: 1.0, message: '' };
  const { ResetForm, handleInputChange, formInputState, userAlias, amount, message } =
    useForm<SendMoneyFormData>(initialStateForm);

  const [showConfirmation, setShowConfirmation] = useState(false);

  const dataForm: TransferRequest = {
    typeTransaction: 2,
    sourceAccountCBU_CVU: login.cbU_CVU,
    destinationAccountCBU_CVU: userAlias,
    Amount: amount,
    destinationAccountAlias: userAlias,
  };
  useEffect(() => {
    !login.success && NavigateTo('/', { replace: true, state: { loggedOut: true } });
  }, [login]);

  const propsDialog: DialogBoxProps = {
    dialogType: 'warning',
    isOpen: show,
    title: 'Confirm Transfer?',
    message: 'Would you like to confirm this transaction?',
    to: '/send',
    onConfirmAction: () => {
      try {
        submitHandler(dataForm);
        dispatcher(retrieveUserByCBU(login.cbU_CVU));
        toggleChange(false);
        setShowConfirmation(true);
      } catch (error) {
        console.log('Transaccion Fallida');
      }
    },
    onCancelAction: () => {
      toggleChange(false);
    },
  };
  const propsConfirmation: DialogBoxProps = {
    dialogType: 'information',
    isOpen: showConfirmation,
    title: 'Transfer completed',
    message: `Your $${amount} transfer was successfully completed.`,
    to: '/home',
    onConfirmAction: () => {
      setShowConfirmation(false);
    },
    onCancelAction: () => {},
  };

  // ---------- -------------------- ---------- //
  // ---------- HANDLE ACTION EVENTS ---------- //
  // ---------- -------------------- ---------- //
  const submitHandler = (data: TransferRequest) => {
    //TO DO Here
    MakeTransfer(data);
  }; //*/

  // ---------- ---------------- ---------- //
  // ---------- RETURN COMPONENT ---------- //
  // ---------- ---------------- ---------- //

  return (
    <>
      <FormContainer onSubmit={(event) => event.preventDefault()} formGap='20px'>
        <LabelInput contentDirection='column' gap='10px'>
          <Label htmlFor='userAlias' width='100%'>
            USER ALIAS OR CBU:
          </Label>
          <Input
            id='userAlias'
            name='userAlias'
            value={userAlias}
            onChange={handleInputChange}
            type='text'
            placeholder=''
          />
        </LabelInput>
        <GridContainer direction={'column'} directionTemplate='0.8fr 20px 1fr' width='100%'>
          <Label htmlFor='amount'>AMOUNT TO SEND</Label>
          <Label htmlFor='amount'>$:</Label>
          <Input
            width='100%'
            id='amount'
            name='amount'
            value={amount}
            onChange={handleInputChange}
            type='number'
            inputMode='numeric'
            placeholder='0.00'
            justifyInput='end'
          />
        </GridContainer>
        <LabelInput contentDirection='column' gap='10px'>
          <Label width='100%'>MESSAGE (Optional):</Label>
          <Input
            id='message'
            name='message'
            value={message}
            onChange={handleInputChange}
            type='text'
            placeholder='Message to the receiver'
          />
        </LabelInput>

        <NavSeparator orientation='horizontal' thickness='4px' size='100%' />

        <InfoContainer
          canHide={false}
          initShowState={true}
          infoSubtitle='Available Transfer Today:'
          fontDataSize='16px'
          styleProps={{ buttonHeight: '35px', buttonWidth: 'auto', buttonPadding: '6px' }}>
          {login.balance}
        </InfoContainer>

        <FlexRowContainer marginBox='0' flexGap='5px'>
          <Button variant='blue' fontWeight='bold' width='100%' onClick={() => toggleChange(true)}>
            Send
          </Button>
          <Button variant='blue' fontWeight='bold' width='100%' onClick={ResetForm}>
            Clear
          </Button>
          {show && <DialogBox {...propsDialog} />}
          {showConfirmation && <DialogBox {...propsConfirmation} />}
        </FlexRowContainer>
      </FormContainer>
    </>
  );
};

export default SendMoneyForm;
