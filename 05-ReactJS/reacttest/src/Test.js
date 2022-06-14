import React, { memo } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getCovid } from './slices/Covid19Slice';
import dayjs from 'dayjs';
import LineChartView from './components/LineChartView';

const Test = memo(() => {
    const dispatch = useDispatch();
    const [chartData, setChartData] = React.useState();
    const {data, loading, error} = useSelector((state) => state.covid);

    React.useEffect(() => {
        dispatch(getCovid({}));
    }, [dispatch]);

    React.useEffect(() => {
        const newData = {
            date: [],
            confirmed : []
        };
        data.forEach((v, i) => {
            newData.date.push(v.date);
            newData.confirmed.push(v.confirmed);
        });
        setChartData(newData);

    })
    return (
        <>
            {error ? JSON.stringify(error) : (
                <>
                    <h1>Documents</h1>
                    <LineChartView chartData={chartData} />
                </>
            )}
        </>
        
    )
});

export default Test;