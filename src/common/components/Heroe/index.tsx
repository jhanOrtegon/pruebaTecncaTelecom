import HeroeC from './component';
import { THeroeC } from './types';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import { enpoints } from '../../../enpoints/index';

const HeroeV: React.FC<THeroeC> = ({ data, isLoading }) => {

    const location = useLocation()
    const router = queryString.parse(location.search)
    let resultado: any = [];
    let loadingHeroe: boolean = true

    if (router.uid) {
        const url = enpoints.getCharacterById(router.uid as string)
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { data, loading }: any = useFetch(url)
        loadingHeroe = loading
        const { results } = data?.data || {}
        resultado = results?.map((e: any) => ({ ...e.thumbnail, name: e.name, id: e.id, comics: e.comics, description: e.description, modified: e.modified }))

        return (
            <HeroeC data={resultado} isLoading={loadingHeroe} />
        )
    }

    resultado = data?.map((e: any) => ({ ...e.thumbnail, name: e.name, id: e.id, comics: e.comics, description: e.description, modified: e.modified }))

    return (
        <HeroeC data={resultado} isLoading={isLoading} />
    )
}

export default HeroeV