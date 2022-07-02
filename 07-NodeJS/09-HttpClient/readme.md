# HTTP Client
URL을 통해서 다른 웹 컨텐츠에 접속하여 내용을 가져오는 기술이다.
- URL이 웹 페이지인 경우 HTML코드를 가져온다.
  - 웹 페이지가 실행되는 과정에서 JS에 의해 동적으로 변경되는 내용은 가져오지 못한다.
- URL이 text, xml, json인 경우 원본 내용을 가져온다.

## #01. 웹브라우저에서의 HTTP Client
웹 브라우저에서는 XMLHttpRequest 클래스를 통해서 같은 기능을 구현할 수 있다. --> Ajax

기존의 웹 페이지는 새로운 컨텐츠를 표시하기 위해서는 Page fefresh가 필수였으나, Ajax가 사용되면 새로고침 없이 다른 URL의 내용을 js만으로 로딩해서 특정 DOM요소에 출력할 수 있게 된다.

단, 브라우저 자체의 CORS 제약으로 인해 현재 브라우저가 접근하고 있는 HTML이 속한 도메인과 다른 도메인의 URL은 접근 불가하다.

## #02. 백엔드에서의 HTTP Client
XMLHttpRequest가 아닌 일반 응용프로그램이 사용하는 Socket 통신 기술을 사용하기 때문에 어떤 도메인으로 접근 가능하다.

## #03. HTTP통신을 위한 확장 모듈 사용하기
원래 Node.js에서는 HTTP라는 내장 모듈을 사용하지만 사용성이 다소 번거롭기 때문에 코드의 효율적인 작성을 위해 개선된 라이브러리가 배포되고 있다.
1. axios(범용, 권장)
2. requests(Node.js용)
```shell
$ yarn add axios
```

---

<br />

### (1) http모듈 이용하기
```js
import http from 'http';

const url = 'http://itpaper.co.kr/data/simple_text.txt';

var req = http.get(url, function(res){
    var resData = '';

    res.on('data', function(chunk){
        resData += chunk;
    });

    res.on('end', function(){
        console.debug(resData);
    });
});

req.on('error', function(err){
    console.error(err);
    console.error('에러발생 : ' + err.message);
})

/*
    Hello Python~!!!
    안녕하세요. 파이썬~!!!
*/
```

<br />

### (2) Promise 이용하기
```js
import axios from 'axios';

const url = 'http://itpaper.co.kr/data/simple_text.txt';

axios
    .get(url)
    .then(function(response){
        console.log('Promise방식 - ' + response.data);
    })
    .catch(function(err){
        // 지정된 url로의 요청에 실패한 경우 호출된다.
        // 에러 내용에서 상태코드(숫자)와 에러 메시지만 추출
        // [HTTP 상태코드] 200(OK), 404(Page Not Found), 401(권한없음, 로그인필요), 403(접근)
    })
    .finally(function(){
        console.log('Promise 방식 - fin');
    });

console.log('Promise 방식으로 HTTP 요청');

/*
    promise 방식으로 HTTP 요청
    Promise방식 - Hello Python~!!!
    안녕하세요. 파이썬~!!!

    Promise방식 - fin :) 
*/
```

<br />

### (3) async~await 이용하기
```js
import axios from 'axios';

const url = 'http://itpaper.co.kr/data/simple_text.txt';

(async() => {
    let result = null;

    try{
        const response = await axios.get(url);
        result = response.data;
    } catch (err){
        const errorMsg = "[" + error.response.status + "]" + error.response.statusText
        console.log('즉시 실행 함수 방식 - ' + errorMsg);
        return;
    }

    console.log('Async-await 방식 - ' + result);
})();

console.log('async/await + 즉시 실행 함수 방식으로 HTTP 요청');

/*
    async/await + 즉시 실행 함수 방식으로 HTTP 요청
    Async-await 방식 - Hello Python~!!!
    안녕하세요. 파이썬~!!!
*/
```

---

<br />

### (1) json 가져오기1 - async~await
```js
import axios from 'axios';

const url = 'http://itpaper.co.kr/data/grade_card.json';

(async () => {
    let json = null;

    try{
        const response = await axios.get(url);
        json = response.data;
    } catch (error){
        const errorMsg = "[" + error.response.status + "]" + error.response.statusText
        console.error(errorMsg);
        return;
    }

    json.grade_card.map((v, i) => {
        console.group(i + '번째 항목 ----');
        console.log("이름: %s, 학년: %d, 성별: %s, 국어: %d, 영어: %d, 수학: %d, 과학: %d", v.이름, v.학년, v.성별, v.국어, v.영어, v.수학, v.과학);
        console.groupEnd();
    })
})();

/*
    0번째 항목 ----
        이름: 철수, 학년: 1, 성별: 남자, 국어: 98, 영어: 0, 수학: 88, 과학: 64
    1번째 항목 ----
        이름: 영희, 학년: 2, 성별: 여자, 국어: 88, 영어: 90, 수학: 62, 과학: 72
    2번째 항목 ----
        이름: 민수, 학년: 1, 성별: 남자, 국어: 92, 영어: 70, 수학: 0, 과학: 0
    3번째 항목 ----
        이름: 수현, 학년: 3, 성별: 여자, 국어: 63, 영어: 60, 수학: 31, 과학: 70
    4번째 항목 ----
        이름: 호영, 학년: 4, 성별: 남자, 국어: 120, 영어: 50, 수학: 0, 과학: 88
*/
```

