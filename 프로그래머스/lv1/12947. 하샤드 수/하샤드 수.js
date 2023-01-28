function solution(x) {
    let arr = x.toString().split("").map(Number).reduce((a,b) => a+b , 0)
             //정수x를 문자화->배열화->   숫자화  -> 원소들의 합
   return ( x%arr === 0)
}