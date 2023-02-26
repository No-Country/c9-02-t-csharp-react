import { useState } from 'react';

const useToggleCbu = () => {
  const [showCbu, setShowCbu] = useState(false);

  const toggleCbu = () => {
    setShowCbu((prev) => !prev);
  };

  return {
    showCbu,
    toggleCbu,
  };
};

export default useToggleCbu;
