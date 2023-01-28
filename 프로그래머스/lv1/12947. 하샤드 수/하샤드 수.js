function solution(x) {
    let arr = x.toString().split("").map(Number).reduce((a,b) => a+b , 0)
             //정수x를 문자화->배열화->   숫자화  -> 원소들의 합
    if ( x%arr === 0) { // x를 arr로 나눴을 때 나머지가 0이면 하샤드 수
        return true;
    } else {
        return false;
    }
}