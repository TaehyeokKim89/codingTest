function solution(arr) {
    let min = Math.min(...arr); //최소값 찾기
    let answer = arr.filter((i) => i !== min);//최소값만 제거
    if (answer.length == 0 ) {//빈배열일때 배열 길이는 0
                                // 배열에 -1 추가
        return [-1];
        }
    return answer;
}