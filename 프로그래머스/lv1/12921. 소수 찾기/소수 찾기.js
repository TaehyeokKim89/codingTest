function solution(n) {
    let count = 0;
    for (let i = 2; i <=n; i++ ) {
        if(isPrime(i) === true){ // 소수 판별시 true일 경우 카운트
            count++
        } 
    } return count;    
}
function isPrime(num) {
    if (num === 1) {
        return false;
    } else if (num === 2) {
        return true;
    } else {
        for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
            if (num % i === 0) {
                return false; 
            }
        }
        return true;
    }
}