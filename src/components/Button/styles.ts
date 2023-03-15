import styled, { css } from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger'

interface ButtonProps {
  variant: ButtonVariant;
}

export const ButtonContainer = styled.button<ButtonProps>`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  border: none;
  margin: 8px;

  ${({ variant, theme }) =>
    css`
      background-color: ${theme['green-500']};
      color: ${theme.white};
    `}
`;
