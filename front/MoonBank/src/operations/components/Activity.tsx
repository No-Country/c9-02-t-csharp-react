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
            <Text weight='700' size='10px'>
              {serviceTitle}
            </Text>
            <Text weight='400' size='8px'>
              {serviceDescription}
            </Text>
          </Box>
        </Box>
        <Box direction='column'>
          <Text size='10px' weight='600'>
            {date}
          </Text>
          <Text size='10px' style={{ color: isEnoughPoints ? 'var(--LightGreen)' : 'var(--LightRed)' }}>

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
