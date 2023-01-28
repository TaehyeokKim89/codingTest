function solution(s) {
    let a = s.split(" "); //배열을 공백(띄어쓰기) 기준으로 나눈다
    let answer = []; // 다시 넣어줄 빈 배열 선언
    
    for (let i = 0; i < a.length; i++) {  //a의 길이만큼 반복문을 돌려 각 문자열을 확인
        answer[i] = "";                   //answer[i]에 대소문자 변환 된 문자열 넣어주기
        for (let j = 0; j < a[i].length; j++) {//a[i]=나눠진 각 문자열의 길이  
            if ( j%2 == 0 ) {                   //각 문자가 짝수에 위치할 때 대문자로 변환 후 answer[i]에 집어 넣기               
                answer[i] += a[i][j].toUpperCase();
            } else {
                answer[i] += a[i][j].toLowerCase();//홀수 위치일 때 소문자로 변환 후 집어 넣기
            }
        }   
    }
    return answer.join(" "); // answer를 " "(띄어쓰기)를 기준으로 문자열로 반환
}