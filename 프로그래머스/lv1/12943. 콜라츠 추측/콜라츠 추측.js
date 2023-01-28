function solution(n) {
    let count = 0;
    for (let i = 1; i < 8000000; i++) {
        if ( n % 2 === 0) { // n이 짝수 일때
            n = n/2;
            count ++;            
       } else if ( n === 1) { //n이 1이면 반복문을 먼춘다.
        break;
       } 
        else if ( n !== 1) { //n이 1이 아니고, 홀 수일 때
           n= (n*3) +1;
           count ++ ;
       }
    }
    if ( count > 500) { // count(작업)가 500번을 넘을 때 
        return -1
    }
    return count;
}