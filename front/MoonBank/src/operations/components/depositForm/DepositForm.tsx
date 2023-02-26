import { Input, Button, FlexRowContainer, Text } from '../../../shared/styles';
import { useForm } from '../../../shared/hooks';
import { FormEvent } from 'react';
import { DepositRequest } from '../../../shared/interfaces';
import { MakeDeposit } from '../../../APIS/TransactionRequests';
import { useAppSelector } from '../../../store/hooks';
import { useToggle } from '../../../shared/hooks';
import { DialogBox } from "../../../shared/components/DialogBox";
import { DialogBoxProps } from '../../../shared/components/DialogBox/components/DialogBoxTypes';

export const DepositForm = () => {
  const { balance, cbU_CVU } = useAppSelector((state) => state.login);
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
    destinationAccountCBU_CVU: cbU_CVU,
  };


  const submitHandler = ( data: DepositRequest) => {
    
    MakeDeposit(data)
    toggleChange(false)
  console.log('subido')
    
  };
  const props:DialogBoxProps = {
    dialogType: 'warning',
    isOpen: show,
    title: 'Confirm transfer',
    message: 'Would you like to confirm this transaction?',
    extraMessage: 'This action cannot be reverted after confirmation!',
    to: '/',
    onConfirmAction: () => submitHandler(dataForm) ,
    onCancelAction: () => toggleChange(false),
  }
  
 
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} >
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
            $ {balance}
          </Text>
        </FlexRowContainer>
        <FlexRowContainer>
          <Button onClick={() => toggleChange(true)} type='button' variant='blue'>
            Deposit
          </Button>
          <Button variant='blue' type='button' onClick={ResetForm}>
            Clear
          </Button>
          {show && <DialogBox {...props}/>}
        </FlexRowContainer>
      </form>
    </>
  );
};
