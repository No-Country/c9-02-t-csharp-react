import { useState } from 'react';


const useToggle = () => {
  
  const [show, setShow] = useState(false);

  const toggleChange = (value: boolean) => {
    setShow(value )
  };

  return {
    show,
    toggleChange,
  };
};

export default useToggle;
