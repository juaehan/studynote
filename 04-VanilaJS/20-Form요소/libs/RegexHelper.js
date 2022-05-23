/**
 * @filename    : RegexHelper.js
 * @author      : 한주애 (juae0806@gamil.com)
 * @description : 정규표현식 검사 수행
*/


class RegexHelper {
    // constructor() {}

    /**
     * 값의 존재 여부를 검사한다.
     * @param   {string} selector 검사할 대상의 CSS 선택자
     * @param   {string} msg      값이 없을 경우 표시할 메시지 내용
     */
    value(selector, msg){
        const content = document.querySelector(selector).value;

        if(content == undefined || content == null || (typeof content == 'string' && content.trim().length == 0)) {
            throw new BadRequestException(msg, selector);
        }
        return true;
    }


    /**
     * 입력값이 지정된 글자수를 초과했는지 검사한다.
     * @param   {string} selector 검사할 대상의 CSS 선택자
     * @param   {int} length      최대 글자
     * @param   {string} msg      값이 없을 경우 표시될 메시지
     */
    maxLength(selector, len, msg){
        this.value(selector, msg);

        const content = document.querySelector(selector).value;

        if(content.trim().length > len){
            throw new BadRequestException(msg, selector);
        }
        return true;
    }


    /**
     * 입력값이 지정된 글자수 미만인지 검사한다.
     * @param   {string} selector 검사할 대상의 CSS 선택자
     * @param   {int} len         최소 글자
     * @param   {string} msg      값이 없을 경우 표시될 메시지
     */
     minLength(selector, len, msg){
        this.value(selector, msg);

        let content = document.querySelector(selector).value;

        if(content.trim().length < len){
            throw new BadRequestException(msg, selector);
        }
        return true;
    }


    /**
     * 두 값이 동일한지 검사한다.
     * @param   {string} origin     원본에 대한 CSS 선택자
     * @param   {string} compare    검사 대상에 대한 CSS 선택자
     * @param   {string} msg        검사에 실패할 경우 표시할 메시지
     */
     compareTo(origin, compare, msg){
        this.value(origin, msg);
        this.value(compare, msg);

        var src = document.querySelector(origin).value.trim();  // 원본값을 가져온다.
        var dsc = document.querySelector(compare).value.trim();  // 비교할 값을 가져온다.

        if(src != dsc){
            throw new BadRequestException(msg, origin);
        }
        return true;    // 성공했음을 리턴
    }




    /**
     * 입력값이 정규표현식을 충족하는지 검사한다.
     * @param   {string} selector   검사할 대상의 CSS 선택자
     * @param   {string} msg        표시할 메시지
     * @param   {object} regexExpr  검사할 정규표현식
     */
     field(selector, msg, regexExpr){
        this.value(selector, msg);

        const content = document.querySelector(selector).value;
        const src = content.trim();

        // 입력값에 대한 정규표현식 검사가 실패라면?
        if(!regexExpr.test(src)){
            throw new BadRequestException(msg, selector);
        }
        return true;
    }


    /**
     * 숫자로만 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출한다.
     * @param   {string} selector   검사할 대상의 CSS 선택자
     * @param   {string} msg        표시할 메시지
     */
    num(selector, msg){
        return this.field(selector, msg, /^[0-9]*$/);
    }
    




    /**
     * 영문과 숫자로만 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출한다.
     * @param   {string} selector   검사할 대상의 CSS 선택자
     * @param   {string} msg        표시할 메시지
     */
    engNum(selector, msg){
        return this.field(selector, msg, /^[a-zA-Z0-9]*$/);
    }




    /**
     * 이메일주소 형식인지 검사하기 위해 field()를 간접적으로 호출한다.
     * @param   {string} selector   검사할 대상의 CSS 선택자
     * @param   {string} msg        표시할 메시지
     */
    email(selector, msg){
        return this.field(selector, msg, /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i);
    }


    /**
     * 핸드폰 번호 형식인지 검사하기 위해 field()를 간접적으로 호출한다.
     * @param   {string} selector   검사할 대상의 CSS 선택자
     * @param   {string} msg        표시할 메시지
     */
    cellphone(selector, msg){
        return this.field(selector, msg, /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/);
    }

    /**
     * 한글 형식인지 검사하기 위해 field()를 간접적으로 호출한다.
     * @param   {string} selector   검사할 대상의 CSS 선택자
     * @param   {string} msg        표시할 메시지
     */
     kor(selector, msg){
        return this.field(selector, msg, /^[ㄱ-ㅎ가-힣]*$/);
    }

}
