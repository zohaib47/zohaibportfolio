import React, {useState ,createContext} from 'react'

export const AuthContext=createContext()

export default function AuthContextProvider(props) {

    const [isAuthenticated, setisAuthenticated] = useState(false)

  return (
    <AuthContext.Provider value={{isAuthenticated, setisAuthenticated}}>
       {props.children}
    </AuthContext.Provider>
  )
}