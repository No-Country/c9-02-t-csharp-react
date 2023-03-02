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
  FormContainer,
  LabelInput,
  Label,
  GridContainer,
  NavSeparator,
  InfoContainer,
} from '../../../shared';
import { retrieveUser } from '../../../store/features/loginSlice';
import { useNavigate } from 'react-router';

export const DepositForm = () => {
  const NavigateTo = useNavigate();
  const dispatch = useAppDispatch();
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
    !login.success && NavigateTo('/', { replace: true, state: { loggedOut: true } });
    dispatch(retrieveUser(login.alias));
  }, []);

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
      <FormContainer onSubmit={(e) => e.preventDefault()} formGap='20px'>
        <LabelInput contentDirection='column' gap='10px'>
          <Label htmlFor='userAlias' width='100%'>
            CARD NUMBER:
          </Label>
          <Input
            name='cardNumber'
            value={cardNumber}
            onChange={handleInputChange}
            type='text'
            placeholder='***** ***** *****'
            fontSize='12px'
          />
        </LabelInput>

        <GridContainer direction={'column'} directionTemplate='1fr 1fr' width='100%' gridGap='4px'>
          <LabelInput contentDirection='column' gap='10px'>
            <Label htmlFor='amount' width='100%'>
              EXPIRE DATE:
            </Label>
            <Input
              name='cardExpireDate'
              value={cardExpireDate}
              onChange={handleInputChange}
              placeholder='**/**'
              inputMode='numeric'
              pattern='^\d{2,2}\/\d{2,2}$'
            />
          </LabelInput>
          <LabelInput contentDirection='column' gap='10px'>
            <Label width='100%'>CVC:</Label>
            <Input
              name='cardCvc'
              value={cardCvc}
              onChange={handleInputChange}
              type='number'
              inputMode='numeric'
              placeholder='***'
              height='100%;'
              pattern='(?:^\d{3,3}$)'
            />
          </LabelInput>
        </GridContainer>

        <LabelInput contentDirection='column'>
          <Label width='100%'>CARD HOLDER NAME</Label>
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
        </LabelInput>

        <FlexRowContainer withAmount>
          <Label fontSize='15px' width='100%'>
            {' '}
            Amount to Deposit $
          </Label>
          <Input
            name='amount'
            value={amount}
            onChange={handleInputChange}
            type='text'
            placeholder='150,0'
            fontSize='12px'
          />
        </FlexRowContainer>

        <NavSeparator orientation='horizontal' thickness='4px' size='100%' />

        <InfoContainer
          canHide={false}
          initShowState={true}
          infoSubtitle='Available Deposit Today:'
          fontDataSize='16px'
          styleProps={{ buttonHeight: '35px', buttonWidth: 'auto', buttonPadding: '6px' }}>
          {login.balance}
        </InfoContainer>

        <FlexRowContainer flexGap='5px'>
          <Button onClick={() => toggleChange(true)} variant='blue' width='100%'>
            Deposit
          </Button>
          <Button variant='blue' type='button' onClick={ResetForm} width='100%'>
            Clear
          </Button>
          {show && <DialogBox {...props} />}
        </FlexRowContainer>
      </FormContainer>
    </>
  );
};
