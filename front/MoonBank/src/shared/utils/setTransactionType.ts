import { getAccountById } from '../../APIS/getRequest';
import { useAppDispatch } from '../../store/hooks';

const dispatch = useAppDispatch();

export const setTransactionType = (idDestination: number, typeTransaction: string) => {
  
  const userDestination = getAccountById(idDestination);


};
