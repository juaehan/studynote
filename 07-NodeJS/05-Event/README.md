# #05 이벤트
백엔드의 이벤트는 프론트엔드의 이벤트 개념과 다르다.
백엔드는 "프론트가 접속 했을 때" 혹은 "프론트가 접속을 해제 했을 때"등 "OO할 때"로 표현할 수 있는 상황을 말한다.

**이벤트는 프론트가 접속을 끊었을 때 백엔드가 무엇을 해야되는지에 대해서 정리하는 용도로 사용**

## 01. 이벤트 리스너
- 프로그래머가 정의하거나 프로그램에 정해져 있는 어떤 사건이 발생하는가를 모니터링 하는 기능이다.
- HTML태그의 onClick 속성이다.

## 02. 이벤트 핸들러
- 이벤트가 발생했을 때 실행하는 단위 기능이다.
- HTML태그의 onClick 속성에 의해 호출되는 어떤 사용자 정의 함수이다.

---
<br />

## 03. Node의 이벤트 핸들러
### 1. 핸들러 정의하기
```js
process.on('이벤트이름', function(파라미터1, 파라미터2, ...) {
    ... 이벤트가 발생한 경우 실행될 기능을 구현...
});
```
<br />

### 2. 핸들러 호출하기
```js
process.emit('이벤트이름', 파라미터1, 파라미터2, ...);
```
---
<br />

## 04. 이벤트 사용해보기
```js
/* 이벤트 핸들러 정의 */
// --> exit : 시스템 내장 이벤트로 프로세스가 종료되는 시점에 자동으로 호출된다.
process.on('exit', () => {
    console.debug('exit 이벤트 발생');
});

// 사용자 정의 이벤트
process.on('onSayHello', (a, b) => {
    console.debug('onSayHello 이벤트 발생함 : %s %s', a, b);
});


/* 프로그램 실행 */
setTime(() => {
    console.debug('2초 후에 onSayHello 이벤트 전달 시도함');
    process.emit('onSayHello', 'Hello', 'World');
}, 2000);

// 앞의 코드가 기능정의 혹은 실행 예약이므로 이 라인이 가장 먼저 실행된다.
console.debug('--------------- 프로그램 흐름 종료 ---------------');


/*
    -------- 프로그램 흐름 종료 --------
    2초 후에 onSayHello 이벤트 전달 시도함
    onSayHello 이벤트 발생함 : Hello World
    exit 이벤트 발생
*/
```
---

<br />

## 05. 사용자 정의 이벤트 사용하기
- 사용자 정의 이벤트는 실제로 직접 사용할 일이 별로 없다.
- **`객체이름.on()`함수가 어떤 특정 상황이 발생했을 때 자동으로 실행되는 함수를 만드는 것**이라고 정리해두면 된다.

<br />

#### 1. EventEmitter 모듈 가져오기
1. EventEmitter은 `클래스`이다.
2. 객체를 만드는 것이 아니라 내가 만드는 임의의 클래스에 상속을 시켜 사용한다.
```js
import {EventEmitter} from 'events';
```

<br />

#### 2. 클래스 정의하기
```js
class Radio extends EventEmitter {
    // 생성자에게 상위 클래스의 생성자를 호출하도록 지정 --> 상속구현
    // new 키워드에 의해서 호출되기 전까지 생성자는 실행되지 않는다.
    constructor () {
        super();
    }
}
```

<br />

#### 3. 직접 정의한 클래스에 대한 객체 이벤트 연결하기
1. radio는 EventEmitter를 상속 받았으므로 부모 메서드를 마음대로 사용할 수 있다.
```js
const radio = new Radio();

/* 이벤트 수 설정하기 */
radio.setMaxListeners(5);

/* 이벤트 리스너에 이벤트 핸들러 연결하기 */
const onTurnOn = (channel) => console.debug('라디오가 켜졌습니다. 채널번호 = ', channel);

// turnon 이벤트는 2개를 정의했으므로 두개가 동시에 동작한다.
radio.on('turnon', onTurnOn);
radio.on('turnon', (channel) => console.log('Hello Radio ' + channel));
// .on == .addListenner
radio.addListenner('changechannel', (channel) => console.log('채널이 %d번으로 변경되었습니다.', channel));

/* 1회용 이벤트 */
// 한번만 실행하고 두 번 다시 실행하지 않는다.(반복문에서도 첫 반복문만 실행한다.)
radio.once('turnoff', (channel) => console.log('라디오가 꺼졌습니다. 채널번호 = ' + channel));
```

<br />

#### 4. 이벤트 발생/제거
```js
for (var i=0; i<2; i++) {
    console.group('%d번째 실행중...', i+1);
        // turnon은 두 번 실행한다.
        radio.emit('turnon', i);
        radio.emit('changechannel', i);

        // once로 이벤트가 정의되었으므로 한번만 실행된다.
        radio.emit('turnoff', i);
        console.debug();
    console.groupEnd();
}

/* 이벤트 제거 */
radio.removeListener('turnon', onTurnOn);       // 라디오 켜졌습니다가 없어짐
radio.emit('turnon', 1000);
```
**[출력결과]**
```js
1번째 실행중...
  라디오가 켜졌습니다. 채널번호 = 0
  Hello Radio 0
  채널이 0번으로 변경되었습니다.
  라디오가 꺼졌습니다. 채널번호= 0

2번째 실행중...
  라디오가 켜졌습니다. 채널번호 = 1
  Hello Radio 1
  채널이 1번으로 변경되었습니다.

Hello Radio 1000
```