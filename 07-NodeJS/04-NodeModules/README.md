# Node Modules
Node.js 안에 처음부터 내장되어 있는 모듈들로 JS의 내장 객체와 다르다.
JS 내장객체는 객체를 만들지 않아도 사용할 수 있고, Node 내장 모듈은 `import`를 적용해야 사용할 수 있다.

---

## #01 Path 모듈
- Node가 구동중인 컴퓨터 내의 경로를 관리하는 기능이다.
- JavaScript의 `location` 객체가 페이지의 URL을 관리한다면, Node의 `Path`모듈은 내 컴퓨터 안의 파일 경로를 관리한다.

### 1. 모듈참조
```js
import path from 'path';
```

<br />

### 2. 경로 합치기(join)
1. `path.join()`의 파라미터는 제한이 없다.
2. 조합된 경로 문자열에 해당하는 PATH가 실제로 존재하는지는 상관없다.
```js
const currentPath = path.join('C:/User/hello/word', 'myphoto', '../photo.jpg');
// 경로를 합치게 되면 C:/User/hello/word/myphoto 이나, photo.jpg가 상위 폴더에 위치하므로 결국 C:\User\hello\word\photo.jpg에 위치한다.

console.group('path JOIN');
    console.debug(currentPath);
console.groupEnd();

/*
    path.join
        C:\User\hello\word\photo.jpg
*/
```

<br />

### 3. 디렉토리, 파일명, 확장자 구분하기
-  C:\User\hello\word\photo.jpg
```js
const dirname = path.dirname(currentPath);
const basename = path.basename(currentPath);
const extname = path.extname(currentPath);

console.group('경로 분활하기');
    console.debug('디렉토리 : %s', dirname);
    console.debug('파일이름 : %s', basename);
    console.debug('확장자 : %s', extname);
console.groupEnd();
/*
    경로 분활하기
        디렉토리 : C:\User\hello\word
        파일이름 : photo.jpg
        확장자 : .jpg
*/
```

<br />

### 4. 경로정보 파싱
- 경로를 조각내서 JSON객체로 return 해준다.
```js
const parse = path.parse(currentPath);

console.group('경로정보 파싱');
    console.debug('%o', parse);
    console.debug('root : ' + parse.root);
    console.debug('dir : ' + parse.dir);        // 디렉토리
    console.debug('name : ' + parse.name);      // 파일이름
    console.debug('ext : ' + parse.ext);        // 확장자
console.groupEnd();
/*
    경로정보 파싱
        {
            root: 'C:\\',
            dir: 'C:\\User\\hello\\word',
            base: 'photo.jpg',
            ext: '.jpg',
            name: 'photo'
        }
        root : C:\
        dir : C:\User\hello\word
        name : photo
        ext : .jpg
*/
```
<br />

#### [특이사항]
> `path.basename`은 `파일명.확장자`가 함께 나오지만 `path.parse의 name`은 **확장자가 함께 나오지 않는다.** <br />
> 파일 경로 핸들링은 `파일 업로드`구현 시 중요하므로 잘 알아둬야 한다.

---

<br />

## #02 URL 모듈
- URL의 각 파트를 조회하거나, 파트별 값을 결합하여 완성된 URL을 생성하는 기능
- URL의 성분값을 분해한다.
- JS의 `location`객체와 동일한 기능이다.
- **URL모듈 내의 `URL클래스`와 `URLSearchPatams클래스`를 활용한다.**


### 1-1. URL 모듈 내에서 URL클래스만 참조하기
```js
import {URL} from 'url';
```

<br />

