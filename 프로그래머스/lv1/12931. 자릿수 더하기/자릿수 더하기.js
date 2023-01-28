  function solution(n) {
    return n.toString().split("").map(Number).reduce((total, value) => total+value, 0);
      // 자연수 n을 문자화 -> 배열화 -> 배열 안을 숫자화 -> 배열 안 숫자 모두 더하기
}
