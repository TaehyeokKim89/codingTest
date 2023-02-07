function solution(n) {
    count = 1;
    for( let i =1; i <=n; i++) {
        if ( count <= n) {
            count *= i+1;
            answer = i;
        } 
    } return answer
}