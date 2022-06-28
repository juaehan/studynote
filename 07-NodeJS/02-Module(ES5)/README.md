# ES5
노드는 ES5를 기준으로 작성된다.

### 01. 사용자 정의 함수
```js
/** 모듈 내보내기 (MyModule1) */
function helloWorld(){
    console.log("Hello World");
}

module.exports = helloWorld;

/** 모듈 참조 */
const my1 = require('./MyModule1');
my1();      // --> Hello World
```

### 02. exports 속성으로 변수, JSON, 함수 추가
```js
/** 모듈 내보내기 (MyModule2) */
module.exports.name = "노드";
module.exports.property = {id: 'nodejs', type: 'javascript'};
module.exports.say = function(){
    console.log("Hello World");
};

module.exports.home = {
    postcode: '12345',
    address: '서울시 강남구 역삼동',
    getAddress: function(){
        console.log(this.postcode + ' ' + this.address);
    }
};

/** 모듈 참조 */
const my2 = require('./MyModule2');

console.log(my2.name);                  // 노드
console.log(my2.property.id);           // nodejs
console.log(my2.property.type);         // javascript
my2.say();                              // Hello World

console.log(my2.home.postcode);         // 12345
console.log(my2.home.address);          // 서울시 강남구 역삼동
my2.home.getAddress();                  // 12345 서울시 강남구 역삼동
```

### 03. class 모듈화 하기
```js
/** 모듈 내보내기 (MyModule3) */
class MyClass{
    constructor(){
        console.log('--- MyClass의 객체가 생성되었습니다. ---');
        this.age = 20;
        this.name = '노드';
    }

    say(){
        console.log('이름: ' + this.name);
        console.log('나이: ' + this.age);
    }
}

module.exports = MyClass;

/** 모듈 참조 */
const my3 = require('./MyModule3');

// 리턴된 모듈은 클래스 형태이므로,
// 기능의 사용을 위해서는 인스턴스를 생성해야 한다.
const module_obj = new my3();
module_obj.say();
/*
    ---- MyClass의 객체가 생성되었습니다. ----
    이름: 노드
    나이: 20
*/
```


### 04. 객체 모듈화 --> 가장 일반적인 방법
```js
/** 모듈 내보내기 (MyModule4) */
class HelloWorld {
    constructor(){
        console.log("---- HelloWorld의 객체가 생성되었습니다. ----");
    }
    say(){
        console.log("Hello World");
    }
}
module.exports = new HelloWorld();

/** 모듈 참조 */
const my4 = require('./MyModule4');

// 리턴된 모듈은 객체 형태이므로,
// 직접 모듈 내의 기능을 호출할 수 있다.
my4.say();
/*
    ---- HelloWorld의 객체가 생성되었습니다. ----
    Hello World
*/
```