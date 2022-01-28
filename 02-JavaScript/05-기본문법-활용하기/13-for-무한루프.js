for (let i=0; true; i++){
    if(i%2==0){
        // for문의 continue는 증감식으로 이동함
        continue;
    }
    if(i>10){
        break;
    }
    console.log("Hello World ::: %d", i);
}