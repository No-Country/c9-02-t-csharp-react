import { DialogBox, DialogBoxProps, PayRequest, Service, useToggle } from '../../../shared';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';

import { Activity } from '../Activity';
import { PayService } from '../../../APIS/TransactionRequests';
import { retrieveUserByCBU } from '../../../store/features/loginSlice';
import { setIconService } from '../../../shared/utils';
import { useState } from 'react';

interface Props {
  services: Service[];
}

export const ServicesList = ({ services }: Props) => {
  const dispatch = useAppDispatch();
  const { login } = useAppSelector((state) => state);
  const { show, toggleChange } = useToggle();
  const [idService, setIdService] = useState(0);

  const data: PayRequest = {
    idService,
    idSourceAccount: 0,
    typeTransaction: 1,
    destinationAccountCBU_CVU: login.cbU_CVU,
  };
  const handlePerform = () => {
    PayService(data);
    dispatch(retrieveUserByCBU(login.cbU_CVU));
    toggleChange(false);
  };

  const props: DialogBoxProps = {
    dialogType: 'warning',
    isOpen: show,
    title: 'Confirm transfer',
    message: 'Would you like to confirm this transaction?',
    extraMessage: 'This action cannot be reverted after confirmation!',
    to: '/deposit',
    onConfirmAction: () => handlePerform(),
    onCancelAction: () => toggleChange(false),
  };

  const setTransaction = (idService: number) => {
    setIdService(idService);
    toggleChange(true);
  };
  return (
    <>
      {services.map((service, index) => (
        <Activity
          key={index}
          icon={setIconService(service.idService)!}
          quantity={service.amount}
          serviceDescription={`Montly ${service.name} tax`}
          serviceTitle={service.name}
          transaction={() => setTransaction(service.idService)}
          typeItem='service'
          idService={service.idService}
        />
      ))}
      {show && <DialogBox {...props} />}
    </>
  );
};
