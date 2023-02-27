import { Box, Button, ItemActivity, Text } from '../../shared/styles';

interface Props {
  icon: string;
  serviceTitle: string;
  serviceDescription: string;
  date: string;
  quantity: number;
}

export const Activity = ({ date, icon, quantity, serviceDescription, serviceTitle }: Props) => {
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
      <Button width='100%' variant='blue' fontSize='14px' fontWeight='700'>
        Perform Transaction
      </Button>
    </ItemActivity>
  );
};
