import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import {
  DialogBox,
  DialogBoxProps,
  useToggle,
  useForm,
  TransferRequest,
  Input,
  Button,
  FlexRowContainer,
  Text,
  Label,
  LabelInput,
  FormContainer,
  GridContainer,
  FlexContainer,
} from '../../../shared';
import { NavSeparator } from '../../../shared';
import { retrieveUserByCBU } from '../../../store/features/loginSlice';
import type { SendMoneyFormData } from './SendMoneyFormData';
import { MakeTransfer } from '../../../APIS/TransactionRequests';
import { Navigate, useNavigate } from 'react-router';

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
  const dataForm: TransferRequest = {
    typeTransaction: 2,
    sourceAccountCBU_CVU: login.cbU_CVU,
    destinationAccountCBU_CVU: '',
    Amount: amount,
    destinationAccountAlias: userAlias,
  };
  useEffect(() => {
    dispatcher(retrieveUserByCBU(login.cbU_CVU));

    !login.success && NavigateTo('/', { replace: true, state: { loggedOut: true } });
  }, []);

  const propsDialog: DialogBoxProps = {
    dialogType: 'warning',
    isOpen: show,
    title: 'Confirm Transfer?',
    message: 'Would you like to confirm this transaction?',
    to: '/send',
    onConfirmAction: () => {
      try {
        submitHandler(dataForm);
        toggleChange(false);
        console.log('Transaccion Realizada');
      } catch (error) {
        console.log('Transaccion Fallida');
      }
    },
    onCancelAction: () => {
      toggleChange(false);
    },
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
            USER ALIAS:
          </Label>
          <Input
            id='userAlias'
            name='userAlias'
            value={userAlias}
            onChange={handleInputChange}
            type='text'
            placeholder='user.alias.mb'
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
            type='text'
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

        <FlexContainer marginBox='0' direction='column'>
          <Text style={{ alignSelf: 'flex-start' }}>Available Transfer Today:</Text>
          <Text style={{ alignSelf: 'flex-end' }}>$ {login.balance}</Text>
        </FlexContainer>
        <FlexRowContainer marginBox='0' flexGap='5px'>
          <Button variant='blue' fontWeight='bold' width='100%' onClick={() => toggleChange(true)}>
            Send
          </Button>
          <Button variant='blue' fontWeight='bold' width='100%' onClick={ResetForm}>
            Clear
          </Button>
          {show && <DialogBox {...propsDialog} />}
        </FlexRowContainer>
      </FormContainer>
    </>
  );
};

export default SendMoneyForm;
