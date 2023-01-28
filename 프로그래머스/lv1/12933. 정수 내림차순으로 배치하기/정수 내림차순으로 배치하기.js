function solution(n) {
    let s = String(n).split("").map(Number).sort( (a,b) => b-a).join("");
          //정수를 문자화->배열화->배열안을 숫자화-> 내림차순 정렬->문자열화
    return Number(s);// 문자열을 다시 숫자로
}