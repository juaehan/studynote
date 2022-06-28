# Node Modules
Node.js 안에 처음부터 내장되어 있는 모듈들로 JS의 내장 객체와 다르다.
JS 내장객체는 객체를 만들지 않아도 사용할 수 있고, Node 내장 모듈은 `import`를 적용해야 사용할 수 있다.

---

## #01 Path 모듈
- Node가 구동중인 컴퓨터 내의 경로를 관리하는 기능이다.
- JavaScript의 `location` 객체가 페이지의 URL을 관리한다면, Node의 `Path`모듈은 내 컴퓨터 안의 파일 경로를 관리한다.

### 1. 모듈참조
```js
import path from 'path';
```

<br />

### 2. 경로 합치기(join)
1. `path.join()`의 파라미터는 제한이 없다.
2. 조합된 경로 문자열에 해당하는 PATH가 실제로 존재하는지는 상관없다.
```js
const currentPath = path.join('C:/User/hello/word', 'myphoto', '../photo.jpg');
// 경로를 합치게 되면 C:/User/hello/word/myphoto 이나, photo.jpg가 상위 폴더에 위치하므로 결국 C:\User\hello\word\photo.jpg에 위치한다.

console.group('path JOIN');
    console.debug(currentPath);
console.groupEnd();

/*
    path.join
        C:\User\hello\word\photo.jpg
*/
```

<br />

### 3. 디렉토리, 파일명, 확장자 구분하기
-  C:\User\hello\word\photo.jpg
```js
const dirname = path.dirname(currentPath);
const basename = path.basename(currentPath);
const extname = path.extname(currentPath);

console.group('경로 분활하기');
    console.debug('디렉토리 : %s', dirname);
    console.debug('파일이름 : %s', basename);
    console.debug('확장자 : %s', extname);
console.groupEnd();
/*
    경로 분활하기
        디렉토리 : C:\User\hello\word
        파일이름 : photo.jpg
        확장자 : .jpg
*/
```

<br />

### 4. 경로정보 파싱
- 경로를 조각내서 JSON객체로 return 해준다.
```js
const parse = path.parse(currentPath);

console.group('경로정보 파싱');
    console.debug('%o', parse);
    console.debug('root : ' + parse.root);
    console.debug('dir : ' + parse.dir);        // 디렉토리
    console.debug('name : ' + parse.name);      // 파일이름
    console.debug('ext : ' + parse.ext);        // 확장자
console.groupEnd();
/*
    경로정보 파싱
        {
            root: 'C:\\',
            dir: 'C:\\User\\hello\\word',
            base: 'photo.jpg',
            ext: '.jpg',
            name: 'photo'
        }
        root : C:\
        dir : C:\User\hello\word
        name : photo
        ext : .jpg
*/
```
<br />

#### [특이사항]
> `path.basename`은 `파일명.확장자`가 함께 나오지만 `path.parse의 name`은 **확장자가 함께 나오지 않는다.** <br />
> 파일 경로 핸들링은 `파일 업로드`구현 시 중요하므로 잘 알아둬야 한다.

---
