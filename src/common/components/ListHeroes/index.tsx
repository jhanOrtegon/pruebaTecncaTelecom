import React, { ReactElement } from 'react'
import ListHeroesC from './component';
import useFetch from '../../../hooks/useFetch';
import { enpoints } from '../../../enpoints/index';

const ListHeroesV: React.FC = (): ReactElement => {

    const { data, loading }: any = useFetch(enpoints.ALLCHARACTERS)

    const { results } = data?.data || {}

    const resultado = results?.map((e: any) => ({ ...e.thumbnail, name: e.name, id: e.id }))

    return (
        <ListHeroesC data={resultado} isLoading={loading} />
    )
}

export default ListHeroesV