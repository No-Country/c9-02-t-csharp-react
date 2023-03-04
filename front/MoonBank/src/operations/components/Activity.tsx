import { Box, Button, ItemActivity, ItemContainer, Text } from '../../shared/styles';

import arrowGreenIcon from '../../shared/assets/arrowInIcon.svg';
import arrowRedIcon from '../../shared/assets/arrowOutIcon.svg';
import { setIconService } from '../../shared/utils';

interface Props {
  icon?: string;
  serviceTitle: string;
  serviceDescription: string;
  date?: string;
  quantity: number;
  typeItem: 'reward' | 'service' | 'activity';
  totalPoints?: number;
  idService?: number;
  transaction?: () => void;
  idDestinationAccount?: number;
  typeTransaction?: string;
  idAccount?: number;
}

export const Activity = ({
  date,
  icon,
  quantity,
  serviceDescription,
  serviceTitle,
  transaction,
  typeItem,
  totalPoints,
  idDestinationAccount,
  typeTransaction,
  idAccount,
  idService,
}: Props) => {
  const isEnoughPoints = typeItem === 'reward' && (totalPoints as number) >= quantity;

  let result;
  let color;

  switch (typeTransaction) {
    case 'PayService':
      result = `$ ${quantity} `;
      color = 'var(--LightRed)';
      serviceDescription = '';
      icon = typeItem === 'activity' ? arrowRedIcon : setIconService(idService!);
      break;
    case 'Reward':
      result = ` ${quantity} px`;
      color = 'var(--LightRed)';
      // icon = arrowRedIcon;
      break;
    case 'Deposit':
      result = `$ ${quantity} `;
      color = 'var(--LightGreen)';
      serviceDescription = '';
      icon = arrowGreenIcon;
      break;
    case 'Transfer':
      result = `$ ${quantity} `;
      color = idDestinationAccount === idAccount ? 'var(--LightGreen)' : 'var(--LightRed)';
      icon = idDestinationAccount === idAccount ? arrowGreenIcon : arrowRedIcon;
      serviceDescription = '';
      break;
    default:
      result = '';
      color = '';
  }

  return (
    <ItemContainer>
      <ItemActivity>
        <Box>
          <img src={icon} alt={icon} />
          <Box direction='column' marginLeft='10px'>
            <Text fontWeight='Bold_700' fontSize='15px' fontSizeVar={{ large: '13px', medium: '11px', min: '9px' }}>
              {serviceTitle}
            </Text>
            <Text fontWeight='Normal_400' fontSize='13px' fontSizeVar={{ large: '11px', medium: '9px', min: '7px' }}>
              {serviceDescription}
            </Text>
          </Box>
        </Box>
        <Box direction='column'>
          <Text fontSize='14px' fontWeight='DemiBold_600' fontSizeVar={{ large: '12px', medium: '11px', min: '9px' }}>
            {date}
          </Text>
          <Text
            fontSize='12px'
            style={{ color: isEnoughPoints ? 'var(--LightGreen)' : `${color}` }}
            fontSizeVar={{ large: '10px', medium: '9px', min: '8px' }}>
            {result}
          </Text>
        </Box>
      </ItemActivity>
      {typeItem !== 'activity' && (
        <Button width='100%' variant='blue' onClick={transaction}>
          Perform transaction
        </Button>
      )}
    </ItemContainer>
  );
};
