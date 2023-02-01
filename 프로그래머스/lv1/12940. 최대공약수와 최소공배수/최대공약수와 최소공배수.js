function solution(n, m) {
        let a = 1;
        for ( let i =2; i <= Math.min(n,m); i++) { //최대공약수는 두 수의 공통된 약수 중에 가장 큰 정수이다.
            if ( n%i === 0 && m%i=== 0) {
                a = i;
            } 
        }
        let b = 1; 
        for ( let i = 1; i<=n*m; i++) {
            if ( i%n === 0 && i%m ===0) {  //최소공배수는 두 수의 공통된 배수 중 가장 작은 수이다.
                break;
            } b++;
        }
        return [a,b].sort((a,b) => a-b);
  }