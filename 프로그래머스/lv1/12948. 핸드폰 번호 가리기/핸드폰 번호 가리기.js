function solution(phone_number) {
    let answer = '';
    let a = phone_number.length-4;
    answer = "*".repeat(a) + phone_number.substring(a);
    return answer;
}