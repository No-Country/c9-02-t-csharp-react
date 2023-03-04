import ElectricityIcon from '../assets/eletricIcon.svg';
import GasIcon from '../assets/gasIcon.svg';
import HomeIcon from '../assets/segIcon.svg';
import InternetIcon from '../assets/network.svg';
import MunicipalIcon from '../assets/impIcon.svg';
import PhoneIcon from '../assets/phoneIcon.svg';
import WaterIcon from '../assets/waterIcon.svg';

export const setIconService = (idService: number): string | undefined => {
  switch (idService) {
    case 1:
      return GasIcon;
    case 2:
      return WaterIcon;
    case 3:
      return ElectricityIcon;
    case 4:
      return InternetIcon;
    case 5:
      return PhoneIcon;
    case 6:
      return MunicipalIcon;
    case 7:
      return HomeIcon;
    default:
      break;
  }
};
