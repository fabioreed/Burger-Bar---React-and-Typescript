import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { IDefaultProviderProps, ILoginFormValues, IRegisterFormValues, IUser, IUserContext } from './@types'
import { api } from '../services/api'

export const UserContext = createContext({} as IUserContext)

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const navigate = useNavigate()
  const [user, setUser] = useState<IUser | null>(null)

  const userRegister = async (formData: IRegisterFormValues) => {
    try {
      const res = await api.post('/users', formData)
      
      setUser(res.data)

      toast.success('Usuário cadastrado!')

      navigate('/')

    } catch (error) {

      console.log(error)

      toast.error('Email já existe!')
    }
  }

  const userLogin = async (formData: ILoginFormValues) => {
    try {
      const res = await api.post('/login', formData)

      setUser(res.data)

      localStorage.setItem('@userID', res.data.user.id)
      localStorage.setItem('@userToken', res.data.accessToken)

      toast.success('Logado!')

      navigate('/shop')

    } catch (error) {

      console.log(error)

      toast.error('Algo deu errado!')
    }
  }

  const logout = () => {
    setUser(null)

    localStorage.removeItem('@userID')
    localStorage.removeItem('@userToken')
    localStorage.removeItem('@userProd')

    navigate('/')
  }

  return (
    <UserContext.Provider value={{ user, userRegister, userLogin, logout }}>
      { children }
    </UserContext.Provider>
  )
}