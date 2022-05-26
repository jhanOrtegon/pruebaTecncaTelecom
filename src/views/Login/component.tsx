import React from 'react'
import { Button, Hijo1, Hijo2, Padre } from './styles'
import { TLoginC } from './types'
import { Fondo } from '../../Routers/styled';

const LoginC: React.FC<TLoginC> = ({ handleChange, handleSubmit }) => {

    return (
        <Fondo>

            <Padre className='container  animate__animated animate__backInDown'>

                <Hijo2>
                    <header className='mb-3' style={{ height: '30%' }}>
                        <img src={'/assets/logo/logoMarvel.png'} width={'100%'} height='100%' alt="" />
                    </header>
                    <form onSubmit={handleSubmit} className='text-dark h-100 d-flex justify-content-between flex-column' style={{ height: '70%' }}>


                        <div style={{
                            padding: '20px', marginTop: '70px'
                        }}>
                            <div className="form-floating mb-3">
                                <input onChange={handleChange} autoComplete='off' type="email" className="form-control" id="floatingInput" name='user' placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input onChange={handleChange} autoComplete='off' type="password" className="form-control" id="floatingInput" name='password' placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Password</label>
                            </div>
                        </div>

                        <Button type='submit' className='btn mt-4 w-100 p-5'><h5>INGRESAR</h5></Button>
                    </form>
                </Hijo2>

                <Hijo1>

                </Hijo1>

            </Padre>

        </Fondo >
    )
}

export default LoginC
