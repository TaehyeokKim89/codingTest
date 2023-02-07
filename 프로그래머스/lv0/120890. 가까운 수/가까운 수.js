function solution(array, n) {
    let answer = []
    let a = array.map((x) =>Math.abs(n-x)) 
    for (let i =0; i<a.length; i++) {
        if ( Math.min(...a) === a[i]) {
               answer.push(array[i]);
        }
    }   return Math.min(...answer); 
}