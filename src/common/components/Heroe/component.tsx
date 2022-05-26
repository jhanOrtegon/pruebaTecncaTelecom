import React from 'react'
import { CardHeroe } from './styles'
import { THeroeC } from './types'
import { useNavigate } from 'react-router-dom';
import SpinnerV from '../Spinner/index';

const HeroeC: React.FC<THeroeC> = ({ data, isLoading }) => {
    const router = useNavigate()
    const heroe = data?.[0]

    return (

        <>
            {
                isLoading
                    ? <SpinnerV />
                    : (
                        <div className='animate__animated animate__fadeIn' style={{ marginTop: '3rem' }}>
                            {
                                heroe
                                    ?
                                    <CardHeroe>
                                        <div style={{ height: '65vh', boxShadow: '0px 0px 15px' }}>
                                            <img src={`${heroe.path}.${heroe.extension}`} alt={heroe.name} style={{ width: '100%', height: '100%' }} />
                                        </div>

                                        <div style={{ boxShadow: '0px 0px 15px' }}>
                                            <div className="card" style={{ height: '100%', justifyContent: 'center', border: '0px' }}>
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item">
                                                        <span className="badge bg-success p-2 mb-2">ID: {heroe.id}</span>
                                                    </li>
                                                    <li className="list-group-item p-4">
                                                        <h1>{heroe.name.toUpperCase()}</h1>
                                                    </li>
                                                    <li className="list-group-item p-3">
                                                        <span>{heroe?.description?.length ? heroe.description : 'Descripcion no Disponible'}</span>
                                                    </li>
                                                    <li className="list-group-item p-0">

                                                        <span className="alert alert-info d-block mt-3">{`${heroe.name} Aparece en ${heroe?.comics?.available} cómics`}</span>

                                                    </li>
                                                    <li className="list-group-item mt-2 d-flex justify-content-center">
                                                        <button
                                                            className='btn btn-dark w-75 p-3 mt-3 '
                                                            onClick={() => {
                                                                router(-1)
                                                            }}
                                                        >
                                                            Regresar
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </CardHeroe>
                                    : <div className='alert alert-danger'>No Hay Resultados</div>
                            }

                        </div>
                    )
            }
        </>


    )
}

export default HeroeC