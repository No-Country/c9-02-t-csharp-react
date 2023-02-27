import { PayService } from '../../APIS/TransactionRequests';
import { DialogBox, DialogBoxProps, PayRequest, useToggle } from '../../shared';
import { Box, Button, ItemActivity, Text } from '../../shared/styles';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

interface Props {
  icon: string;
  serviceTitle: string;
  serviceDescription: string;
  date: string;
  quantity: number;
  idService: number;
}

export const Activity = ({ idService, date, icon, quantity, serviceDescription, serviceTitle }: Props) => {

  const dispatch = useAppDispatch();
  const { login } = useAppSelector((state) => state);
  const { show, toggleChange } = useToggle();
  const id = login.email
  const data: PayRequest = {
    idService, 
    idSourceAccount: Number(id), // !Esto se tiene que modificar en el backend
    typeTransaction: 1,
  }
  const handlePerFormTransaction = () => { 
    PayService(data)
    toggleChange(false)
  }
  const props: DialogBoxProps = {
    dialogType: 'warning',
    isOpen: show,
    title: 'Confirm Transaction',
    message: 'Would you like to confirm this transaction?',
    extraMessage: 'This action cannot be reverted after confirmation!',
    to: '/services',
    onConfirmAction: () => handlePerFormTransaction(),
    onCancelAction: () => toggleChange(false),
  };
  return (
    <ItemActivity>
      <Box justifyContent='space-around' alignContent='center' width={'100%'}>
        <Box alignContent='center'>
          <img src={icon} alt={icon} />
          <Box direction='column' marginLeft='1rem'>
            <Text weight='700' size='10px'>
              {serviceTitle}
            </Text>
            <Text weight='400' size='8px'>
              {serviceDescription}
            </Text>
          </Box>
        </Box>
        <Box direction='column'>
          <Text size='10px' weight='600' align='end' marginRight='1rem'>
            {date}
          </Text>
          <Text size='10px' align='end' marginRight='1rem'>
            ${quantity}
          </Text>
        </Box>
      </Box>
      <Button onClick={() => toggleChange(true)} width='100%' variant='blue' fontSize='14px' fontWeight='700'>
        Perform Transaction
      </Button>
      {show && <DialogBox {...props} />}
    </ItemActivity>
  );
};
