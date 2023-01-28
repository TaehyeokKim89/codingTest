function solution(arr, divisor) {
    var answer = [];
    for (let i = 0; i < arr.length; i++) {
        if ( arr[i]%divisor === 0) {
            answer.push(arr[i]);
        } 
        
    }
    if ( answer.length == 0) { // answer가 빈 배열이면 길이는 0이므로 0일때 -1을 push한다.
            answer.push(-1);
        }
    return answer.sort((a,b) => (a-b));
}