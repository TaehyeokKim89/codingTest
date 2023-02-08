function solution(s) {
    let ans = [];    
    let sArr = s.split("");    
    sArr.forEach((item) => {  //각 원소의 인덱스값이 마지막 인덱스값과 일치하지 않으면 중복된 문자가 있으므로 한번만 등장하지 않는다.
        if(s.indexOf(item) === s.lastIndexOf(item)){
            ans.push(item);
        }
    })    
    return ans.sort().join("");
}