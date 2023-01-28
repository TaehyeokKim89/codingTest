function solution(n) {
    let x = 0; // 초기값 선언
    for(let i = 1; i <= n; i++) {
        if ( Math.pow (i, 2) == n ) {  
           x = (i+1) * (i+1); // i*i 이 n과 같다면 i는 n의 제곱근
        break;
        } 
        
    }
    if (x == 0) { //제곱급이 아니라면 x값이 0이므로 -1을 반환
        return -1;
    }
    return x;  //i+1의 제곱을 반환
  }
