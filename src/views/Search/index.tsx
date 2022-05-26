import { useEffect, useState } from 'react'
import useForm from '../../hooks/useForm';
import SearchC from './component';
import useFetch from '../../hooks/useFetch';
import { enpoints } from '../../enpoints';

const SearchV = () => {
    const [handleChange, stateForm] = useForm({ 'inputHeroe': '' })
    const { inputHeroe } = stateForm
    const [dataHeroe, setDataHeroe] = useState({})

    const url = enpoints.getCharacterByName(inputHeroe)
    const { data: dta, loading: isLoading } = useFetch(url)

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
