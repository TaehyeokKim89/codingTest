function solution(my_string) {
    let a = my_string.split(" ");
    let sum = a[0] * 1; // *1을 해주면 문자열이 숫자로 바뀐다. 초기값으로 설정해준다.
    for (let i = 0; i <a.length; i++) {
        if ( a[i] == "+") {
            sum += a[i+1]*1 //"+"라면 다음수를 숫자로 만들어 더해준다.             
        } else if (a[i] == "-") {
            sum -= a[i+1]*1 //"-"라면 다음수를 숫자로 만들어 빼준다.
        } else {
            continue; // 위 두 조건이 아니라면 넘어간다.
        }       
    } return sum;
}