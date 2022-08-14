import React, {
    createContext,
    useContext,
    ReactNode,
    useState,
} from "react";  

import auth from '@react-native-firebase/auth'
import { Alert } from "react-native";

type AuthProviderProps = {
    children: ReactNode;
}

type AuthContextData = {
    signIn: (email: string, password: string) => Promise<void>;
    isLogging: boolean;
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
    const [isLogging, setIsLogging] = useState(false)

    async function signIn(email: string, password: string) {
        if (!email || !password) {
            return Alert.alert('Login', 'Informe o email e a senha.')
        }

        setIsLogging(true)

        auth()
        .signInWithEmailAndPassword(email, password)
        .then(account => {
            console.log(account)
        })
        .catch(err => {
            const { code } = err;
            if (code === 'auth/user-not-found' || code === 'auth/wrong-password') {
                return Alert.alert('Login', 'Email e/ou senha inválida.')
            } else {	
                return Alert.alert('Login', 'Não foi possível realizar o login');
            }
        })
        .finally(() => setIsLogging(false))
    }

    return (
        <AuthContext.Provider value={{
            signIn,
            isLogging
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };
