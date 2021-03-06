# ES6
1. `yarn init`을 터미널에 입력한다.
2. `package.json`파일에 `"type" : "module"`을 추가해주면 ES6로 손쉽게 바꿀 수 있다.


### 01. 사용자 정의 함수
- 한 개의 기능을 보낼 때 `export default`를 사용한다.
```js
/** 모듈 내보내기 (MyModule1)*/
function helloWorld(){
    console.log("Hello World");
}
export default helloWorld;

/** 모듈 참조*/
import my1 from './MyModule1.js';
my1();          // Hello World
```


### 02. exports 속성으로 변수, JSON, 함수 추가
- 여러개의 기능을 내보낼 경우 `default`를 적용하지 않고, `{}`로 묶는다.
```js
/** 모듈 내보내기 (MyModule2)*/
const name = "노드";
const property = {id: 'nodejs', type: 'javascript'};
const say = function(){
    console.log("Hello World");
};

const home = {
    postcode: '12345',
    address: '서울시 강남구 역삼동',
    getAddress: function(){
        console.log(this.postcode + ' ' + this.address);
    }
};
export {name, property, say, home};

/** 모듈 참조*/
import {name, property, say, home} from './MyModule2.js';

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
/** 모듈 내보내기 (MyModule1)*/
class MyClass{
    constructor(){
        console.log("---- MyClass의 객체가 생성되었습니다. ----");
        this.age = 20;
        this.name = "노드";
    }

    say(){
        console.log("이름: " + this.name);
        console.log("나이: " + this.age);
    }
}

export default MyClass;

/** 모듈 참조*/
import my3 from './MyModule3.js';

const module_obj = new my3();
module_obj.say();
/*
    ---- MyClass의 객체가 생성되었습니다. ----
    이름: 노드
    나이: 20
*/
```

### 04. 객체 모듈화 --> 가장 일반적인 방법
- 한 개의 기능을 보낼 때 `export default`를 사용한다.
```js
/** 모듈 내보내기 (MyModule1)*/
class HelloWorld {
    constructor(){
        console.log("---- HelloWorld의 객체가 생성되었습니다. ----");
    }

    say(){
        console.log("Hello World");
    }
}

export default new HelloWorld();

/** 모듈 참조*/
import my4 from './MyModule4.js';

// 리턴된 모듈은 객체 형태이므로,
// 직접 모듈 내의 기능을 호출할 수 있다.
my4.say();
/*
    ---- HelloWorld의 객체가 생성되었습니다. ----
    Hello World
*/
```