### 1-2. URL 성분 분해하기
```js
const myurl = 'http://www.itpaper.co.kr:8765/hello/world.html?a=123&b=456#home';

const location = new URL(myurl);

console.group('URL 성분 정보 확인');
    console.debug(location);
    /*
        URL {
            href: 'http://www.itpaper.co.kr:8765/hello/world.html?a=123&b=456#home',
            origin: 'http://www.itpaper.co.kr:8765',
            protocol: 'http:',
            username: '',
            password: '',
            host: 'www.itpaper.co.kr:8765',
            hostname: 'www.itpaper.co.kr',
            port: '8765',
            pathname: '/hello/world.html',
            search: '?a=123&b=456',
            searchParams: URLSearchParams { 'a' => '123', 'b' => '456' },
            hash: '#home'
        }
    */

   console.debug('도메인 + 호스트이름 + 포트번호' + location.href);                    //  http://www.itpaper.co.kr:8765/hello/world.html?a=123&b=456#home
   console.debug('통신방식(http, https)' + location.protocol);                       // http:
   console.debug('사이트 주소' + location.host);                                     // www.itpaper.co.kr:8765
   console.debug('포트번호를 제외한 사이트 주소' + location.hostname);                // www.itpaper.co.kr
   console.debug('포트번호' + location.port);                                       // 8765
   console.debug('통신방식 + 사이트주소 + 포트번호' + location.origin);              // http://www.itpaper.co.kr:8765
   console.debug('사이트주소에서 변수 영역을 제외한 값' + location.pathname);        // /hello/world.html
   console.debug('?를 포함한 변수 영역' + location.search);                        // ?a=123&b=456
   console.debug('search에 저장되어 있는 변수를 key-value의 쌍으로 분리하여 내장하고 있는 객체' + location.searchParams);                        // a=123&b=456
   console.debug('#뒤에 표시되는 마지막 값' + location.hash);                      // #home
console.groupEnd();
```
<br />

### 2-1. URL모듈에서 URL, URLSearchParams 참조하기
```js
import {URL, URLSearchParams} from 'url';
```

### 2-2. URL에서 queryString 추출하기
- URLSearchParams는 `객체`타입이다.
- URL에서 변수를 추출할 때는 `get`을 이용하고, 추출한 변수는 string이다.
```js
const address = "http://www.itpaper.co.kr/hello/world.html?a=123&b=456";

const {serachParams} = new URL(address);
console.debug(searchParams);        // URLSearchParams { 'a' => '123', 'b' => '456' }

console.debug('요청 파라미터 중 a의 값 : %s (%s)', searchParams.get('a'), typeof searchParams.get('a'));        // 요청 파라미터 중 a의 값 : 123 (string)
console.debug('요청 파라미터 중 b의 값 : %s (%s)', searchParams.get('b'), typeof searchParams.get('b'));        // 요청 파라미터 중 b의 값 : 456 (string)
```

### 2-3. JSON객체를 QueryString 문자열로 변환
```js
const obj = {name: 'hello', nick: 'world', 'address': '서울시 서초구'};
const str = new URLSearchParams(obj);

// 한글은 인코딩되어 출력된다.
console.log('조합된 요청 파라미터: %s', str);           // name=hello&nick=world&address=%EC%84%9C%EC%9A%B8%EC%8B%9C+%EC%84%9C%EC%B4%88%EA%B5%AC
```
---

<br />

## #03 OS 모듈
- Node가 구동중인 운영체제의 기본 정보들을 조회하는 기능이다.
- 현재 컴퓨터의 메모리 사용량을 모니터링 한다.
- **현재 컴퓨터의 CPU정보 (수량, 성능, 모델명 등...)**
- 현재 컴퓨터의 네트워크 정보
> Node는 운영체제의 사용자 권한을 모두 위임받는다.

### 1. 모듈 참조
```js
import os from 'os';
```

<br />

### 2. 시스템 기본 정보
```js
console.debug('홈 디렉토리 : ' + os.homedir());          // C:\Users\juae
console.debug('시스템 아키텍처 : ' + os.arch());         // x64
console.debug('os 플랫폼 : ' + os.platform());          // win32
console.debug('시스템의 hostname : ' + os.hostname());  // DESKTOP-BALSP10
```

<br />

