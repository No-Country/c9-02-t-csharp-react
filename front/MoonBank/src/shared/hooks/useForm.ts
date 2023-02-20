import { useState } from 'react';

export const useForm = <T>(initialState: T) => {
  const [formInputState, SetFormInputState] = useState(initialState);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    SetFormInputState({
      ...formInputState,
      [event.target.name]: event.target.value,
    });
  };
  const ResetForm = () => SetFormInputState(initialState);

  return {
    ...formInputState,
    formInputState,
    handleInputChange,
    ResetForm,
  };
};
