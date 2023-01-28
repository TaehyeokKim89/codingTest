function solution(n) {
    let answer = n.toString(3).split("").reverse().join("");
                //n을 3진법으로->배열로 ->배열 뒤집기-> 문자열로
    let a = parseInt(answer,3); // answer를 10진수로
    return a;
}