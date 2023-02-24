import { Box, ItemActivity, Text } from '../../shared/styles';

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
        <Text size='10px'>${quantity}</Text>
      </Box>
    </ItemActivity>
  );
};
