import { useState } from 'react';

const useToggle = (initState?: boolean) => {
  const init = initState !== undefined ? initState : false;
  const [show, setShow] = useState(init);

  const toggleChange = (value: boolean) => {
    setShow(value);
  };

  return {
    show,
    toggleChange,
  };
};

export default useToggle;
