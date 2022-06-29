/*----------------------------------------------------------
| 1) 모듈참조
-----------------------------------------------------------*/
/** 직접 구현한 모듈 */
import logger from './helper/LogHelper.js';
import {myip, urlFormat} from './helper/UtilHelper.js';

/** 내장 모듈 */
import url from 'url';
import path from 'path';

/** 설치가 필요한 모듈 */
import dotenv from 'dotenv';
import express from 'express';                  // Express 본체
import useragent from 'express-useragent';      // 클라이언트의 정보를 조회할 수 있는 기능
import serveStatic from 'serve-static';         // 특정 폴더의 파일을 URL로 노출시킴
import serveFavicon from 'serve-favicon';       // favicon 처리



/*----------------------------------------------------------
| 2) Express 객체 생성
-----------------------------------------------------------*/
// 여기서 생성한 app 객체의 use() 함수를 사용해서
// 각종 외부기능, 설정 내용, URL을 계속해서 확장하는 형태로 구현이 진행된다.
const app = express();

// 프로젝트 폴더 위치
const __dirname = path.resolve();
console.log('dlfma'+__dirname);