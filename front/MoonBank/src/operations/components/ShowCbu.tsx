import { FlexRowContainer, UserInfoContainer , Text} from '../../shared'
import hideEyeIcon from '../../shared/assets/hideEyeIcon.svg';
import { useToggle } from '../../shared';
 type Props = {
    cbu: string
 }
const ShowCbu = ({cbu}:Props) => {
    
    const {show, toggleChange} = useToggle()
  return (
    <UserInfoContainer>
    <div>
      <h3>CBU:</h3>
    </div>
    <FlexRowContainer space='between'>
      <img src={hideEyeIcon} alt='eye icon' style={{cursor: 'pointer'}} onClick={() => toggleChange(!show)}/>
      <Text>  {show ? cbu : '*********** ***********'}</Text>
    </FlexRowContainer>
  </UserInfoContainer>
  )
}

export default ShowCbu
