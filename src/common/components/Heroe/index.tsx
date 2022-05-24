import HeroeC from './component';
import { THeroeC } from './types';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import { enpoints } from '../../../enpoints/index';

const HeroeV: React.FC<THeroeC> = ({ data }) => {

    const location = useLocation()
    const router = queryString.parse(location.search)

    if (router.uid) {
        const url = enpoints.getCharacterById(router.uid as string)
        console.log(url);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { data } = useFetch(url)
        console.log(data);
    }
    return (
        <HeroeC data={data} />
    )
}

export default HeroeV