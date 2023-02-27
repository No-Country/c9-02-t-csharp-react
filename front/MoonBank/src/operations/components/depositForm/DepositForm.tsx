import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { MakeDeposit } from '../../../APIS/TransactionRequests';
import { useEffect } from 'react';
import {
  DialogBox,
  DialogBoxProps,
  useToggle,
  useForm,
  DepositRequest,
  Input,
  Button,
  FlexRowContainer,
  Text,
} from '../../../shared';
import { retrieveUser } from '../../../store/features/loginSlice';
export const DepositForm = () => {

const dispatch = useAppDispatch()
  const { login } = useAppSelector((state) => state);
  const { show, toggleChange } = useToggle();
  const { handleInputChange, ResetForm, cardNumber, cardExpireDate, cardCvc, cardHolderName, amount } = useForm({
    cardNumber: '',
    cardExpireDate: '',
    cardCvc: '',
    cardHolderName: '',
    amount: 0,
  });
  const dataForm: DepositRequest = {
    typeTransaction: 0,
    typeDeposit: 0,
    amount,
    destinationAccountCBU_CVU: login.cbU_CVU,
  };
  useEffect(() => {
    dispatch(retrieveUser(login.alias));
  }, [login]);
  
  const submitHandler = (data: DepositRequest) => {
    MakeDeposit(data);
    toggleChange(false);
    console.log('subido');
  };
  const props: DialogBoxProps = {
    dialogType: 'warning',
    isOpen: show,
    title: 'Confirm transfer',
    message: 'Would you like to confirm this transaction?',
    extraMessage: 'This action cannot be reverted after confirmation!',
    to: '/deposit',
    onConfirmAction: () => submitHandler(dataForm),
    onCancelAction: () => toggleChange(false),
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>CARD NUMBER</label>
        <Input
          name='cardNumber'
          value={cardNumber}
          onChange={handleInputChange}
          type='text'
          placeholder='***** ***** *****'
          marginBottom='1rem'
          marginTop='1rem'
          fontSize='12px'
        />

        <FlexRowContainer>
          <label>
            EXPIRE DATE
            <Input
              name='cardExpireDate'
              value={cardExpireDate}
              onChange={handleInputChange}
              type='date'
              placeholder='**/**'
              marginBottom='1rem'
            />
          </label>
          <label>
            CVC
            <Input
              name='cardCvc'
              value={cardCvc}
              onChange={handleInputChange}
              type='number'
              placeholder='***'
              marginBottom='1rem'
            />
          </label>
        </FlexRowContainer>
        <label>CARD HOLDER NAME</label>
        <Input
          name='cardHolderName'
          value={cardHolderName}
          onChange={handleInputChange}
          type='text'
          placeholder='NAME'
          marginBottom='1rem'
          marginTop='1rem'
          fontSize='12px'
        />

        <FlexRowContainer withAmount>
          <Text> Amount to Deposit $</Text>

          <Input
            name='amount'
            value={amount}
            onChange={handleInputChange}
            type='text'
            placeholder='150,0'
            marginBottom='1rem'
            marginTop='1rem'
            fontSize='12px'
          />
        </FlexRowContainer>

        <hr />
        <FlexRowContainer space='between'>
          <Text style={{ alignSelf: 'flex-start' }}>Available Deposit Today</Text>
          <Text marginTop='1.2rem' style={{ alignSelf: 'flex-end' }}>
            $ {login.balance}
          </Text>
        </FlexRowContainer>
        <FlexRowContainer>
          <Button onClick={() => toggleChange(true)} type='button' variant='blue'>
            Deposit
          </Button>
          <Button variant='blue' type='button' onClick={ResetForm}>
            Clear
          </Button>
          {show && <DialogBox {...props} />}
        </FlexRowContainer>
      </form>
    </>
  );
};
