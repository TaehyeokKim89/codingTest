function solution(d, budget) {
    let a = d.sort((a,b)=> a-b); //오름차순 정렬 후 앞의 원소부터 더해서 예산을 안넘을 때 그때까지 더해진 원소 수를 구한다.
    let b = []; //  더해질 값들이 들어갈 배열
    let c = 0;   // 더해질 값의 초기값 선언
    for (let i =0; i< a.length; i++ ) {
        if ( c <= budget) { 
            c += a[i];  // 예산이 넘을 때까지 더해주기
            b.push(a[i]);  // 그럴 때마다 값 넣어주기
        }  
    }
    if ( c > budget) {
        return b.length -1;  //더한 값이 예산을 넘을때 한개의 값이 더 들어가므로 더해준값들의 배열의 길이에서 -1 해준다.
    } else {
        return b.length; //더해준값들의 배열의 길이가 예산을 받을 최대 부서 수
    }
};