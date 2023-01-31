function solution(left, right) {
    let arr = [];
    for (let i = left; i <=right; i++) {
        let count = 0;  // 약수개수 카운트 초기값 선언
        for (let j = 1; j <= i; j++) {
            if( i%j ===0 ) { //left(i) 의 값과 나눴을 때 나머지가 없는게 약수이므로 
                count++;     // 그럴때마다 카운트            
            }                            
        }arr.push(count); //카운트값을 배열에 집어 넣는다. 
    }
    let arr3 = [];
    for (let i = 0; i< arr.length; i++ ) {//위의 배열을 짝 홀로 구분 짓기 위해
        if( arr[i]% 2 === 0) {    // 짝,홀 배열을 만든다.           
            arr3.push("짝");
        } else {
            arr3.push("홀");
        }
    }   
    let arr4 = [];
    for (let i =left; i <=right; i++) {
        arr4.push(i);    //left,rigth 값 배열을 만든다.
    }
    let arr5 = [];
    for (let i = 0 ; i <arr3.length; i++ ) {
        if( arr3[i] == "짝") {   // 각 배열의 값을 짝,홀인지 비교 후 홀이면 마이너스로 반환한다.
            arr5.push(arr4[i]);
        } else {
            arr5.push(-arr4[i]);
        }
    }
    return arr5.reduce((a,b) => a+b, 0) //마지막으로 모든 원소를 더한다. 
}