import React, { ReactElement, useState } from 'react'
import { Link } from 'react-router-dom'
import { ContainerHeroes, Heroe, HeroeBody, HeroeFooter } from './styled'
import { TListHeroesC } from './types'
import SpinnerV from './../Spinner/index';
import InfiniteScroll from 'react-infinite-scroll-component';


const ListHeroesC: React.FC<TListHeroesC> = ({ data, isLoading, setLimit }): ReactElement => {

    return (
        <>
            {
                isLoading
                    ? <SpinnerV />
                    : (
                        <ContainerHeroes className='animate__animated animate__fadeIn'>

                            <InfiniteScroll className='infiniteScroll'
                                dataLength={100}
                                hasMore={data?.length === 100 ? false : true}
                                next={() => setLimit((limit: any) => limit + 20)}
                                loader={<SpinnerV />}
                            >
                                {
                                    data?.map(heroe => (
                                        <Heroe key={heroe.id} className='animate__animated animate__fadeIn' >
                                            <HeroeBody>
                                                <img src={`${heroe.path}.${heroe.extension}`} alt={heroe.name} style={{ width: '100%', height: '100%' }} />
                                            </HeroeBody>

                                            <HeroeFooter className='p-0'>
                                                <h3 className='p-3 m-0 d-flex justify-content-center align-items-center'>{heroe.name}</h3>
                                                <button className='btn btn-dark w-100 rounded-0 p-3'><Link style={{ textDecoration: 'none', color: 'white' }} to={`/dashboard/heroe?uid=${heroe.id}`}><strong>MAS INFORMACION</strong> </Link></button>
                                            </HeroeFooter>
                                        </Heroe >
                                    ))
                                }
                            </InfiniteScroll>
                        </ContainerHeroes >
                    )
            }

        </>

    )
}

export default ListHeroesC