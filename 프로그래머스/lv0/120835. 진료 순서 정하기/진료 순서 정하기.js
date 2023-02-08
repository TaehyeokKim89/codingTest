function solution(emergency) {
    let realAnswer = [];
    const answer = [...emergency];
    let a = emergency.sort((a, b) => b - a);
    for (let i = 0; i < answer.length; i++) {
        for (let j = 0; j < a.length; j++) {
            if (answer[i] == a[j]) {
                realAnswer.push( j + 1 );
            }
        }
    }
    return realAnswer;
}