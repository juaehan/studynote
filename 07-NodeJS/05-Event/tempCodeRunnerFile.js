// EventEmiter를 사용하여 직접 정의한 객체가 이벤트를 갖도록 구현하기

/** (1) 모듈 가져오기 */
import {EventEmitter} from 'events';

/** (2) 클래스 정의하기 */
class Radio extends EventEmitter {
    // 클래스의 상속이 이루어 졌으므로
    // 생성자에서 상위 클래스의 생성자를 호출하도록 지정 --> 상속구현
    // new 키워드에 의해서 호출되기 전까지 생성자는 실행되지 않는다.
    constructor() {
        super();
    }
}

/** (4) 직접 정의한 클래스에 대한 객체 */
const radio = new Radio();

/** (5) 이벤트 수 설정하기 */
radio.setMaxListeners(5);

/** (6) 이벤트 리스너에 이벤트 핸들러 연결하기 --> 이벤트 이름은 사용자가 직접 정의 */
const onTurnOn = (channel) => console.debug('라디오가 켜졌습니다. 채널번호 = ' + channel);
radio.on('turnon', onTurnOn);
radio.on('turnon', (channel) => console.log('Hello Radio ' + channel));
radio.addListener('changechannel', (channel) => console.log('채널이 %d번으로 변경되었습니다.', channel));