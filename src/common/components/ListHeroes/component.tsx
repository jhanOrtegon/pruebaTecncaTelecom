import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { ContainerHeroes, Heroe, HeroeBody, HeroeFooter } from './styled'
import { TListHeroesC } from './types'
import SpinnerV from './../Spinner/index';

const ListHeroesC: React.FC<TListHeroesC> = ({ data, isLoading }): ReactElement => {

    return (
        <>
            {
                isLoading
                    ? <SpinnerV />
                    : (
                        <ContainerHeroes className='animate__animated animate__fadeIn'>

                            {
                                data?.map(heroe => (
                                    <Heroe key={heroe.id} className='animate__animated animate__fadeIn' >
                                        <HeroeBody>
                                            <img src={`${heroe.path}.${heroe.extension}`} alt={heroe.name} style={{ width: '100%', height: '250px' }} />
                                        </HeroeBody>

                                        <HeroeFooter className='p-0'>
                                            <h3 className='p-3'>{heroe.name}</h3>
                                            <button className='btn btn-dark w-100 rounded-0 p-3'><Link style={{ textDecoration: 'none', color: 'white' }} to={`/dashboard/heroe?uid=${heroe.id}`}>Mas Informacion</Link></button>
                                        </HeroeFooter>
                                    </Heroe >
                                ))
                            }
                        </ContainerHeroes >
                    )
            }

        </>

    )
}

export default ListHeroesC