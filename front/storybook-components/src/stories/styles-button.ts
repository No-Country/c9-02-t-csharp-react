import styled from "styled-components";

interface ButtonProps {
  primary?: boolean;
  secondary?: boolean;
  size?: "small" | "medium" | "large";
  label: string;
}

export const ButtonContainer = styled.button<ButtonProps>`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  ${(props) =>
    props.primary &&
    `
  color: white;
  background-color: #1ea7fd;
  `}

  ${(props) =>
    props.secondary &&
    `
  color: #333;
  background-color: red;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  `}

  ${(props) =>
    props.size === "small" &&
    `
    font-size: 12px;
    padding: 10px 16px;
    background-color: blue;
  `}

  ${(props) =>
    props.size === "medium" &&
    `
  font-size: 14px;
  padding: 11px 20px;
  background-color: green;
  `}

  ${(props) =>
    props.size === "large" &&
    `
  font-size: 16px;
  padding: 12px 24px;
  background-color: red;
  `}
`;
