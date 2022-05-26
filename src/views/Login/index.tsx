import React from 'react'
import LoginC from './component'
import { TValidateForm } from './types'
import { useContext, useState } from 'react';
import { loginContext } from '../../context/auth/loginContext';
import { EAuth } from '../../store/auth/enum';
import { useNavigate } from 'react-router-dom';
import { getUserLogin } from '../../api/index.';

const LoginV = () => {

    const router = useNavigate()

    const [stateLogin, setStateLogin] = useState<null | boolean>()

    const { dispatch } = useContext(loginContext)

    const [loginValues, setLoginValues] = useState({
        user: '', password: ''
    })

    const { user, password } = loginValues

    const handleChange = (e: any): void => {
        setLoginValues({ ...loginValues, [e.target.name]: e.target.value })
    }

    const formValid: TValidateForm = (user, password): boolean => {
        if (!user.trim().length || !password.trim().length) {
            alert('Verifique los Datos Ingresados')
            return false
        }

        return getUserLogin(user, password)

    }

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault()

        if (formValid(user, password)) {

            const action = {
                type: EAuth.login,
                payload: {
                    user, password
                }
            }
            setStateLogin(true)
            dispatch!(action)
            router('/dashboard/marvel', { replace: true })
        }

        setStateLogin(false)


    }

    return (
        <LoginC
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            stateLogin={stateLogin}
        />

    )
}

export default LoginV
