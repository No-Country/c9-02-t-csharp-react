import { Container, Paper, Text } from '../../shared/styles';
import { useEffect, useState } from 'react';

import { Activity } from '../components';
import { Service } from '../../shared/interfaces';
import electricIcon from '../../shared/assets/eletricIcon.svg';
import { getServicesList } from '../../APIS/getRequest';

export const Services = () => {
  const [services, setServices] = useState<Service[]>([]);
  useEffect(() => {
    const data = getServicesList();
    data.then((resp) => setServices(resp));
  }, []);

  return (
    <Container>
      <Container marginLeft={['300px', '0']}>
        <Paper justifyContent='center' alignContent='center' direction='column' marginTop='2.5rem'>
          <Text weight='700'>Services</Text>

          {services.map((service, index) => (
            <Activity
              key={index}
              date='March 2023'
              icon={electricIcon}
              quantity={service.amount}
              serviceDescription={`Montly ${service.name} tax`}
              serviceTitle={service.name}
              idService={service.idAccountService}
            />
          ))}
        </Paper>
      </Container>
    </Container>
  );
};
