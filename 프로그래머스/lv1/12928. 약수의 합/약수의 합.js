function solution(n) {
    let arr = [];
    for( let i =1; i <=n; i++ ) {
        if( n%i === 0) {  //n/i의 나머지가 0일 때 i의 값들 n의 약수이다.
            arr.push(i); 
        } 
    }return arr.reduce((a,b) => a+b, 0); //약수의 배열의 총합을 구한다.
}