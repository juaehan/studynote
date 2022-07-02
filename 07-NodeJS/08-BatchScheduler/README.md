# 스케쥴러
## #01. 배치 프로세스와 스케쥴러
|구분|설명|
|---|---|
|배치 프로세스|흐름에 따라 순차적으로 자료를 처리하는 프로그램|
|스케쥴러|정해진 시간에 따라 **특정 함수**나 **특정 프로그램**을 자동으로 실행하게 하는 기능|
- 일반적으로 스케쥴러란 사전에 설정된 시간에 준비된 배치 프로그램을 자동으로 실행시키는 기능을 의미한다.
- 실무에서는 배치 + 스케쥴러를 묶어서 **배치 스케쥴러**라고 부른다.
- 배치 프로세스, 스케쥴러, 배치 등도 일반적으로 특정 시간에 자동으로 수행되는 기능들을 의미하는 용어로 통용된다.

## #02. 구현방법
### (1) 패키지 설치
일반적으로 스케쥴러는 날짜, 시간에 대한 핸들링이 요구되므로 dayjs를 함께 사용한다.
```shell
$ yarn add node-schedule
$ yarn add dayjs
```

### (2) 구현방법
```js
import schedule from 'node-schedule';

schedule.scheduleJob(특정시간|특정규칙, function() {
    ... 수행할 기능 ...
});
```
- 특정 시각은 지정된 시간이 되었을 때 1회만 실행
- 시간 규칙
  - 시간간격 : 5분마다, 1시간 마다
  - 스케쥴 : 매일 n시 n분

---
<br />

#### 01-schedule1.js
```js
import logger from './helper/LogHelper.js';
import dayjs from 'dayjs';
import schedule from 'node-schedule';

/** 현재시각 */
const atTime = dayjs();
logger.debug(atTime.format('HH:mm:ss'));        // 22/07/02 20:50:41 699 [debug]: 20:50:41

/** 5초후 시각 */
const afTime = atTime.add(5, 'second');
logger.debug(afTime.format('HH:mm:ss'));        // 22/07/02 20:50:41 704 [debug]: 20:50:46

/** 5초 후에 자동으로 실행되는 예약 작업 생성 */
// --> toDate()는 JS의 Date객체를 추출
const jsDate = afTime.toDate();
schedule.scheduleJob(jsDate, () => {
    logger.debug('5초 후 예약된 작업이 수행되었습니다.');
});

logger.info(afTime.format('HH:mm:ss') + '에 작업이 예약되었습니다.');

/*
    22/07/02 20:50:41 699 [debug]: 20:50:41
    22/07/02 20:50:41 704 [debug]: 20:50:46
    22/07/02 20:50:41 745 [info]: 20:50:46 에 작업이 예약되었습니다.
    22/07/02 20:50:46 710 [debug]: 5초 후 예약된 작업이 수행되었습니다.
*/
```

<br />

#### 02-schedule2.js
- 규칙 개체 만들기 schedule.RecurrenceRule();
```js
/** 스케줄에 따른 자동 수행 */
import logger from './helper/LogHelper.js';
import schedule from 'node-schedule';



/** (1) 매 분 초마다 수행 */
const rule1 = new schedule.RecurrenceRule();
rule1.second = 10;

schedule.scheduleJob(rule1, () => logger.debug(`[rule1] 매분 ${rule1.second}초 마다 수행!!`));


/** (2) 매 시간 분, 초마다 수행 */
const rule2 = new schedule.RecurrenceRule();
rule2.second = 20;
rule2.minute = 45;

schedule.scheduleJob(rule2, () => logger.debug(`[rule2] 매시간 ${rule2.minute}분 ${rule2.second}초 마다 수행!!`));


/** (3) 매 시간 분, 초마다 수행 */
const rule3 = new schedule.RecurrenceRule();
rule3.second = 30;
rule3.minute = 45;
rule3.hour = 21;

schedule.scheduleJob(rule3, () => logger.debug(`[rule3] 매일 ${rule3.hour}시 ${rule3.minute}분 ${rule3.second}초 마다 수행!!`));


/** (4) 일주일 중 0요일을 기준으로 1번째~6번째 요일까지 (0=sun, 6=sat) */
const rule4 = new schedule.RecurrenceRule();
rule4.second = 40;
rule4.dayOfWeek = [0, new schedul.Range(1, 6)];

schedule.scheduleJob(rule4, () => logger.debug(`[rule4] 매주 월~토 매 분 ${rule4.second}초마다 실행`));

logger.info('예약작업이 설정되었습니다.');


/*
    22/07/02 21:45:04 352 [info]: 예약작업이 설정되었습니다.
    22/07/02 21:45:10 014 [debug]: [rule1] 매분 10초 마다 수행!!
    22/07/02 21:45:20 035 [debug]: [rule2] 매시간 45분 20초 마다 수행!!
    22/07/02 21:45:30 017 [debug]: [rule3] 매일 21시 45분 30초 마다 수행!!
    22/07/02 21:45:40 024 [debug]: [rule4] 매주 월~토 매 분 40초마다 실행
    22/07/02 21:46:10 022 [debug]: [rule1] 매분 10초 마다 수행!!
*/
```

<br />

#### 03-schedule3.js
- Crontab 스타일의 스케쥴 지정
```js
import logger from './helper/LogHelper.js';
import schedule from 'node-schedule';


/** (1) 매 분마다 수행 */
schedule.schedulJob("* * * * *", () => logger.debug('1분에 한번씩 수행'));


/** (2) 매 시 15, 45분마다 수행 */
schedule.schedulJob("15,45 * * * *", () => logger.debug('매 시 15, 45분마다 수행'));


/** (3) 2분마다 수행 */
schedule.schedulJob("*/2 * * * *", () => logger.debug('2분마다 수행'));

logger.info('예약작업이 설정되었습니다.');
```