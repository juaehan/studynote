/** anonymuse function(익명함수) */
// const say = sayHello; 를 아래로 변환
// sayHello 자리에 함수를 넣기 대문에 뒤에 세미콜론은 필수로 넣어야 함
const say = function(msg){
    console.log("sayHello(" + msg + ")");
};

// 함수가 대입된 변수는 그 자체가 함수의 역할을 한다.
say("Hello Javascript");