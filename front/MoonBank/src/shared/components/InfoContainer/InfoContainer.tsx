import { useToggle } from '../../hooks';
import { FlexContainer, GridContainer, SubTitle, Text } from '../../styles';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { ShowHideButton } from './ShowHideButton';
import { InfoContainerProps, InfoLayoutProps } from './InfoContainerProps';

const InfoContainer = (props: InfoContainerProps) => {
  const { show, toggleChange } = useToggle(props.initShowState);
  const layout: InfoLayoutProps =
    props.canHide && props.containerLayout === 'Spaced'
      ? { gridTemp: '50px 1fr', btnJustify: 'self-start', textJustify: 'self-end' }
      : props.canHide && props.containerLayout === 'Together'
      ? { gridTemp: '1fr 1fr', btnJustify: 'self-end', textJustify: 'self-start' }
      : props.canHide
      ? { gridTemp: '50px 1fr', btnJustify: 'self-start', textJustify: 'self-end' }
      : { gridTemp: '1fr', btnJustify: 'self-start', textJustify: 'self-end' };
  const handleShowInfo = () => {
    toggleChange(!show);
  };

  const hiddenInfo = () => {
    let HiddenText: string = '';
    if (props.children !== undefined && typeof props.children === 'string')
      for (let i = 0; i < props.children.length; i++) {
        HiddenText += '*';
      }

    if (props.children !== undefined && typeof props.children === 'number') {
      const parsedNumber = props.children.toString();
      for (let i = 0; i < parsedNumber.length; i++) {
        HiddenText += '*';
      }
    }
    return HiddenText;
  };

  return (
    <FlexContainer flexGap='5px' flexWidth='100%' className='InfoContainer'>
      {props.infoSubtitle && <SubTitle>{props.infoSubtitle}</SubTitle>}
      <GridContainer direction='column' directionTemplate={layout.gridTemp}>
        {props.canHide && (
          <ShowHideButton styleProps={props.styleProps} onClick={handleShowInfo} justifySelf={layout.btnJustify}>
            {show ? <IoEye /> : <IoEyeOff />}
          </ShowHideButton>
        )}
        <Text justifySelf={layout.textJustify} fontSize={props.fontDataSize} fontWeight={props.fontWeight}>
          {show ? props.children : hiddenInfo()}
        </Text>
      </GridContainer>
    </FlexContainer>
  );
};

export default InfoContainer;
