import { Container, Paper, Title } from '../../shared/styles';
import { useEffect, useState } from 'react';

import { Service } from '../../shared/interfaces';
import { ServicesList } from '../components';
import { getServicesList } from '../../APIS/getRequest';
import { useAppSelector } from '../../store/hooks';
import { useNavigate } from 'react-router';

export const Services = () => {
  const NavigateTo = useNavigate();
  const { success } = useAppSelector((state) => state.login);
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    !success && NavigateTo('/', { replace: true, state: { loggedOut: true } });
    const data = getServicesList();
    data.then((resp) => setServices(resp));

  }, []);

  return (
    <Container headerHeight='55px' onLogging={success}>
      <Paper>
        <Title>Services</Title>
        <ServicesList services={services} />
      </Paper>
    </Container>
  );
};
