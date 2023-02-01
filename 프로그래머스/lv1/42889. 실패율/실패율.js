function solution(N, stages) {
    let b = []; //스테이별 머문 사람의 수를 넣을 배열
    let answer = [];
    for (let i =1; i <=N; i++) {
        let count = 0;
        for(let j= 0; j < stages.length; j++) {
            if ( i == stages[j]){
                    count++   //스테이지별로 머물러 있는 사람의 수를 카운트해서 카운트 배열(b)에 넣는다.
            } 
        } b.push(count);
    } 
    for (let i = 0; i <b.length; i++) {
         answer.push(b[i]/stages.length);  //answer배열에 스테이지별 클리어 못한 인원과 총 인원을 나눠 확률을 구한다.
            stages.length = stages.length-b[i]; // 다음 스테이지는 전 스테이지 머문 인원을 총길이에서 빼준 수를 분모로 한다.
    } 
    let realAnswer = [];
    const copy = [...answer]; // answer배열이 변하면 안되기에 깊은 복사를 한다.
    let sorted = copy.sort((a,b) => b-a); // copy 배열을 내림차순 정렬한다. 
    let index = 0;
    for (let i = 0; i < answer.length; i++) {
        for(let j = 0; j < answer.length; j++) { //내림차순 정렬한 배열과 answer배열을 비교하여
        if (sorted[i]=== answer[j]) {            //값이 같을때의 copy배열의 인데스 위치에 answer배열 인덱스+1을 해서 넣어준다.
        realAnswer[index] = j+1;                // 이러면 확률값의 순서가 단계별 순서로 바뀐다.
            index ++           
        } else if(isNaN(sorted[i])  && isNaN(answer[j]) ) {   
        realAnswer[index] = j+1;                // 확률이 0일 경우 'NaN'이 나오므로 이럴때도 확인해준다.
            index ++
        }
    }
    }
    return Array.from(new Set(realAnswer))  // 중복값이 나오기 때문에 중복값을 Set으로 없애주고 다시 배열로 반환한다.
} 