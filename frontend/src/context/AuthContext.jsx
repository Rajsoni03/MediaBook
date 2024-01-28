import { createContext, useState, useEffect } from 'react'


const AuthContext = createContext()
export default AuthContext


export const AuthProvider = ({ children }) => {
    let [user, setUser] = useState(null)
    let [authTokens, setauthTokens] = useState(null)

    let loginUser = async (e) => {
        e.preventDefault()

        let response = await fetch('http://192.168.0.102/api/user/token/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "username": e.target.username.value,
                "password": e.target.password.value
            })
        })
        let data = await response.json()
        if (response.status === 200){
            console.log(data)
        }
    }

    let contextData = {
        loginUser: loginUser
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )

}