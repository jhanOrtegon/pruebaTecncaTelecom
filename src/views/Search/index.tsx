import { FormEvent, useEffect, useMemo, useState } from 'react'
import useForm from '../../hooks/useForm';
import SearchC from './component';
// import getHeroeByName from '../../selectors/getHeroeByName';
import useFetch from '../../hooks/useFetch';
import { enpoints } from '../../enpoints';

const SearchV = () => {
    const [handleChange, stateForm, resetForm] = useForm({ 'inputHeroe': '' })
    const { inputHeroe } = stateForm
    const [dataHeroe, setDataHeroe] = useState({})

    // const dataHeroeByName = useMemo(() => getHeroeByName(inputHeroe), [inputHeroe]) || {}

    const url = enpoints.getCharacterByName(inputHeroe)
    const { data: dta, loading: isLoading } = useFetch(url)


    // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    //     e.preventDefault()
    //     if (inputHeroe.trim().length < 4) {
    //         alert('minimo 4 caracteres')
    //         setDataHeroe({})
    //         return
    //     }

    //     setDataHeroe(dta)

    //     resetForm()
    // }


    useEffect(() => {
        setDataHeroe(dta)
    }, [dta])

    const data = {
        handleChange, stateForm, dataHeroe, isLoading
    }


    return (
        <SearchC data={data} />
    )
}

export default SearchV