<br />

### (2) json 가져오기2 - async~await
```js
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
import axios from 'axios';

const url = 'http://itpaper.co.kr/demo/covid19/now.php';

(async () => {
    let json = null;

    try{
        const response = await axios.get(url);
        json = response.data;
    } catch (error){
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

    console.log('오늘 총 확진자 수: %d', total);
})();

/*
    [서울] 확진자: 0
    [부산] 확진자: 0
    [대구] 확진자: 0
    [인천] 확진자: 0
    [광주] 확진자: 0
    [대전] 확진자: 0
    [울산] 확진자: 0
    [세종] 확진자: 0
    [경기] 확진자: 0
    [강원] 확진자: 0
    [충북] 확진자: 0
    [충남] 확진자: 0
    [전북] 확진자: 0
    [전남] 확진자: 0
    [경북] 확진자: 0
    [경남] 확진자: 0
    [제주] 확진자: 0
    오늘 총 확진자 수: 0
*/
```

---

<br />

### (1) 파라미터 가져오기
```js
import axios from 'axios';

(async () => {
    let result = null;

    try{
        // const respose = await.get('http://itpaper.co.kr/data/get.php?num1=100&num2=200');
        const response = await axios.get('http://itpaper.co.kr/data/get.php', {
            params: {
                num1 : 100,
                num2 : 200
            },
            /* HTTP 헤더를 전송해야 하는 경우 */
            headers: {
                // 현대 이 예제는 header에 대한 처리를 하지 않으므로 아래 코드를 전송해도 아무 영향 없음
                'Authorization': 'KakaoAK ####################'
            }
        });
        result = response.data;
    } catch (error) {
        const errorMsg = "[" + error.response.status + "] " + error.response.statusText
        console.error(errorMsg);
        return; 
    }
    console.log('다른 백엔드로부터 응답받은 결과값: ' + result);
})();

/*
    다른 백엔드로부터 응답받은 결과값: 300
*/
```

<br />

### (2) 파라미터 전송하기
```js
import axios from 'axios';
import FormData from 'form-data';       // HTML Form 태그와 같은 기능을 한다.

(async () => {
    let result = null;

    try{
        // POST 방식으로 전송할 파라미터 정의 --> 가상의 <form>태그를 생성
        const form = new FormData();

        // form 태그의 input요소 추가와 같은 원리
        form.append('num1', 200);
        form.append('num2', 300);

        // POST 방식 전송
        const response = await axios.post('http://itpaper.co.kr/data/post.php', form, {
            // application/x-www-form-urlencoded
            headers: form.getHeaders()
            // 위를 넣어주는 이유는 다른 백엔드가 HTML form 태그 사용을 인지하길 위해서 사용한다.
        });
        result = response.data;
    } catch(error){
        const errorMsg = "[" + error.response.status + "] " + error.response.statusText;
        console.error(errorMsg);
        return;
    }
    console.log('다른 백엔드로부터 응답받은 결과값: ' + result);
})();

/*
    다른 백엔드로부터 응답받은 결과값: 500
*/
```
<br />

### (3) 오픈API 사용하기 - 주소API
```js
import axios from 'axios';

(async () => {
    let json = null;

    try{
        const response = await axios.get('http://juso.go.kr/addrlink/addrLinkApi.do', {
            params: {
                confmKey: '발급받은 승인키',
                currentPage: 1,             // 현재 페이지 번호
                countPerPage: 20,           // 페이지당 출력할 결과 Row 수  
                keyword: '서초W',           // 주소 검색어
                resultType: 'json'          // 검색결과형식 설정(xml, json)
            }
        });

        //대부분의 Open API는 HTTp 상태코드를 건드리는 것이 아니여서 axios가 에러를 인식을 못한다.
        // 그러므로 catch로 갈 수 있도록 코드를 작성해줘야 한다.
        if(response.data.results?.common?.errorCode != "0"){
            const error = new Error();
            error.response = {
                status: response.data.results.common.errorCode,
                statusText: response.data.results.common.errorMessage
            }
            throw error;
        }

        json = response.data;
    }catch(error){
        const errorMsg = "[" + error.response.status + "] " + error.response.statusText
        console.error(errorMsg);
        return;
    }

    json.results.juso.map((item, index) => {
        console.log("[%s] ", item.zipNo);
        console.log("[지번주소] ", item.jibunAddr);
        console.log("[도로명주소] ", item.roadAddr);
        console.log();
    })
})();
```