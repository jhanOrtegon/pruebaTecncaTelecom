import React from 'react'
import HeroeV from '../../common/components/Heroe';
import { BoxSearch } from './styled';
import { TSearchC } from './types';

const SearchC: React.FC<TSearchC> = ({ data: { handleChange, handleSubmit, stateForm: { inputHeroe }, dataHeroe: heroe, isLoading } }) => {
    return (
        <BoxSearch className='animate__animated animate__fadeIn'>
            <div>
                <h3>Busca a tu heroe Preferido</h3>
                <form>
                    <input onChange={handleChange} name='inputHeroe' className='form-control mb-2 p-3' type="text" placeholder='example: loki' value={inputHeroe} />
                </form>
            </div>
            <div>
                {
                    heroe?.data?.count
                        ? <HeroeV data={heroe?.data?.results} isLoading={isLoading} />
                        :
                        <div className='mt-4'>
                            <h3>Resultados</h3>
                            <hr />
                            <div className='animate__animated animate__fadeIn  alert alert-info text-center'>No hay Resultados</div>
                        </div>
                }
            </div>
        </BoxSearch>
    )
}

export default SearchC