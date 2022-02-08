function gugu(level, depth=1){
    if (depth > 9){
        return;
    }else{
        console.log(level + " x " + depth + " = " + (level*depth));
        gugu(level, depth+1);   // 5*2로 넘어감
    }
}
gugu(5);