import logger from './helper/LogHelper.js';
import dayjs from 'dayjs';
import schedule from 'node-schedule';

/** (2) 예약작업이 실행될 시간 */
// 현재시각
const atTime = dayjs();
logger.debug(atTime.format('HH:mm:ss'));

// 5초후 시각
const afTime = atTime.add(5, 'second');
logger.debug(afTime.format('HH:mm:ss'));