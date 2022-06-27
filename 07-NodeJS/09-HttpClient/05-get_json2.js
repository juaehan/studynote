import axios from 'axios';

const url = 'http://itpaper.co.kr/demo/covid19/now.php';

/**
    state": [{
        "region": "서울",                       // 지역명
        "confirmed": 3658710,                   // 확진자
        "death": 4886,                          // 사망자
        "released": 281356,                     // 격리해제
        "vaccinatedOnce": 119118,               // 1차 접종자
        "vaccinatedFully": 1283,                // 2차 접종자
        "active": 3372468,                      // 치료중
        "confirmed_prev": 3658110,              // 전날 확진자
        "released_prev": 281356,                // 전날 격리해제
        "death_prev": 4886,                     // 전날 사망자
        "active_prev": 3371868,                 // 전날 치료중
        "vaccinatedOnce_prev": 119118,          // 전날까지의 1차 접종자
        "vaccinatedFully_prev": 1283,           // 전날까지의 2차 접종자
    }]
*/

(async () => {
    let json = null;
    try{
        // axios를 활용ㅎ여 json 데이터 요청
        const response = await axios.get(url);
        json = response.data;
    } catch (error) {
        const errorMsg = "[" + error.response.status + "] " + error.response.statusText
        console.error(errorMsg);
        return;
    }

    let total = 0;
    
    json.state.map((v, i) => {
        const confirmed = v.confirmed - v.confirmed_prev;
        console.log("[" + v.region + "] 확진자: " + confirmed);
        total += confirmed;
    });

    console.log("오늘 총 확진자 수: %d", total);
})();