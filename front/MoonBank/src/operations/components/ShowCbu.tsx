import { FlexRowContainer, Text, SubTitle, FlexContainer } from '../../shared';
import hideEyeIcon from '../../shared/assets/hideEyeIcon.svg';
import { useToggle } from '../../shared';

type Props = {
  cbu: string;
};

const ShowCbu = ({ cbu }: Props) => {
  const { show, toggleChange } = useToggle();
  return (
    <FlexContainer flexGap='5px' flexWidth='100%'>
      <SubTitle>CBU:</SubTitle>
      <FlexRowContainer space='between'>
        <img src={hideEyeIcon} alt='eye icon' style={{ cursor: 'pointer' }} onClick={() => toggleChange(!show)} />
        <Text fontSize='12px'> {show ? cbu : '*********** ***********'}</Text>
      </FlexRowContainer>
    </FlexContainer>
  );
};

export default ShowCbu;
