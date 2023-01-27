function solution(participant, completion) {
    let a = participant.sort(); // 사전 순으로 정렬
    let b = completion.sort(); 
    for (let i = 0; i < a.length; i++) {
        if ( a[i] !== b[i]) {   //a[i] 와 b[i]가 같지 않을 때
            return a[i];       //a[i] 값을 반환한다. 
        }; 
    }
    
}