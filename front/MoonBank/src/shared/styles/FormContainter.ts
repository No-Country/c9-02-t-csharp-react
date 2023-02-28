import styled from 'styled-components';

type FormStyleProps = {
  formGap?: string;
};

export const FormContainer = styled.form<FormStyleProps>`
  display: flex;
  width: 100%;
  height: min-content;
  flex-direction: column;
  gap: ${({ formGap }) => (formGap ? formGap : '0px')};
`;
