function solution(array, commands) {
    let answer = [];
       let a = commands.map((a ) => array.slice(a[0]-1,a[1]).sort((a,b)=> a-b));
            //commands 배열을 순회하여 array를 해당 범위만큼 잘라 준 후 정렬한다.     
       for (let i = 0; i < commands.length; i++) {
               answer.push((a[i][commands[i][2]-1]));
               //잘라진 배열을 반복문으로 돌아 해당 숫자 위치 (index-1)를 가져와 answer배열에 넣는다.
       } return answer;   
}
