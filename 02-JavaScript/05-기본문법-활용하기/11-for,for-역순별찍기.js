/*
    - i는 행, 출력하고 싶은 행까지 범위 지정
    - j는 열, *이 찍히는 위치
    - 역순으로 찍기 위해서는 "행의 수-i"
*/


for(let i=0; i<7; i++){
    let str="";
    
    for(let j=0; j<7-i; j++){
        str+="*";
    }
    console.log(str);
}