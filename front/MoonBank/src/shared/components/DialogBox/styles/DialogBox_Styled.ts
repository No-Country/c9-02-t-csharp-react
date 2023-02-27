import styled, { css } from 'styled-components';
import { DialogStyledProp } from '../components/DialogBoxTypes';

export const DialogBox_Styled = styled.dialog<DialogStyledProp>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;

  position: relative;
  min-width: 240px;
  @media screen and (min-width: 0px) and (max-width: 560px) {
    width: 80%;
  }
  @media screen and (min-width: 560px) {
    width: 420px;
  }
  height: min-content;

  border: none;
  border-radius: 12px;
  background: var(--Dark);
  box-shadow: var(--MoonBoxShadow);

  > h4 {
    color: var(--White);
    @media screen and (min-width: 0px) and (max-width: 560px) {
      font-size: 20px;
    }
    @media screen and (min-width: 560px) {
      font-size: 24px;
    }
  }

  > .DialogBox__Message,
  > .DialogBox__ExtraMessage,
  > .DialogBox__Actions {
    width: 100%;
  }

  > .DialogBox__Message {
    display: grid;
    grid-template-columns: 35px 1fr;
    gap: 20px;
    > svg {
      align-self: center;
      width: 35px;
      height: 35px;
      ${(props) =>
        props.dialogType === 'information'
          ? css`
              color: var(--BlueG);
            `
          : props.dialogType === 'warning'
          ? css`
              color: var(--Warn);
            `
          : css``}
    }
    > span.DB__Message {
      display: inline-block;
      @media screen and (min-width: 0px) and (max-width: 560px) {
        font-size: 14px;
      }
      @media screen and (min-width: 560px) {
        font-size: 16px;
      }
    }
  }

  > .DialogBox__ExtraMessage {
    text-align: center;

    > .DB__Note {
      font-weight: bold;
    }

    @media screen and (min-width: 0px) and (max-width: 560px) {
      font-size: 12px;
    }
    @media screen and (min-width: 560px) {
      font-size: 14px;
    }
  }

  > .DialogBox__Actions {
    display: grid;
    gap: 0 5px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 45px;
    > button.DB__Btn {
      border: none;
      border-radius: 5px;
      display: inline-block;
      font-weight: bold;
      color: var(--White);
      transition: background 0.2s;
      cursor: pointer;
    }
    > button.DB__BtnConfirm {
      background: var(--Primary);
      &:hover {
        background: var(--Blue);
      }
      &:active {
        background: var(--BlueL);
      }
    }
    > button.DB__BtnCancel {
      background: var(--OrangeD);
      &:hover {
        background: var(--Warn);
      }
      &:active {
        background: var(--OrangeL);
      }
    }
  }
`;
