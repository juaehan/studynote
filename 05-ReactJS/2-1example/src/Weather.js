import React from "react";
import {useParams} from 'react-router-dom';

const Weather = () => {

    const weather = {
        "mon" : ["맑음", "맑음"],
        "tue" : ["비", "맑음"],
        "wed" : ["맑음", "흐림"],
        "thu" : ["맑음", "흐림"],
        "fri" : ["흐림", "흐림"],
        "sat" : ["비", "맑음"],
        "sun" : ["맑음", "맑음"],
    };

    /* 파라미터 추출 */
    const params = useParams();
    console.log(params);    // {day: "mon"}
    
    /* 요일 추출 */
    const {day} = params;
    console.log(day);   // mon

    /* 추출한 요일값을 key로 사용하여 weather에서 해당 요일에 해당하는 날씨를 비구조 문법으로 추출 */
    const [am, pm] = weather[day];

    return (
        <div>
            <h3>오전</h3>
            <p>{am}</p>
            <h3>오후</h3>
            <p>{pm}</p>
        </div>
    )
};
export default Weather;