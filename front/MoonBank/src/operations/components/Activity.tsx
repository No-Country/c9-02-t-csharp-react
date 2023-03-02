import { Box, Button, ItemActivity, Text, ItemContainer } from '../../shared/styles';

interface Props {
  icon: string;
  serviceTitle: string;
  serviceDescription: string;
  date?: string;
  quantity: number;
  typeItem: 'reward' | 'service' | 'activity';
  totalPoints?: number;
  transaction?: () => void;
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
}: Props) => {
  const isEnoughPoints = typeItem === 'reward' && (totalPoints as number) >= quantity;

  return (
    <ItemContainer>
      <ItemActivity>
        <Box>
          <img src={icon} alt={icon} />
          <Box direction='column' marginLeft='10px'>
            <Text fontWeight='Bold_700' fontSize='10px'>
              {serviceTitle}
            </Text>
            <Text fontWeight='Normal_400' fontSize='8px'>
              {serviceDescription}
            </Text>
          </Box>
        </Box>
        <Box direction='column'>
          <Text fontSize='10px' fontWeight='DemiBold_600'>
            {date}
          </Text>
          <Text fontSize='10px' style={{ color: isEnoughPoints ? 'var(--LightGreen)' : 'var(--LightRed)' }}>
            {typeItem === 'service' ? `$ ${quantity} ` : typeItem === 'reward' ? `${quantity} px` : `- ${quantity} `}
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
