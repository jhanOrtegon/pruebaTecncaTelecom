import React, { ReactElement } from 'react'
import ListHeroesC from './component';
import useFetch from '../../../hooks/useFetch';
import { enpoints } from '../../../enpoints/index';

const ListHeroesV: React.FC = (): ReactElement => {

    const { data }: any = useFetch(enpoints.ALLCHARACTERS)

    const { results } = data?.data || {}

    const resultado = results?.map((e: any) => ({ ...e.thumbnail, name: e.name, id: e.id }))

    console.log(data);
    return (
        <ListHeroesC data={resultado} />
    )
}

export default ListHeroesV