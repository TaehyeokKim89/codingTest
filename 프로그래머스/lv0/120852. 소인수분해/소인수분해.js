function solution(n) {
    let a = []
    let answer = [];
    for (let i = 1; i <= n; i++) {
        if ( n%i == 0) {
            a.push(i);
        }
    } 
    for (let i = 0; i < a.length; i++) {
        if( isPrime(a[i]) == true) {
            answer.push(a[i]);
        } 
    }
    return answer;
}
function isPrime (k) {
    for (let i = 2; i < k; i++) {
        if ( k%i === 0) {
            return false;
        } 
    } 
    return k >1 ;
}