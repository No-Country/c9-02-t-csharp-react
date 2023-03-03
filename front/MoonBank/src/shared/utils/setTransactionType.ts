import { PropsActivity } from '../../operations/components';
import { getAccountById } from '../../APIS/getRequest';
import { useAppSelector } from '../../store/hooks';
import { useState } from 'react';

interface Props {
  idDestinationAccount?: number
  typeTransaction?: string;
  quantity: number;
}



export const setTransactionType = <T>({ quantity, typeTransaction, idDestinationAccount }: Props) => {
  const { login } = useAppSelector((state) => state);
  const [color, setColor] = useState('');
  const [result, setResult] = useState('');


  switch (typeTransaction) {
    case 'service':
      setResult(`$ ${quantity} `);
      setColor('var(--LightRed)');
      break;
    case 'reward':
      setResult(serviceTitle === 'Deposit' ? `+ ${quantity} ` : `${quantity} px`);
      setColor(serviceTitle === 'Deposit' ? 'var(--LightGreen)' : 'var(--LightRed)');
      break;
    case 'activity':
      setResult(serviceTitle === 'Deposit' ? `+ ${quantity} ` : `- ${quantity} `);
      setColor(serviceTitle === 'Deposit' ? 'var(--LightGreen)' : 'var(--LightRed)');
    case 'Transfer':
      getAccountById(idDestinationAccount!).then((resp) => {
        // Implementar la lógica para verificar si el dinero que ingresa.
        /*
        
         idSourceAccount = es la cuenta que emitio la transferencia
         idDestinationAccount = es la cuenta que recibió la transferencia

        */
        console.log('entraaqu')
        if (resp.cbU_CVU === login.cbU_CVU) {
          // ingresa dinero
          setResult(`$ ${quantity} `);
          setColor('var(--LightGreen)');
        }

        setResult(`$ ${quantity} `);
        setColor('var(--LightRed)');
      });
      break;
    default:
      setResult('');
      setColor('');
  }

  return {
    result,
    color,
  };
};
