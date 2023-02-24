import { Box, Container, ItemActivity, Paper, Text } from '../../shared/styles';

import { Activity } from '../components';
import electricIcon from '../../shared/assets/eletricIcon.svg'
import waterIcon from '../../shared/assets/waterIcon.svg'

export const Services = () => {
  return (
    <Container>
      <Paper>
        <Text weight='700'>Services</Text>
        <Activity icon={waterIcon} date='March 2023' quantity={15.00} serviceTitle='SPS Water Service' serviceDescription='Monthly Water Tax'/>
        <Activity date='March 2023' icon={ electricIcon} quantity={31.89} serviceDescription='Montly Electricity tax' serviceTitle='ENEE'/>
      </Paper>
    </Container>
  );
};
