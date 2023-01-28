function solution(arr) {
    let a = [];
    let min = Math.min(...arr);
    let answer = arr.filter((i) => i !== min);
    if (answer.length == 0 ) {
         a.push(-1);
        return a
        }
    return answer;
}