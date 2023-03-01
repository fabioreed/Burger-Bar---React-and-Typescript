import { useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { ILoginFormValues } from '../../../providers/@types'
import { UserContext } from '../../../providers/UserContext'
import { StyledButton } from '../../../styles/button'
import { StyledForm } from '../../../styles/form'
import Input from '../Input'

const LoginForm = () => {

  const schema = yup.object({
    email: yup.string().email().required('Campo obrigatório'),
    password: yup.string().required('Campo obrigatório')
  })

  const { register, handleSubmit, formState: { errors } } = useForm<ILoginFormValues>({
    resolver: yupResolver(schema)
  })
  
  const { userLogin } = useContext(UserContext)

  const submit: SubmitHandler<ILoginFormValues> = (data: ILoginFormValues) => {
    userLogin(data)
  }

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input label='Digite seu e-mail' type='email' register={register('email')} error={errors.email} />
      <Input label='Digite a sua senha' type='password' register={register('password')} error={errors.password} />
      <StyledButton type='submit' $buttonSize='default' $buttonStyle='green'>
        Entrar
      </StyledButton>
    </StyledForm>
  )
}

export default LoginForm
