/** 재귀함수로 팩토리얼 구하기 */
function f(x) {
    if( x==1 ){
        console.log(1);
        return 1;
    } else {
        console.log(x + " x " + "f(" + (x-1) + ")");
        return x*f(x-1);
    }
}
const a = f(5);
console.log(a);

/*
    f(5) = 5 * f(4) => 5 * 24 = 120
                 4 * f(3) => 4 * 6 = 24
                       3 * f(2) => 3 * 2 = 6
                             2 * f(1) => 2 * 1 = 2
*/