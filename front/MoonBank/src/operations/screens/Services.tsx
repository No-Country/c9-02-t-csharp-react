import { Container, Paper, Title } from '../../shared/styles';
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
      <Paper>
        <Title>Services</Title>

        {services.map((service, index) => (
          <Activity
            key={index}
            icon={electricIcon}
            quantity={service.amount}
            serviceDescription={`Montly ${service.name} tax`}
            serviceTitle={service.name}
            transaction={() => {}}
            typeItem='service'
            

          />
        ))}
      </Paper>
    </Container>
  );
};
