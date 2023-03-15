import styled, { css } from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger'

interface ButtonProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'blue',
  success: 'green',
  danger: 'red',
}

export const ButtonContainer = styled.button<ButtonProps>`
  width: 100px;
  height: 40px;

  ${({ variant, theme }) =>
    css`
      background-color: ${buttonVariants[variant]};
      color: ${theme.secondary};
    `}
`;
