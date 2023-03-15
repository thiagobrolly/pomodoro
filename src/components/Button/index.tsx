import { ButtonContainer } from "./styles";

interface ButtonProps{
  variant?: 'primary' | 'secondary' | 'success' | 'danger'
}

export function Button({variant = 'primary'}: ButtonProps){
  return (
    <ButtonContainer variant={variant}>Button</ButtonContainer>
  )
}