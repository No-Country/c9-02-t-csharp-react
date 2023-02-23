import { Box, Container, ItemActivity, Paper, Text } from '../shared/styles';

export const Services = () => {
  return (
    <Container>
      <Paper>
        <Text weight='700'>Services</Text>
        <ItemActivity>
          <Box>
           {/* icono */}
            <Box direction='column'>
              <Text weight='700' size='10px'>
                SPS Water Service
              </Text>
              <Text weight='400' size='8px'>
                Monthly Water Tax
              </Text>
            </Box>
          </Box>
          <Box direction='column'>
            <Text size='10px' weight='600'>
              March 2023
            </Text>
            <Text size='10px'>$15.00</Text>
          </Box>
        </ItemActivity>
      </Paper>
    </Container>
  );
};
