export interface IDefaultProviderProps {
  children: React.ReactNode
}

export interface IUser {
  id: string
  name: string
  email: string
}

export interface IRegisterFormValues {
  email: string
  password: string
  passwordConfirmation: string
  name: string
}

export interface ILoginFormValues {
  email: string
  password: string
}

export interface IUserContext {
  user: IUser | null
  userRegister: (formData: IRegisterFormValues) => Promise<void>
  userLogin: (formData: ILoginFormValues) => Promise<void>
  logout: () => void
}

export interface IProducts {
  id: number
  name: string
  category: string
  price: number
  img: string
  target: string
}

export interface IInputSearch {
  name: string
}