### 3. 시스템 계정 정보
```js
const userInfo = os.userInfo();
console.debug(userInfo);
/*
    {
        gid: -1,
        username: 'juae',
        homedir: 'C:\\Users\\juae',
        shell: null
    }
*/

console.debug('사용자 계정명 : ' + userInfo.username);         // juae
console.debug('사용자 홈 디렉토리 : ' + userInfo.homedir);      // C:\Users\juae
console.debug('사용자 쉘 환경 : ' + userInfo.shell);            // null
```

<br />

### 4. 메모리 용량
- `freemem()` - 시스템에서 현재 사용 가능한 메모리 용량
- `totalmem()` - 시스템의 전체 메모리 용량

```js
console.debug('시스템의 메모리 : %d(free) / %d(tatal)', os.freemem(), os.totalmem());           // 2620420096(free) / 8373960704(tatal)
```

<br />

### 5. CPU 정보
- 쿼드코어인 경우 4개, 듀얼코어인 경우 2개
```js
const cpus = os.cpus();

console.debug('CPU 코어 수 : ' + cpu.length);       // 8

// cpu의 코어는 배열-객체 값으로 떨어지기 때문에 반복문을 돌린다.
cpus.map((v, i) => {
    console.group('[%d 번째 CPU] %s', i + 1, v.model);
        console.debug('처리속도: %d', v.speed);
        console.debug('수행시간 정보: %j', v.times);
    console.groupEnd();
})
/*
    [1 번째 CPU] Intel(R) Core(TM) i5-8265U CPU @ 1.60GHz
        처리속도: 1800
        수행시간 정보: {"user":26983062,"nice":0,"sys":32382953,"idle":327765046,"irq":8241031}
    [2 번째 CPU] Intel(R) Core(TM) i5-8265U CPU @ 1.60GHz
        처리속도: 1800
        수행시간 정보: {"user":15197156,"nice":0,"sys":14756531,"idle":357177109,"irq":293875}
    [3 번째 CPU] Intel(R) Core(TM) i5-8265U CPU @ 1.60GHz
        처리속도: 1800
        수행시간 정보: {"user":36005796,"nice":0,"sys":28759781,"idle":322365187,"irq":496640}
    [4 번째 CPU] Intel(R) Core(TM) i5-8265U CPU @ 1.60GHz
        처리속도: 1800
        수행시간 정보: {"user":18427578,"nice":0,"sys":19679671,"idle":349023500,"irq":275250}
    [5 번째 CPU] Intel(R) Core(TM) i5-8265U CPU @ 1.60GHz
        처리속도: 1800
        수행시간 정보: {"user":30023140,"nice":0,"sys":25263656,"idle":331843968,"irq":453843}
    [6 번째 CPU] Intel(R) Core(TM) i5-8265U CPU @ 1.60GHz
        처리속도: 1800
        수행시간 정보: {"user":19065500,"nice":0,"sys":22379296,"idle":345685984,"irq":321890}
    [7 번째 CPU] Intel(R) Core(TM) i5-8265U CPU @ 1.60GHz
        처리속도: 1800
        수행시간 정보: {"user":26753718,"nice":0,"sys":30298546,"idle":330078484,"irq":769890}
    [8 번째 CPU] Intel(R) Core(TM) i5-8265U CPU @ 1.60GHz
        처리속도: 1800
        수행시간 정보: {"user":23418843,"nice":0,"sys":25292703,"idle":338419234,"irq":356468}
*/
```

<br />

