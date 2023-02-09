function solution(my_str, n) {
    let len = Math.ceil(my_str.length/n)
    let answer = [];
    for (let i = 0; i < len;  i++) {
        let a = my_str.substr(0,n)
        answer.push(a);
         my_str= my_str.slice(n); 
         console.log(my_str.length)
    } 
    return answer
}