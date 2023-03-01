import { FieldError, UseFormRegisterReturn } from 'react-hook-form'
import { StyledTextField } from '../../../styles/form'
import { StyledParagraph } from '../../../styles/typography'

interface IInputProps {
  label: string
  error?: FieldError
  register: UseFormRegisterReturn<string>
  type: 'text' | 'email' | 'password'
}
  
const Input = ({ label, error, register, type }: IInputProps) => (
  <fieldset>
    <StyledTextField label={label} type={type} {...register} />
    {error ? <StyledParagraph fontColor='red'>{error.message}</StyledParagraph> : null}
  </fieldset>
)

export default Input
