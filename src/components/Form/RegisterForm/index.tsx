import { useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { formSchema } from './validations'
import Input from '../Input'
import { StyledButton } from '../../../styles/button'
import { StyledForm } from '../../../styles/form'
import { IRegisterFormValues } from '../../../providers/@types'
import { UserContext } from '../../../providers/UserContext'

const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors }} = useForm<IRegisterFormValues>({
    resolver: yupResolver(formSchema)
  })
  const { userRegister } = useContext(UserContext)

  const submit: SubmitHandler<IRegisterFormValues> = (data: IRegisterFormValues) => {
    userRegister(data)
  }

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input label='Seu nome' type='text' register={register('name')} error={errors.name} />
      <Input label ='Digite um email' type='email' register={register('email')} error={errors.email} />
      <Input label='Crie uma senha' type='password' register={register('password')} error={errors.password} />
      <Input label='Confirme sua senha' type='password' register={register('passwordConfirmation')} error={errors.passwordConfirmation} />
      <StyledButton type='submit' $buttonSize='default' $buttonStyle='gray'>
        Cadastrar
      </StyledButton>
    </StyledForm>
  )
}

export default RegisterForm
