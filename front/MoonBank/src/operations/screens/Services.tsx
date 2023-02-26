import { Container, Paper, Text } from '../../shared/styles';
import { useEffect, useState } from 'react';

import { Activity } from '../components';
import { Service } from '../../shared/interfaces';
import electricIcon from '../../shared/assets/eletricIcon.svg';
import { getServicesList } from '../../APIS/getRequest';
import waterIcon from '../../shared/assets/waterIcon.svg';

export const Services = () => {
  const [services, setServices] = useState<Service[]>([]);
  useEffect(() => {
    const data = getServicesList();
    data.then((resp) => setServices(resp));
  }, []);

  return (
    <Container>
      <Paper>
        <Text weight='700'>Services</Text>

        {services.map((service, index) => (
          <Activity
            key={index}
            date='March 2023'
            icon={electricIcon}
            quantity={service.amount}
            serviceDescription={`Montly ${service.name} tax`}
            serviceTitle={service.name}
          />
        ))}
      </Paper>
    </Container>
  );
};
