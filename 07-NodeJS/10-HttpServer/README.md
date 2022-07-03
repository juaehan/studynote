# HTTPServer

## #01. Node.js 기반으로 서버 프로그램 구현하기
- http 객체에 포함되어 있는 `createServer()` 함수를 호출하면 서버 객체가 리턴된다.
- 이 객체에 URL을 식별할 수 있는 처리를 추가하여 특정 URL을 통해 접근하는 클라이언트에게 전달할 데이터를 구성할 수 있다.
- **즉, 서버가 웹브라우저에게 전달한 HTML을 구성한다.**

### 1. 지금까지 사용된 패키지
|패키지|기능 설명|
|---|---|
|dotenv|환결설정 파일을 로드할 수 있다.|
|winston|로그 파일 관리|
|winston-daily-rotate-file|로그 파일을 날짜별로 분할할 수 있다.|
|node-schedule|스케쥴러 기능 구현|
|dayjs|날짜 처리 기능 제공|

---

<br />

## (1) 1세대 개발방식
```js
import logger from './helper/LogHelper.js';
import {myip} from './helper/UtilHelper.js';
import http from 'http';

const port = 3216
const ip = myip();
const server = http.createServer();
```
<br />

### 포트번호에 대해 리스닝 시작
- listen을 시작하면 호출될 콜백함수 지정
- listen 시작 --> backend가 가동을 시작했다는 의미
```js
server.listen(port, () => {
    logger.debug(port + '번 포트에서 백엔드가 구동되었습니다.');
    logger.debug('--------------------------');

    // 백엔드에게 접속할 수 있는 주소 출력
    ip.forEach((v, i) => {
        logger.debug('http://' + v + ':' + port);
    });
});
```
<br />

### 프론트엔드가 접속했을 때 발생하는 이벤트
```js
server.on('connection', (socket) => {
    // 콜백함수에 전달되는 socket 객체를 사용하여 접속한 클라이언트의 정보를 파악한다.
    logger.debug('프론트엔드가 접속했습니다. : ' + socket.remoteAddress + ', ' + socket.remotePort);
    logger.debug(socket);
})
```
<br />

### connection 이벤트 발생 직후 프론트엔드에게 결과값을 되돌려 주기 위해 호출되는 이벤트
- req(request) -> 요청객체 : 브라우저가 서버에게 전달하는 정보를 담고 있다.
- res(response) -> 응답객체 : 서버가 브라우저에게 결과를 전송하는 기능을 갖는다.
```js
server.on('request', (req, res) => {
    logger.debug('프론트엔드의 요청 >> [' + req.method + ']' + req.url);

    // 클라이언트에게 전송할 응답 헤더 구성
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    // 클라이언트에 전송할 본문 구성
    res.write('<!DOCTYPE html>');
    res.write('<html>');
    res.write('<head>');
    res.write("<meta charset='utf-8' />");
    res.write('<title>응답 페이지</title>');
    res.write('</head>');
    res.write('<body>');

    // 프론트엔드가 요청한 URL에 따라 출력 내용을 분기
    if(req.url == '/hello.html'){
        res.write('<h1>Hello World</h1>');
    }else{
        res.write('<h1>노드제이에스로부터의 응답 페이지</h1>');
    }

    res.write('</body>');
    res.write('</html>');

    // 클라이언트에 데이터 전송 (통신종료)
    res.end();
})
```
<br />

### 서버 종료
- 정상적인 상황에서는 발생할 가능성이 없다.
```js
server.on('close', function(){
    logger.debug('백엔드가 종료되었습니다.');
});
```

<br />

## (2) 외부 HTML 파일 읽어오기
```js
import logger from './helper/LogHelper.js';
import {myip} from './helper/UtilHelper.js';
import http from 'http';
import fs from 'fs';
import path from 'path';

const __dirname = path.resolve();
const port = 3217;
const ip = myip();
const server = http.createServer();

server.listen(port, () => {
    logger.debug(port + '번 포트에서 백엔드가 구동되었습니다.');
    logger.debug('------------------------');

    // 나(백엔드)에게 접속할 수 있는 주소를 출력함.
    ip.forEach((v, i) => {
        logger.debug('http://' + v + ':' + port);
    });
});

server.on('connection', (socket) => {
    // 콜백함수에 전달되는 socket 객체를 사용하여 접속한 클라이언트의 정보를 파악한다.
    logger.debug('프론트엔드가 접속했습니다. : ' + socket.remoteAddress + ', ' + socket.remotePort);
    logger.debug(socket);
});
```

<br />

### connection이벤트 발생 직후 프론트엔드에게 결과값을 되돌려 주기 위해 호출되는 이벤트
```js
server.on('request', (req, res) => {
    logger.debug('프론트엔드의 요청 >> [' + req.method + ']' + req.url);

    if(req.url == '/sample.html'){
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });

        const path = __dirname + '/crud-axios-sample.html';
        // html파일을 읽어서  res개체에 붙여 그럼 출력됨
        fs.createReadStream(path).pipe(res);
    } else {
        res.writeHead(200, {
            // 브라우저에게 인식시킬 출력 내용의 컨텐츠 형식
            'Content-Type': 'application/json; charset=utf-8',

            /** CORS 접근 허용을 위한 설정 */
            // 접근을 허용할 도메인 혹은 IP(브라우저에 출력되고 있는 도메인을 의미함, *은 ALL의 의미)
            'Access-Control-Allow-Origin': '*',

            // 접근을 허용할 전송방식 (기본값은 GET, POST만 허용함)
            'Access-Control-Allow-Methods' : '*'
        });

        let json = null;

        switch(req.method){
            case 'GET':             // 데이터 조회 기능
                json = {
                    rt: 'OK',
                    message: 'GET방식에 대한 요청입니다.'
                }
                break;
            case 'POST':            // 데이터 저장 기능
                json = {
                    rt: 'OK',
                    message: 'POST방식에 대한 요청입니다.'
                }
                break;
            case 'PUT':             // 데이터 수정 기능
                json = {
                    rt: 'OK',
                    message: 'PUT방식에 대한 요청입니다.'
                }
                break;
            case 'DELETE':         // 데이터 삭제 기능
                json = {
                    rt: 'OK',
                    message: 'DELETE방식에 대한 요청입니다.'
                }
                break;
        }

        res.write(JSON.stringify(json));
        res.end();
    }
})
```

### 서버종료 이벤트
```js
server.on('close', function() {
    logger.debug('백엔드가 종료되었습니다.');
});

// 예제이므로 타이머를 통해 백엔드를 60초 후 강제 종료
setTimeout(() => {
    server.close();
}, 60000);
```