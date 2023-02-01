function solution(nums) {
    let num = [...nums];  //기존 배열의 길이를 이용해야하기 때문에 깊은복사한다.
    let a = num.filter((x , index) => {  // indexOf(x) x값과 일치하는 첫번째 값의 인덱스를 가져온다.
        return num.indexOf(x) === index; // 인덱스값들이 일치하는 값들만 필터로 걸러준다.
    });
    let b = (nums.length)/2; //가지고 갈 수 있는 마리수는 전체(nums.length)/2 마리를 가지고 갈 수 있다.
    if ( a.length >= b) {  //종류의 개수보다 가질 수 있는 마리수가 적거나 같다면 가질수있는 수만큼의 종류를 가져갈 수 있다.
        return b;
    } else if ( a.length < b) {//종류개수 보다 가질 수 있는 마리수가 더 많다면 종류 수 만큼의 종류를 가져갈 수 있다.
        return a.length;
    } 
}