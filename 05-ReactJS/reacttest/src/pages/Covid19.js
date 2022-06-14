import React, { memo } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getCovid19Data } from '../slices/Covid19Slice';

import {useParams} from 'react-router-dom';
import {useQueryString} from '../hooks/useQueryString';

import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';
import MenuLink from '../components/MenuLink';
import LineChartView from '../components/LineChartView';

import dayjs from 'dayjs';

const Covid19 = memo(() => {
    const dispatch = useDispatch();
    const {data, loading, error} = useSelector((state) => state.Covid19Slice);

    // 차트
    const [chartData, setChartData] = React.useState();

    // 시작날짜, 끝날짜를 주소창에 표시
    const {startDate, endDate} = useQueryString();
    const {category} = useParams();

    React.useEffect(() => {
        if(startDate && endDate){
            dispatch(getCovid19Data({
                startDate: startDate,
                endDate: dayjs(endDate).add(1, 'd').toISOString()
            }));
        }
    }, [dispatch, startDate, endDate]);

    React.useEffect(() => {
        if(data){
            setChartData(chartData => {
                const newData = {date: [], value: []};

                data.forEach((v, i) => {
                    newData.date.push(dayjs(v.date).format('MM/DD'));
                    newData.value.push(v[category]);
                });
                return newData;
            })
        }
    })
    return (
        <div>
            
        </div>
    );
});

export default Covid19;