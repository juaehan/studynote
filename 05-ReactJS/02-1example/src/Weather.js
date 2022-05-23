import React from 'react';
import { useParams } from 'react-router-dom';

const Weather = () => {
    const weather = {
        "mon": ["맑음", "맑음"],
        "tue": ["비", "맑음"],
        "wed": ["맑음", "흐림"],
        "thu": ["맑음", "흐림"],
        "fri": ["흐림", "흐림"],
        "sat": ["비", "맑음"],
        "sun": ["맑음", "맑음"]
    };

    const params = useParams();
    
    const {day} = params;
    const [am, pm] = weather[day];

    return (
        <div>
            <h3>오전</h3>
            <p>{am}</p>
            <h3>오후</h3>
            <p>{pm}</p>
        </div>
    );
};

export default Weather;