### 6. 네트워크 정보
- 랜 카드의 정보가 나온다.(유선/무선)
- `127.0.0.1` - 나 스스로의 주소로 필요없다.
- `::1` - 127.0.0.1과 동일하다.
- 그 밖의 주소는 `가상주소`이다.
- 내 실제 주소는 `192.168.0.196`이다.
- 주소형식이 IPv4로 표시되어 있는 것이 실제 내 주소이고, IPv6은 사용하지 않는다.
```js
const nets = os.networkInterfaces();

for (const attr in nets) {
    console.group('Network장치 이름: %s', attr);
        const item = nets[attr];
        item.map((v, i) => {
            console.debug('주소형식: %s', v.family);
            console.debug('IP주소: %s', v.address);
            console.debug('맥주소: %s', v.mac);
            console.debug('넷마스크: %s', v.netmask);
            console.debug();
        });
    console.groupEnd();
}
/*
    Network장치 이름: VMware Network Adapter VMnet1
        주소형식: IPv6
        IP주소: fe80::f8f5:115b:2d9b:2ea7
        맥주소: 00:50:56:c0:00:01
        넷마스크: ffff:ffff:ffff:ffff::

        주소형식: IPv4
        IP주소: 192.168.199.1
        맥주소: 00:50:56:c0:00:01
        넷마스크: 255.255.255.0

    Network장치 이름: VMware Network Adapter VMnet8
        주소형식: IPv6
        IP주소: fe80::28c6:4f21:946d:c54f
        맥주소: 00:50:56:c0:00:08
        넷마스크: ffff:ffff:ffff:ffff::

        주소형식: IPv4
        IP주소: 192.168.233.1
        맥주소: 00:50:56:c0:00:08
        넷마스크: 255.255.255.0

    Network장치 이름: Wi-Fi
        주소형식: IPv6
        IP주소: fe80::8959:6ce9:9811:d9d
        맥주소: 98:2c:bc:c2:a3:0d
        넷마스크: ffff:ffff:ffff:ffff::

        주소형식: IPv4
        IP주소: 192.168.0.196
        맥주소: 98:2c:bc:c2:a3:0d
        넷마스크: 255.255.255.0

    Network장치 이름: Loopback Pseudo-Interface 1
        주소형식: IPv6
        IP주소: ::1
        맥주소: 00:00:00:00:00:00
        넷마스크: ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff

        주소형식: IPv4
        IP주소: 127.0.0.1
        맥주소: 00:00:00:00:00:00
        넷마스크: 255.0.0.0
*/
```

<br />

---

## #04 IP 출력
### 1. 백엔드가 가동할 수 있는 IP 출력하기
```js
/** UtilHelper.js */
import {networkInterfaces} from 'os';

const myip = () => {
    const ipAddress = [];
    const nets = networkInterfaces();

    for (const attr in nets) {
        const item = nets[attr];

        item.map((v, i) => {
            // IPv4형식의 주소 이고,  나 스스로의 주소가 아닐경우 외부에 접속할 수 있는 주소를 출력해준다.
            if(v.family == 4 && v.address != '127.0.01') {
                ipAddress.push(v.address);
            }
        });
    }
    return ipAddress;
}

/* URL을 조립해주는 함수(06-urlFormat.js 예제 확인) */
const urlFormat = (urlObject) => String(Object.assign(new URL("http://a.com"), urlObject));

export {myip, urlFormat};
```
```js
/** 05_myip.js*/
import {myip} from './helper/UtilHelper.js';

const ip = myip();
console.debug(ip);      // [ '192.168.199.1', '192.168.233.1', '192.168.0.196' ]
```

<br />

### 2. URL 조합하기
```js
/** 06-urlFormat.js*/
import {urlFormat} from './helper/UtilHelper.js';

const url1 = urlFormat({
    protocol: 'https',
    hostname: 'example.com',
    pathname: 'somepath'
});
console.log('url1: ', url1);    // https://example.com/somepath

const url2 = urlFormat({
    protocol: 'https',
    hostname: 'example.com',
    pathname: '/somepath'
});
console.log('url2: ', url2);    // https://example.com/somepath

const url3 = urlFormat({
    protocol: 'https',
    hostname: 'example.com',
    pathname: 'somepath',
    port: 8080
});
console.log('url3: ', url3);    // https://example.com:8080/somepath

const url4 = urlFormat({
    protocol: 'http',
    hostname: 'example.com',
    pathname: '/somepath',
    port: 8080
});
console.log('url4: ', url4);    // http://example.com:8080/somepath

const url5 = urlFormat({
    protocol: 'https',
    hostname: 'example.com',
    pathname: '/somepath',
    port: 8080,
    username: 'john',
    password: 'abc',
    search: 'item=bike'
});
console.log('url5: ', url5);    // https://john:abc@example.com:8080/somepath?item=bike
```