import React, { PropsWithChildren, useState } from 'react'

export type User = {
  id: number
  createdAt: string
  blocked: boolean
  confirmed: boolean
  email: string
  provider: string
  updatedAt: string
  username: string
}

type AppProviderProps = {
  user: User | undefined
  jwtToken: string | undefined
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>
  setJwtToken: React.Dispatch<React.SetStateAction<string | undefined>>
}

export const AppContext = React.createContext<AppProviderProps>({
  user: undefined,
  jwtToken: undefined,
  setUser: () => {},
  setJwtToken: () => {}
})

export const useAppContext = () => React.useContext(AppContext)

const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | undefined>(undefined)
  const [jwtToken, setJwtToken] = useState<string | undefined>(undefined)

  return (
    <AppContext.Provider value={{ user, jwtToken, setUser, setJwtToken }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
