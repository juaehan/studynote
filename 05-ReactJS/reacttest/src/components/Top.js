import React, { memo, useCallback } from 'react';
import { useQueryString } from '../hooks/useQueryString';
import { useSelector, useDispatch } from 'react-redux';
import dayjs from 'dayjs';
import MenuLink from './MenuLink';
import { getCovid } from '../slices/Covid19Slice';

const Top = memo(() => {
    const dispatch = useDispatch();
    const [targetDt, setTargetDt] = React.useState(dayjs().add(-1, 'd').format('YYYY-MM-DD'));
    

    React.useEffect(() => {
        dispatch(getCovid({targetDt: targetDt.replaceAll("-", "")}));
    }, [dispatch, targetDt]);
    
    const {_gte, _lte} = useQueryString();

    const onSearchSubmit = useCallback((e) => {
        e.preventDefault();
        setTargetDt(e.target.value);
    }, [setTargetDt]);
    
    return (
        <div>
            <h1>Covid19 현황</h1>
            <form>
                <input type="date" name='_gte' defaultValue={_gte} onChange={onSearchSubmit} />~
                <input type="date" name='_lte' defaultValue={_lte} onChange={onSearchSubmit} />
                <button type="submit">검색</button>
            </form>
            {(_gte && _lte) && (
                <nav>
                <MenuLink to={`/confirmed_gte=${encodeURIComponent(_gte)}&confirmed_lte=${encodeURIComponent(_lte)}`}>일일확진자</MenuLink>
                <MenuLink to={`/confirmed_acc_gte=${encodeURIComponent(_gte)}&confirmed_acc_lte=${encodeURIComponent(_lte)}`}>누적확진자</MenuLink>
                <MenuLink to={`/active_gte=${encodeURIComponent(_gte)}&active_lte=${encodeURIComponent(_lte)}`}>격리환자</MenuLink>
                <MenuLink to={`/released_gte=${encodeURIComponent(_gte)}&released_lte=${encodeURIComponent(_lte)}`}>격리해제</MenuLink>
                <MenuLink to={`/released_acc_gte=${encodeURIComponent(_gte)}&released_acc_lte=${encodeURIComponent(_lte)}`}>누적격리해제</MenuLink>
                <MenuLink to={`/death_gte=${encodeURIComponent(_gte)}&death_lte=${encodeURIComponent(_lte)}`}>사망자</MenuLink>
                <MenuLink to={`/death_acc_gte=${encodeURIComponent(_gte)}&eath_acc_lte=${encodeURIComponent(_lte)}`}>누적사망자</MenuLink>
            </nav>
            )}
            
        </div>
    );
});
export default Top;