function solution(n) {
    let a = 1; 
   for (let i = 1; i < n; i++) {
    if ( n % i === 1) {  //n을 i를 나눴을 때 나머지가 1일때
             break;      // break로 가장 작은 자연수일때 반복문 멈춤
    }  a++  //반복문 돌때마다 늘려준다.
   } return a;
}