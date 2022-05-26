import React, { ReactElement, useState } from 'react'
import ListHeroesC from './component';
import useFetch from '../../../hooks/useFetch';
import { enpoints } from '../../../enpoints/index';

const ListHeroesV: React.FC = (): ReactElement => {

    const [limit, setLimit] = useState(20)

    const { data, loading }: any = useFetch(enpoints.getAllCharacters(limit))

    const { results } = data?.data || {}

    const resultado = results?.map((e: any) => ({ ...e.thumbnail, name: e.name, id: e.id }))

    return (
        <ListHeroesC data={resultado} isLoading={loading} setLimit={setLimit} />
    )
}

export default ListHeroesV