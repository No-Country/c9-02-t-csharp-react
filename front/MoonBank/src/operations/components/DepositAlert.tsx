import { Paper, Button, Text, FlexContainer, FlexRowContainer } from "../../shared/styles";

export const DeposiAlert = () => {
  return (
    <Paper>
      <FlexContainer>
      <Text></Text>
     <Text></Text>
      </FlexContainer>
     <FlexRowContainer>
      <Button variant='blue'>Confirm</Button>
      <Button variant='orange'>Cancel</Button>
     </FlexRowContainer>
    </Paper>
  );
};