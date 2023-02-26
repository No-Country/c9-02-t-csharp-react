import { Input, Button, FlexRowContainer, Text } from '../../../shared/styles';
import { useForm } from '../../../shared/hooks';
import { MakeDeposit } from '../../../APIS/TransactionRequests';
import { useAppSelector } from '../../../store/hooks';
import { DepositRequest } from '../../../shared/interfaces/TransactionRequests';
import { FormEvent } from 'react';
export const DepositForm = () => {
 const {balance, cbU_CVU} = useAppSelector(state => state.login)
   const {
    handleInputChange,
    ResetForm,
    cardNumber,
    cardExpireDate,
    cardCvc,
    cardHolderName,
    amount,
  } = useForm({
    cardNumber: '',
    cardExpireDate: '',
    cardCvc: '',
    cardHolderName: '',
    amount: 0,
   
  });

  const submitHandler = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data:DepositRequest = {
      typeTransaction: 0,
      typeDeposit: 0,
      amount,
      destinationAccountCBU_CVU: cbU_CVU
    }
    console.log(data)
    MakeDeposit(data);
  };
  return (
    <>
      <form onSubmit={submitHandler}>
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
          <Button variant='blue' type='submit'>Deposit</Button>
          <Button variant='blue' onClick={ResetForm}>Clear</Button>
        </FlexRowContainer>
      </form>
    </>
  );
};
