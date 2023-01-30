function solution(strings, n) {
    let string = [];
    for (let i = 0; i < strings.length; i++) {
        let front = strings[i][n]; // n번째 인덱스의 글자를 앞글자로 하기 위해 변수를 선언한다.
        strings[i] = front + strings[i]; // 추출한 글자를 각 문자열 앞에 붙여준다. 
        string.push(strings[i]); // 붙인 문자열을 빈배열에 넣는다.
    }
     let a = string.sort() //배열을 정렬해준다. 
     let answer = [];
     for (let i = 0; i < a.length; i++) {
        answer.push(a[i].slice(1)); // 정렬된 문자열에서 붙여준 첫글자를 제거하고 다시 반환한 뒤 새로운 배열에 넣는다.
     }
    return answer;
}
    