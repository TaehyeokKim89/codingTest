function solution(sides) {
    let answer = 0;
    let a = sides.sort( (a,b) => a-b);
    for ( let i = 1; i < a[0]+a[1]; i ++) {
        if ( a[1]-a[0] < i)
        answer++
    }
    return answer;
}