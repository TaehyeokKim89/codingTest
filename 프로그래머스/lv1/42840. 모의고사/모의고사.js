function solution(answers) {
    let no1 = [1,2,3,4,5];  //1번 수포자 찍는방식
    let no2 = [2,1,2,3,2,4,2,5]; //2번 수포자 찍는방식
    let no3 = [3,3,1,1,2,2,4,4,5,5]; //3번 수포자 찍는방식
    let result = [0, 0, 0];  // 정답 갯수 받을 배열 초기화;
    for (let i = 0; i < answers.length; i++) {
        if( no1[i%5] === answers[i]) { // 1번 수포자는 5문제씩 반복이니 5로 나누는 나머지가 반복 
            result[0] ++                // 해당 하는 요소와 정답 비교 후 같다면 result[0]에 카운트
        }
        if( no2[i%8] === answers[i] ) { // 2번 수포자는 8문제씩 반복이니 8로 나누는 나머지가 반복 
            result[1] ++                // 해당 하는 요소와 정답 비교 후 같다면 result[1]에 카운트
        }
        if( no3[i%10] === answers[i]) { // 3번 수포자는 10문제씩 반복이니 10으로 나누는 나머지가 반복 
              result[2] ++              // 해당 하는 요소와 정답 비교 후 같다면 result[2]에 카운트
        }
    }
    let answer = [];
    let max = Math.max(...result); // 가장 정답 갯수가 많은 값 추출
    let index = 0;
    for (let i = 0; i < 3; i++) {
        if (max === result[i]) {  //max값과 result[i]와 같다면 해당 수포자가 1등
            answer[index] = i+1 ; // 1등 수포자는 index+1이고, answer[index]위치에 넣는다.
            index ++;
        }
    }
    
    return answer;
}