import { Input, Button, FlexRowContainer, Text } from '../../../shared/styles';
import { useForm } from '../../../shared/hooks';
import { MakeDeposit } from '../../../APIS/TransactionRequests';

// this screen has to receive the balance from the user Slice
export const DepositForm = () => {
  const {
    handleInputChange,
    ResetForm,
    cardNumber,
    cardExpireDate,
    cardCvc,
    cardHolderName,
    amount,
    idDestinationAccount,
  } = useForm({
    cardNumber: '',
    cardExpireDate: '',
    cardCvc: '',
    cardHolderName: '',
    amount: 0,
    idDestinationAccount: 1,
  });

  const submitHandler = () => {
    MakeDeposit({
      typeTransaction: 0,
      typeDeposit: 0,
      amount,
      idDestinationAccount,
    });
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

        <label>ID DESTINATION ACCOUNT</label>
        <Input
          name='idDestinationAccount'
          value={idDestinationAccount}
          onChange={handleInputChange}
          type='text'
          placeholder='Destination account'
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
            $ 7500
            {/* add balance here */}
          </Text>
        </FlexRowContainer>
        <FlexRowContainer>
          <Button type='submit'>Deposit</Button>
          <Button onClick={ResetForm}>Clear</Button>
        </FlexRowContainer>
      </form>
    </>
  );
};
