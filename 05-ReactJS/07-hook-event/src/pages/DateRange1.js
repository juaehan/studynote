import React from 'react';
import dayjs from 'dayjs'   // for 날짜 처리

/**
 * 
 * userState를 사용하여 날짜 범위 선택 기능 구현
 */

const DateRange1 = () => {
    const day = dayjs();

    // const [startDate, setStartDate] = React.useState(...);
    // const [endDate, setEndDate] = React.useState(...);

    /**
     * 화면에 출력할 상태값을 JSON 객체 myDate로 정의하고
     * 이 객체의 값을 갱신할 수 있는 함수를 setMyDate로 선언.
     * 변수값 2개를 하나로 묶어서 사용하고 싶으면 JSON 형식으로 사용하기
     */
    const [myDate, setMyDate] = React.useState({
        // format은 날짜형식을 내가 지정할 수 있음
        startDate: day.format('YYYY-MM-DD'),
        endDate: day.format('YYYY-MM-DD')
    });

    return(
        <div>
            <h2>DateRange1</h2>

            <p>
                {myDate.startDate} ~ {myDate.endDate}
            </p>

            <p>
                {/** ...myDate로 객체 복사 후 start를 재정의 */}
                {/** 왜 'start'만 재설정 하는가? end는 오늘 날짜이기 때문 */}
                <button type='button' 
                    onClick={(e) => {
                        setMyDate({...myDate, startDate: day.add(-7, 'd').format('YYYY-MM-DD')});
                    }}>
                    7일
                </button>

                <button type='button' 
                    onClick={(e) => {
                        setMyDate({...myDate, startDate: day.add(-15, 'd').format('YYYY-MM-DD')});
                    }}>
                    15일
                </button>

                <button type='button' 
                    onClick={(e) => {
                        setMyDate({...myDate, startDate: day.add(-1, 'M').format('YYYY-MM-DD')});
                    }}>
                    1개월
                </button>

                <button type='button' 
                    onClick={(e) => {
                        setMyDate({...myDate, startDate: day.add(-3, 'M').format('YYYY-MM-DD')});
                    }}>
                    3개월
                </button>

                <button type='button' 
                    onClick={(e) => {
                        setMyDate({...myDate, startDate: day.add(-6, 'M').format('YYYY-MM-DD')});
                    }}>
                    6개월
                </button>
            </p>
        </div>
    );
};
export default DateRange1;