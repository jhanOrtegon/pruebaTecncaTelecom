import React from 'react'
import { Button, Hijo1, Hijo2, Padre } from './styles'
import { TLoginC } from './types'
import { Fondo2 } from '../../Routers/styled';

const LoginC: React.FC<TLoginC> = ({ handleChange, handleSubmit, stateLogin }) => {

    return (
        <Fondo2>

            <Padre className='container  animate__animated animate__backInDown'>

                <Hijo2>
                    <header >
                        <img src={'/assets/logo/logoMarvel.png'} width={'100%'} height='100%' alt="" />
                    </header>
                    <form onSubmit={handleSubmit} className='px-3 mt-4 text-dark  d-flex justify-content-between flex-column' >


                        <div>
                            <div className="form-floating mb-3">
                                <input onChange={handleChange} autoComplete='off' type="email" className="form-control" id="floatingInput" name='user' placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input onChange={handleChange} autoComplete='off' type="password" className="form-control" id="floatingInput" name='password' placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Password</label>
                            </div>
                        </div>

                        <Button type='submit' className='btn mt-4 mb-2 w-100 p-3'><h5>INGRESAR</h5></Button>

                        {
                            stateLogin
                            &&
                            <div className='alert alert-success'>
                                Login Exitioso
                            </div>
                        }

                        {

                            stateLogin === false
                            &&
                            <div className='alert alert-danger mb-2 text-center'>
                                Error En Login
                            </div>
                        }

                    </form>
                </Hijo2>

                <Hijo1>

                </Hijo1>

            </Padre>

        </Fondo2 >
    )
}

export default LoginC
